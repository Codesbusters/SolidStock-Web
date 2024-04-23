import {f} from "@nextui-org/slider/dist/use-slider-64459b54";

function getCart() {
    if (typeof window !== 'undefined') {
        let cart = window.localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }
    return [];
}

// Sauvegarde le panier dans le LocalStorage
function saveCart(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
    const event = new Event('cartChanged');
    window.dispatchEvent(event);
}

// Ajoute un produit au panier
function addToCart(id: any, quantity: any) {
    const cart = getCart();
    const productIndex = cart.findIndex((product: { id: any; }) => product.id === id);

    if (productIndex !== -1) {
        cart[productIndex].quantity += quantity;
    } else {
        cart.push({ id, quantity });
    }

    saveCart(cart);
}

// Supprime un produit du panier
function removeFromCart(id: any) {
    let cart = getCart();
    cart = cart.filter((product: { id: any; }) => product.id !== id);
    saveCart(cart);
}

// Modifie la quantité d'un produit dans le panier
function updateQuantity(id: any, quantity: any) {
    const cart = getCart();
    const productIndex = cart.findIndex((product: { id: any; }) => product.id === id);

    if (productIndex !== -1) {
        cart[productIndex].quantity = quantity;
    }

    saveCart(cart);
}

function getCartSize() {
    const cart = getCart();
    return cart.reduce((acc: any, product: { quantity: any; }) => acc + product.quantity, 0);
}

function clearCart() {
    localStorage.removeItem('cart');
}

export default { getCart, addToCart, removeFromCart, updateQuantity, saveCart, getCartSize, clearCart };
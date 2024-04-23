// ProductList.js

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button, Image, Input } from "@nextui-org/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import getAllProducts from "../../functions/api";
import cartManager from "../../functions/cart";
import {useEffect, useState} from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [quantities, setQuantities] = useState<number[]>([]);


        const fetchProducts = async () => {
            try {
                const productsData = await getAllProducts();
                setProducts(productsData);
                setQuantities(Array(productsData.length).fill(0));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();


    const incrementQuantity = (index: number) => {
        const newQuantities = [...quantities];
        newQuantities[index]++;
        setQuantities(newQuantities);
    };

    const decrementQuantity = (index: number) => {
        const newQuantities = [...quantities];
        newQuantities[index] = Math.max(0, newQuantities[index] - 1);
        setQuantities(newQuantities);
    };

    const handleAddToCart = (index: number) => {
        cartManager.addToCart(products[index].id, quantities[index]);
    };

    return (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
            {products.map((product, index) => (
                <Card key={product.id}>
                    <Image src={product.image} alt={product.name} width={300} height={200} />
                    <CardBody>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price} €</p>
                    </CardBody>
                    <CardFooter>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Button
                                    className="flex items-center gap-2"
                                    size="sm"
                                    onClick={() => decrementQuantity(index)}
                                >
                                    <BiMinus />
                                </Button>
                                <Input
                                    value={quantities[index].toString()}
                                    type="number"
                                    className="w-12"
                                    onChange={(e) => {
                                        const newQuantities = [...quantities];
                                        newQuantities[index] = parseInt(e.target.value);
                                        setQuantities(newQuantities);
                                    }}
                                />
                                <Button
                                    className="flex items-center gap-2"
                                    size="sm"
                                    onClick={() => incrementQuantity(index)}
                                >
                                    <BiPlus />
                                </Button>
                            </div>
                            <Button
                                className="flex items-center gap-2"
                                size="sm"
                                onClick={() => handleAddToCart(index)}
                            >
                                <CiShoppingCart />
                                Add to cart
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

'use client';
import ProductList from "@/components/productList/ProductList";


export default function Product({params}: { params: { id: string } }) {
    return (
        <>
            <p className="text-2xl font-bold">Products Family {params.id}</p>
            <ProductList/>
        </>
    );
}

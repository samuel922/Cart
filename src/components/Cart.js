import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    title: "Mobile Phone",
                    price: 10000,
                    qty: 1,
                    imgUrl: ""
                },
                {
                    id: 2,
                    title: "Tablet iPhone",
                    price: 12000,
                    qty: 1,
                    imgUrl: ""
                },
                {
                    id: 3,
                    title: "Hp ZenBook",
                    price: 15000,
                    qty: 1,
                    imgUrl: ""
                },
                {
                    id: 4,
                    title: "PS 2023",
                    price: 10000,
                    qty: 1,
                    imgUrl: ""
                }
            ]
        }
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map(product => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>
        );
    }
}

export default Cart;
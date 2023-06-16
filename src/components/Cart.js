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

    handleIncreaseQuantity = (product) => {

        const { products } = this.state;

        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            ...products,
        })

    }

    handleDecreaseQuantity = (product) => {
        const { products } = this.state;

        const index = products.indexOf(product);

        if (products[index].qty === 0) return;

        products[index].qty -= 1;

        this.setState({
            ...products
        })
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;

        const items = products.filter(item => item.id !== id);

        this.setState({
            products: items,
        })
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map(product => (
                    <CartItem 
                        key={product.id} 
                        product={product} 
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}
                    />
                ))}
            </div>
        );
    }
}

export default Cart;
import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
        const { products, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
        return (
            <div className="cart">
                {products.map(product => (
                    <CartItem 
                        key={product.id} 
                        product={product} 
                        onIncreaseQuantity={onIncreaseQuantity}
                        onDecreaseQuantity={onDecreaseQuantity}
                        onDeleteProduct={onDeleteProduct}
                    />
                ))}
            </div>
        );
}

export default Cart;
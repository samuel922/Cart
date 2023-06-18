import React from "react";

const CartItem = (props) => {

        const {
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity,
            onDeleteProduct
        } = props;

        const { 
            title, 
            price, 
            qty,
            imgUrl
        } = product;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img className="productImage" src={imgUrl} />
                </div>
                <div className="right-block">
                    <h3 style={{ fontSize: 25 }}>{title}</h3>
                    <p style={{ color: "#777" }}>Price: Ksh.{price}</p>
                    <p style={{ color: "#777" }}>Qty: {qty}</p>
                    <div className="cart-item-actions">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                            alt="increase" 
                            className="action-icons" 
                            onClick={() => onIncreaseQuantity(product)}

                        />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                            alt="decrease" 
                            className="action-icons" 
                            onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                            alt="delete" 
                            className="action-icons" 
                            onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
}

export default CartItem;
import React from "react";

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 10000,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {
        console.log(this.state);
    }

    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <h3 style={{ fontSize: 25 }}>{title}</h3>
                    <p style={{ color: '#777' }}>Ksh.{price}</p>
                    <p style={{ color: '#777'}}>Qty: {qty}</p>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            className="action-icons" 
                            alt="increase" 
                            src="https://cdn-icons-png.flaticon.com/128/3024/3024515.png" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            className="action-icons" 
                            alt="decrease" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                        />
                        <img 
                            className="action-icons" 
                            alt="delete" 
                            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;
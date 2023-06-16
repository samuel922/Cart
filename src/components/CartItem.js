import React from "react";

class CartItem extends React.Component {

    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <h3 style={{ fontSize: 25 }}>Phone</h3>
                    <p style={{ color: '#777' }}>Ksh. 10000</p>
                    <p style={{ color: '#777'}}>Qty: 1</p>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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
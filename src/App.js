import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import * as firebase from "firebase";

class App extends React.Component {
    constructor() {
      super();
      this.state = {
          products: []
      }
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('products')
      .get()
      .then((snapshot) => {
        console.log(snapshot);
      })
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

  getCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach(product => {
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      cartTotal += product.qty + product.price;
    })
    return cartTotal;
  }
  render() {
    const { products } = this.state;
    return (
      <>
        <Navbar count={this.getCount()} />
        <Cart 
          products={products} 
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div>TOTAL: Ksh.{this.getCartTotal()}</div>
      </>
    )
  } 
}


export default App;
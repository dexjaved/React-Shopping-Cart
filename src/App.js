import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor (){
    super()
    this.state ={
        products : [
            {
            price :500,
            title : 'Quran',
            qty: 1,
            img: "/quran.png",
            id: 1
         }, 
         {
            price :200,
            title : 'Card',
            qty: 1,
            img: "/card.png",
            id: 2
         }, 
         {
            price :250,
            title : 'Mug',
            qty: 1,
            img: "/mug.png"
         } 
        ]
    }
    //this.increaseQuantity = this.increaseQuantity.bind(this);
}
 handleIncreaseQuantity = (product) =>{
    console.log('hey increase the quantity ',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products: products
    })

 }
 handleDecreaseQuantity = (product) =>{
    console.log('hey decrease the quantity ',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty===1){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products: products
    })

 }


 handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
        products:items
    })
 }
 getCartCount = () => {
   const {products} = this.state;
   let count = 0;
   products.forEach((product) => {
     count += product.qty;
   })
   return count;
 }
 getCartTotal = () =>{
   const {products} = this.state;
   let cartTotal = 0;
   products.forEach((product) => {
    cartTotal = cartTotal + product.qty* product.price;
   })
   return cartTotal;
 }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart 
        products = {products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 30}}> Total :{this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;

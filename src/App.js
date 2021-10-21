import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor (){
    super()
    this.state ={
        products : [
            {
            price :999,
            title : 'phone',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80',
            id: 1
         }, 
         {
            price :999,
            title : 'watch',
            qty: 1,
            img: 'https://media.istockphoto.com/photos/military-style-watch-picture-id650233226?s=612x612',
            id: 2
         }, 
         {
            price :999,
            title : 'laptop',
            qty: 4,
            img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
            id: 3
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
    if(products[index].qty==0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products: products
    })

 }


 handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id != id);
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
   products.map((product) => {
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

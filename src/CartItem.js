import React from 'react';

const CartItem = (props) => {
    
        //const {price , title, qty} = this.state;
        const {price , title, qty} = props.product;
        const {product,
             onIncreaseQuantity, 
             onDecreaseQuantity,
             onDeleteProduct
            } = props;
        
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} src={product.img} />    
                </div>
                <div className="right-block"> 
                    <div style={{fontSize: 25}}> {title} </div> 
                    <div style={{color: '#777'}}> {price} </div> 
                    <div style={{color: '#777'}}> {qty} </div> 
                    <div className="cart-item-actions"> {/* Button*/}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1634801303~hmac=606e78991f2955037cbe89bcd5bc2151" 
                        onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                        onClick = {() => onDeleteProduct(product.id)}
                        />
                     </div> 
                </div> 
            </div>     
        );
    
}
const style ={
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;
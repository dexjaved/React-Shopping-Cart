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
                    <img alt="" style={style.image} src={product.img} />    
                </div>
                <div className="right-block"> 
                    <div style={{fontSize: 25}}> {title} </div> 
                    < div style={{color: 'green'}}> Rs.{price} </div> 
                    <div style={{color: '#777'}}> Qty. {qty} </div> 
                    <div className="cart-item-actions"> {/* Button*/}
                       
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="/minus.png" 
                        onClick={() => onDecreaseQuantity(product)}
                        />
                         <img alt="increase" 
                        className="action-icons" 
                        src="/plus.png" 
                        onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="/delete.png" 
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
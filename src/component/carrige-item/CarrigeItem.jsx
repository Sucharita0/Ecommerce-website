import React, { useContext } from "react";
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from "../Context/shop-context";
import './CarrigeItem.css';
function CarrigeItem(){
    const {getTotalCartAmount,all_product, cartItems, removeFromCart} = useContext(ShopContext);
    return(
        
        <div className="carrige-item">
            <div className="cartitem-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>

           {
            all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div> 
                    <div className="cartitem-format cartitem-format-main">
                        <img src={e.image} alt="" className="cart-icon"/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cart-quantity">{cartItems[e.id]}</button>
                        <p>{e.new_price*cartItems[e.id]}</p>
                        <img className="cart-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                    </div>
                    <hr/>
                </div>
                }
                return null;
            })
        }
           
           <div className="cart-down">
            <div className="cart-total">
                <h1>cart Total</h1>
                <div>
                    <div className="item-total">
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="item-total">
                        <p>shipping</p>
                        <p>free</p>
                    </div>
                    <hr/>
                    <div className="item-total">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>proceed to checkout</button>
            </div>
            <div className="cart-promecode">
                 <p>If you have a promocode, Enter it here</p>
                 <div className="cart-promobox">
                    <input type="text"/>
                    <button>submit</button>
                 </div>
            </div>
           </div>
            
        </div>
    )
}
export default CarrigeItem;
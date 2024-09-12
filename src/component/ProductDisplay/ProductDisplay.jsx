import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../Context/shop-context';

function ProductDisplay(props){

    const{product} = props;
    const{addToCart} = useContext(ShopContext);
    return(
        <div className='product-display'>
           <div className="productdisplay-left">
            <div className="product-img-list">
            <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-main">
            <img src={product.image} alt=''/>
            </div> 
            </div>  
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
               <div className="product-star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
               </div>
               <div className="prod-prices">
                <div className="prod-old-price">
                    ${product.old_price}
                </div> 
                <div className="prod-new-price">
                    ${product.new_price}
                </div>
                </div>
                <div className="prod-description">
                    A lightweight, usally, pullover shirt, close-fitting and round neckline and short sleeves.
                </div>
                <div className="right-size">
                    <h2>select size</h2>
                    <div className='proper-size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} className='product-button'>ADD To Cart</button>
                <p className='prod-category'><span>Category :</span>Women, T-Shirt, Crop-Top</p>
                <p className='prod-category'><span>Tags :</span>Modern, Latest</p>
               </div>
            </div>
        
    )
}
export default ProductDisplay;
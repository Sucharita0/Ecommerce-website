import exclusive_image from '../Assets/exclusive_image.png';
import './Topper.css';
function Topper(){
    return(
        <div className='topper'>
           <div className="topper-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Best Seller Trends</p>
            <button>check now</button>
            </div> 
           <div className="topper-right">
            <img src={exclusive_image} alt=""/>
           </div>
        </div>
    )
}
export default Topper;
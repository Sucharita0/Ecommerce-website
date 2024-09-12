import React, { useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/shop-context';
import { useAuth0 } from "@auth0/auth0-react";


  function Navbar() {
    const[menu, setMenu] = useState("shop");
    const{getCartCount} = useContext(ShopContext);
    
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className='navbar'>
       <div className='navbar-logo'>
        <img src='https://png.pngtree.com/png-clipart/20230206/ourmid/pngtree-online-shop-logo-png-image_6587676.png' alt=''/>
        <p>Shopper</p>
       </div>

      <ul className='nav-list'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kid</Link>{menu==="kids"?<hr/>:<></>}</li>
        
      </ul>

       <div className='login-cart'>
        {
          isAuthenticated ? (
            <button onClick={() => logout({ returnTo: window.location.origin  })}>
            Log Out
          </button>)  
            : (
              <button onClick={() => loginWithRedirect()}>Log In</button>)
            
          
        }
            
            <Link to='/cart'><img src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3243378/shopping-cart-solid-icon-md.png' alt=''/></Link>
            <div className='nav-cart-count'>{getCartCount()}</div>
       </div>     
       </div>
       )      
    }
    export default Navbar;
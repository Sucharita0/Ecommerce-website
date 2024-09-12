import React, { useContext } from 'react'
import { ShopContext } from '../Context/shop-context'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Breadcrum/Breadcrums';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../Descriptionbox/DescriptionBox';
import RelatedProduct from '../RelatedProduct/ReleatedProduct';

function Product(){
  const{all_product} = useContext(ShopContext);
  const{productId} = useParams();
  const product = all_product.find((e)=>e.id ===Number(productId) );
  return (
    <div>
  
    <Breadcrums product = {product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox/>
    <RelatedProduct/>
    </div>
  )
}
export default Product
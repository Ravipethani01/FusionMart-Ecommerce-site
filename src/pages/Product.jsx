import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Bredcrums from '../components/Bredcrums/Bredcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/Description/Description';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === parseInt(productId))

  return (
    <div className="product">
      <Bredcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product

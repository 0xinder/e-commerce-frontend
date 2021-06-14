import React from 'react'
import Layout from '../../Components/Layout';
import getParams from '../../utils/getParams';
import ProductPage from './ProductPage';
import ProductStore from './ProductStore';
import './style.css';
/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {
  const renderProducts=()=>{
    const params=getParams(props.location.search);
    let content=null;
    switch (params.type) {
      case 'store':
        content=<ProductStore {...props}/>
        break;
      case 'page':
        content=<ProductPage{...props}/>
        break;
      default:
        content=null;
        break;
    }
  return content;
  }

  return(
    <Layout>
      {renderProducts()}
    </Layout>
   )

 }

export default ProductListPage
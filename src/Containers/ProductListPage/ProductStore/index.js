import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../../actions';
import { generatePublicUrl } from '../../../urlConfig';
import {Link} from 'react-router-dom';

/**
* @author
* @function ProductStore
**/

const ProductStore = (props) => {
    const dispatch = useDispatch();
    const [priceRange, setPriceRange] = useState({
      under3k: 300,
      under5k: 500,
      under7k: 700,
      under9k: 900,
    });
    const product = useSelector((state) => state.product);
    useEffect(() => {
      const { match } = props;
      dispatch(getProductsBySlug(match.params.slug));
    }, []);
    return(
      <>
      {
        Object.keys(product.productsByPrice).map((key,index)=>{
          return (
            <div className="card">
              <div className="cardHeader">
                <div>{props.match.params.slug} mobile under {priceRange[key]}</div>
                <button>view all</button>
              </div>
              <div style={{display:'flex'}}>
                {product.productsByPrice[key].map((product) => (
                  <Link to={`/${product.slug}/${product._id}/p`} style={{display:"block"}} className="productContainer">
                    <div className="productImgContainer">
                      <img
                        src={generatePublicUrl(product.productPictures[0].img)}
                        alt=""
                      ></img>
                    </div>
                    <div className="productInfo">
                      <div style={{ margin: "5px 0" }}>{product.name}</div>
                      <div>
                        <span>4.3</span>&nbsp;
                        <span>3353</span>
                      </div>
                      <div className="productPrice">{product.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })
      }
      </>
    )
 }

export default ProductStore;
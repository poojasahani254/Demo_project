import React from 'react';
import ProductDisplay from '../../Components/ProductItemDisplay/index';
import { useHistory } from 'react-router-dom'
import {BASE_URL} from '../../Constant';

 function Product(props) {
    // const classes = useStyles();
    const history=useHistory()

    const handleCartClick =(value)=>{
         history.push({
             pathname:`${BASE_URL}Cart`,
                   })
        // alert('hello Click Button'+JSON.stringify(value))
    }
    const handleBuyNowClick =(value)=>{
        history.push({
            pathname:`${BASE_URL}OrderSummary`,
                  })
       alert('hello Click Button'+JSON.stringify(value))
   }
    return (
       <ProductDisplay handleClick={handleCartClick} handleBuyNow={handleBuyNowClick} {...props} />
    )
}
export  default  (Product)
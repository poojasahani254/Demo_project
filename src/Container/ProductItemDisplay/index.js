import React from 'react';
import ProductDisplay from '../../Components/ProductItemDisplay/index';
import { useHistory } from 'react-router-dom'
import {BASE_URL} from '../../Constant';

 function Product(props) {
    // const classes = useStyles();
    const history=useHistory()

    const handleClick =(value)=>{
         history.push({
             pathname:`${BASE_URL}OrderSummary`,
                   })
        alert('hello Click Button'+JSON.stringify(value))
    }
    return (
       <ProductDisplay handleClick={handleClick} {...props} />
    )
}
export  default  (Product)
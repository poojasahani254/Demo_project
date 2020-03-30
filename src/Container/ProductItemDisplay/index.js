import React from 'react';
import ProductDisplay from '../../Components/ProductItemDisplay/index';

 function Product() {
    // const classes = useStyles();
    const data={
        "id":"123",
        "price":"150.00",
        "description":"This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    }
    const handleClick =()=>{
        alert('hello Click Button')
    }
    return (
       <ProductDisplay handleClick={handleClick} data={data} />
    )
}
export  default  (Product)
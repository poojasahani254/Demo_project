import React, {useState} from 'react';
import ProductDisplay from '../../Components/ProductItemDisplay/index';
import { useHistory } from 'react-router-dom'
import {BASE_URL} from '../../Constant';
import { useDispatch } from 'react-redux';
import { ADDTOCART } from '../../Action/index';

 const Product = (props) =>{
     const [open, setOpen] = React.useState(false);
     const [data,setData]=useState([]);
     const history=useHistory()
     const dispatch = useDispatch();
     let arr1=[];

    const HandleModal = (item) =>{
         setOpen(!open);
         setData(item)
    }
    const handleCartClick =(qty)=>{

        const StoreData={
            data:data,
            qty:qty
        }
        arr1.push(StoreData)
        dispatch(ADDTOCART(arr1))

        let f = false;
        const oldproduct = localStorage.getItem('Data') ? localStorage.getItem('Data') : "[]";
        const arrayproduct =  JSON.parse(oldproduct);

          arrayproduct.filter((value,index)=>{
            if(value.data.id===data.id){
                const data1 = {
                    data: value.data,
                    qty: value.qty + qty
                }
                arrayproduct.splice(index,1,data1)
                f = true;
            }
        })

        if(f === false){
            arrayproduct.push(StoreData);
        }
        localStorage.setItem('Data',JSON.stringify(arrayproduct))
        setOpen(!open)

}
    const handleBuyNowClick =(value)=>{
        let arr=[];

        const data = {
            data: value,
            qty : 1,
            status:true
        }
        arr.push(data);
        if(localStorage.getItem('user')!=null){
            history.push({
                pathname:`${BASE_URL}OrderSummary`,
                state: arr
            })
        }else{
            history.push({
                pathname:`${BASE_URL}SignIn`,
            })
        }

   }
    return (
       <ProductDisplay handleClick={handleCartClick} handleBuyNow={handleBuyNowClick} {...props} open={open} HandleModal={HandleModal}/>
    )
}
export  default  (Product)

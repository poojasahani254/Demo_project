import React,{useEffect,useState} from 'react';
import Product from '../../Components/Product/index';
import Api from '../../config/config';


 function Products(props) {
    // const classes = useStyles();
    const [data,setdata] = useState([]);
    // console.log("id",props.location.state)

    useEffect(()=>{

            Api("Product","","get").then((res)=>{
                let arr=[]
                res.docs.map(item=>{
                    if(item.data().category_id === props.location.state.data){
                        arr.push({
                            "id" : item.id,
                            "Product_description":item.data().Product_description,
                            "Product_name":item.data().Product_name,
                            "Product_price":item.data().Product_price,
                            "Category_id":item.data().category_id,
                            "Product_image":item.data().Product_image
                        })
                    }
                    return true
                })
                if(props.location.state.Search === true){
                    setdata(props.location.state.data)
                }else{
                    setdata(arr)
                }

            }).catch((error)=>{
                console.log('Error',error)
            })


        // console.log("props product",data)
    },[props.location.state])

if(data.length>0){
    return (
        <div style={{margin:'9px'}}>
           <Product
               data={data}
               Isdata ={true}/>
        </div>
        )
    }else{
        return (
           <div style={{margin:'9px'}}>
              <Product
                Isdata ={false}
                data ={"Data not Availble"}
                />
           </div>
            )
    }

}
export default Products;

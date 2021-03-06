import React,{useEffect,useState} from 'react';
import Tabs from '../../Components/Tab/Tabs'
import Api from '../../config/config'


export default function ScrollableTabsButtonAuto() {
    const index=localStorage.getItem('index') ? localStorage.getItem('index') : 0;
    const [value, setValue] = useState(parseInt(index));
    const [data,setdata] = useState([]);
    const handleChange = (event,newValue) => {
        setValue(newValue);
        localStorage.setItem('index', newValue);
    };

    useEffect(()=>{
        let arr=[]
        Api("Category","","get").then((res)=>{
            res.docs.map(item=>{
                arr.push({"id" : item.id,
                "Category":item.data().category_name
               })
               return true
            })
            setdata(arr)
            return true

        }).catch((error)=>{
            // console.log('Error',error)
        })
    },[])
    if(data.length>0){
    return (
        <Tabs
            value={value}
            handleChange={handleChange}
            data ={data}
            Isdata ={true}
            />

        )
    }else{
        return (
            <Tabs
                Isdata ={false}
                data ={data}
                />
            )
    }
}

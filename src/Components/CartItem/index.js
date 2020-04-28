import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import {ImageURL} from '../../Constant';
import {IS_ADDTOCART, IS_CARTDELETE} from '../../Action/types';
import { useDispatch} from 'react-redux';

export default function MediaControlCard(props) {
    const classes = useStyles();
    const dispatch=useDispatch();
    const oldproduct = localStorage.getItem('Data') ? localStorage.getItem('Data') : "[]";
    const arrayproduct =  JSON.parse(oldproduct);

    const handleRemove = (index) =>{
        // dispatch({
        //     type:IS_CARTDELETE,
        //     index:index
        // })
        arrayproduct.splice(index,1)
        LocalStorage()

    }

    const IncreementCount = (value,index) =>{
        const data={
            data: value.data,
            qty: parseFloat(value.qty) + 1
        }
        arrayproduct.splice(index,1,data)
        LocalStorage()
        // dispatch({
        //     type: IS_ADDTOCART,
        //     payload: arr
        // })
    }

    const DecreementCount = (value,index) =>{
        if(value.qty===1){
            const data={
                data: value.data,
                qty:  1
            }
            arrayproduct.splice(index,1,data)
            LocalStorage()
        }else{
            const data={
                data: value.data,
                qty: parseFloat(value.qty) - 1
            }
            arrayproduct.splice(index,1,data)
            LocalStorage()
        }
    }

    const LocalStorage = () =>{
        localStorage.setItem('Data',JSON.stringify(arrayproduct));
        window.location.reload();
    }

    const handleChange = (item,index,e) =>{
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            const data={
                data: item.data,
                qty: e.target.value
            }
            arrayproduct.splice(index,1,data)
            LocalStorage();
        }
    }

    return (
        <div className={classes.MainDiv}>
            {
                props.user.map((item,index)=>{
                    return(
                        <Card className={classes.root} key={index}>
                            <div className={classes.rootEle}>
                                <img src={ImageURL+item.data.Product_image} style={{height:'200px',width:'200px'}} />
                                <div className={classes.controls}>
                                    <div className={classes.button} onClick={()=> DecreementCount(item,index)}>
                                        <center><span className={classes.span} > - </span></center>
                                    </div>
                                    <TextField
                                        id="outlined-start-adornment"
                                        className={clsx(classes.margin, classes.textField)}
                                        variant="outlined"
                                        size="small"
                                        value={item.qty}
                                        onChange={(e)=>{handleChange(item,index,e)}}
                                    />
                                    <div
                                        className={classes.button}
                                        onClick={()=> IncreementCount(item,index)}
                                    >
                                        <center>
                                            <span className={classes.span}>
                                                +
                                            </span>
                                        </center>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.details}>
                                <Typography component="h5" variant="h6">
                                    {item.data.Product_name}
                                </Typography>
                                <Typography  variant="subtitle2">
                                    {item.data.Product_description}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {'\u20B9'}{item.data.Product_price}
                                </Typography>
                                <Button
                                    className={classes.btn}
                                    onClick={()=>handleRemove(index)}
                                    variant={"contained"}
                                    color={"primary"}
                                >
                                    REMOVE
                                </Button>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width:'100%',
        marginBottom:theme.spacing(1),
    },
    details: {
        width:'90%',
        margin:theme.spacing(4)
        // alignItems:'flex-start'
    },
    controls: {
        display: 'flex',
        paddingLeft: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        marginTop:theme.spacing(2)
    },
    textField: {
        width: '7ch',
        height: '0.1875em',
        alignContent:'center'
    }, button:{
        background: 'rgb(174,181,221)',
        color: 'black',
        minWidth: '40px' ,
        boxSizing: 'border-box',
        lineHeight: 3,
        borderRadius: '20px',
    },span:{
        width: '100%',
        color:'white',
        fontSize:'0.875rem',
    },margin:{
        margin:theme.spacing(1)
    },rootEle:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',

    },btn:{
        marginTop:theme.spacing(15),
        fontSize:'0.999rem',
    },MainDiv:{
        width:'100%',
        height:'auto',
    }
}));

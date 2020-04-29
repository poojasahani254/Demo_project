import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    InputLabel,
    Grid,
    Divider,
} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/index';
import NotFound from '../CommonComponent/NotFound';
import Header from '../CommonComponent/CombineComponent';
import {notify} from '../CommonComponent/Alert';
import {BASE_URL} from "../../Constant";

export default function CustomizedExpansionPanels(props) {
    const classes = useStyles();
    const  history=useHistory();
    const [total,setTotal]=useState(0.00);
    const user = useSelector(state => state.ProductReducers.AddtoCartData);

    const oldproduct = localStorage.getItem('Data') ? localStorage.getItem('Data') : "[]";
    const arrayproduct =  JSON.parse(oldproduct);

    let tot=0
    useEffect(()=>{
        arrayproduct.map((item,index)=>{
          tot += item.data.Product_price * item.qty

       })
        setTotal(tot)
    });

    const handleClick = () =>{
        if(localStorage.getItem('user')!=null){
            history.push({
                pathname: `${BASE_URL}OrderSummary`,
                state: arrayproduct
            })
        }else{
            notify('Please Login to Purchase Cart Item');
        }
    }
    return (
        <>
            <Header />
            {
                arrayproduct.length>0?
                    <div className={classes.Container}>
                        <div className={classes.ChildOneContainer}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Add To Cart
                                    </Typography>
                                    <CartItem  user={arrayproduct} />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        fullWidth={true}
                                        onClick={handleClick}
                                    >
                                        CheckOut
                                    </Button>
                                </CardContent>

                            </Card>
                        </div>
                        <div className={classes.ChildDetailsContainer}>
                            <center><Typography variant="h5" color="textSecondary">PRICE DETAILS</Typography></center>
                            <Divider />
                            <div className={classes.container}>
                                <Grid container spacing={7}>
                                    <Grid item xs>
                                        <InputLabel>Price ({user.length} items)</InputLabel>
                                    </Grid>
                                    <Grid item xs>
                                        <InputLabel style={{color: 'black'}}>{'\u20B9'}{total}</InputLabel>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={7}>
                                    <Grid item xs>
                                        <InputLabel>Delivery Charges</InputLabel>
                                    </Grid>
                                    <Grid item xs>
                                        <InputLabel style={{color: 'black'}}>Free</InputLabel>
                                    </Grid>
                                </Grid>
                            </div>
                            <Divider />

                            <Grid container spacing={4} style={{margin:1}}>
                                <Grid item xs>
                                    <InputLabel style={{color: 'black'}}>Total Payable</InputLabel>
                                </Grid>
                                <Grid item xs>
                                    <InputLabel style={{color: 'black'}}>{'\u20B9'}{total}</InputLabel>
                                </Grid>
                            </Grid>
                            <Divider />

                        </div>
                    </div>
                    :
                    <NotFound  data={'No Cart Item Availble'}/>
            }

        </>
    );
}

const useStyles = makeStyles((theme) => ({
    ChildOneContainer: {
        width: '70%',
        border: 1,
        backgroundColor: '#f9f8f8',
        padding: 8,
        '@media(max-width:767px)':{
            width:'100%',
            padding:5
        }
    }, ChildDetailsContainer: {
        boxShadow: '0px 0px 5px 3px #cacaca',
        width: '28%',
        margin: theme.spacing(1),
        padding:theme.spacing(3),
        '@media(max-height:767px)':{
            height:'70%',
            width:'28%'
        },
        '@media(max-width:767px)':{
            width:'92%'
        }
    }, Container: {
        display: 'flex',
        '@media(max-width:767px)':{
            flexWrap: 'wrap'
        }
    },container:{
        padding:theme.spacing(5),
    }
}))

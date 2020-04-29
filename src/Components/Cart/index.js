import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import {ImageURL} from '../../Constant';

export default function MediaControlCard(props) {
    const classes = useStyles();
    const [value,setvalue]=useState(1);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setData(props.location.state)
    },[props.location.state])

 return (
    <div className={classes.MainDiv}>
        {
            data.map((item,index)=>{
                return(
                    <Card className={classes.root} key={index}>
                        <div className={classes.rootEle}>
                            <img src={ImageURL+item.data.Product_image} style={{height:'200px',width:'200px'}} />
                            <div className={classes.controls}>
                                <div className={classes.button} onClick={()=>{alert('hello')}}>
                                    <center><span className={classes.span} >-</span></center>
                                </div>
                                <TextField
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    size="small"
                                    value={item.qty}
                                />
                                <div className={classes.button} onClick={()=>{alert('hello')}}>
                                    <center><span className={classes.span} >+</span></center>
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
                                variant="contained"
                                color={"primary"}
                            >REMOVE</Button>
                        </div>
                    </Card>
                )
            })
        }
        <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            onClick={props.handleChange}
        >
            Continue
        </Button>
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

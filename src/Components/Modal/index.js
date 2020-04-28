import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";

export default function FormDialog(props) {
    const classes = useStyles();
    const [value,setvalue]=useState(1);

    const IncreementCount = () =>{
            setvalue(parseInt(value) + 1);
    }

    const DecreementCount = () =>{
        if(value===1){
            setvalue(1)
        }else{
            setvalue(value-1)
        }
    }

    const handleChange = (e) =>{
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setvalue(e.target.value)
        }
    }

    useEffect(()=>{
        if(props.open===false){
            setvalue(1)
        }
    },[props])
     return (
            <Dialog open={props.open}  aria-labelledby="form-dialog-title" fullWidth={true}>
                <DialogTitle id="form-dialog-title">Add To Cart</DialogTitle>
                <DialogContent>
                    <div className={classes.controls}>
                        <div className={classes.button} onClick={DecreementCount}>
                            <center><span className={classes.span} >-</span></center>
                        </div>
                        <TextField
                            id="outlined-start-adornment"
                            className={clsx(classes.margin, classes.textField)}
                            variant="outlined"
                            size="small"
                            value={value}
                            onChange={handleChange}
                        />
                        <div className={classes.button} onClick={IncreementCount}>
                            <center><span className={classes.span} >+</span></center>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.HandleModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>props.handleClick(value)} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>

    );
}
const useStyles = makeStyles((theme) => ({
    controls: {
        display: 'flex',
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        marginTop:theme.spacing(3)
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
    }
}));

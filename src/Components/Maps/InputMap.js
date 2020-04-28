import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const SignUp = (props) => {
    const classes = useStyles();
    const [value,setvalue]=useState({
        Zipcode:'',
        State:'',
        City:'',
        address:'',
        locality:'',
        landmark:''
    })

    useEffect(()=>{
        if(props.address!=undefined){
            props.address.map((item,index)=>{
                item.types.map((item1,index)=>{
                    if(item1==="postal_code"){
                        SetValues('Zipcode',item.long_name)
                    }else if(item1==="administrative_area_level_1"){
                        SetValues('State',item.long_name)
                    }else if(item1==="administrative_area_level_2"){
                        SetValues('landmark',item.long_name)
                    }
                    else if(item1==="street_address"){
                        SetValues('City',item.long_name)
                    }else if(item1==="locality"){
                        SetValues('locality',item.long_name)
                    }else{
                        SetValues('address',props.CombineAdd)
                    }
                })
            })
        }
    },[props.address]);

    const handleSubmit =  () =>{
       alert(JSON.stringify(value))
    };

    const SetValues = (key ,value) =>{
        setvalue( prevState => ({
            ...prevState,
            [key] : value
        }))
    }

    const handleChange =(event) =>{
        let {name,value}=event.target;
        setvalue( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    if(props.address!=undefined) {
        return (
            <Container component={Paper} maxWidth="xs">
                <div className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                name="City"
                                required
                                fullWidth
                                id="city"
                                label="City"
                                autoFocus
                                value={value.locality}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="State"
                                label="State"
                                name="State"
                                value={value.State}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="Zipcode"
                                label="Zipcode"
                                name="Zipcode"
                                autoComplete="Zipcode"
                                value={value.Zipcode}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="landmark"
                                label="Landmark[optional]"
                                name="landmark"
                                // value={value.landmark}
                                autoComplete="landmark"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="address"
                                label="Address"
                                id="address"
                                defaultValue={value.address}
                                onChange={handleChange}
                                multiline
                                rows={4}
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Continue
                    </Button>
                </div>
            </Container>
        );
    }
    return <></>
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default SignUp;

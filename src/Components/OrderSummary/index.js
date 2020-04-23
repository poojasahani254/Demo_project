import React, {useEffect, useState} from 'react';
import { withStyles ,makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Check from '@material-ui/icons/Check';
import Header from '../CommonComponent/Header';
import Cart from '../Cart/index';
import {
  InputLabel,
  Grid,
  Divider,
} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory} from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button'

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels(props) {
  const classes = useStyles();
  const  history=useHistory();
  const [expanded, setExpanded] = React.useState('panel1');
  const [value, setValue] = React.useState('Phone Pe');
  const [total,setTotal]=useState(0.00);
    const paypalOptions = {
        clientId: 'AZk7GYWuBuLoD5cNJjuaYu5wsE9Zjwaaz_DNBMnGg1_lVKG9lELVMfZDDfpmFnLchYuLK9JHeuW2RBv0',
        intent: 'capture'
    }
    useEffect(()=>{
        history.location.state.map(item=>{
            // console.log(item.Product_price)
            setTotal(item.Product_price)
            return item.Product_price

        })
    },[]);
   const handleRadio = (event) => {
        setValue(event.target.value);
    };
   const handleChange = (panel) => (event, newExpanded) => {

        setExpanded(newExpanded || newExpanded==undefined ? panel : false);

    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    }
   const handlePayment = () =>{
       // let data = JSON.stringify(false);
       //
       // let xhr = new XMLHttpRequest();
       // xhr.withCredentials = true;
       //
       // xhr.addEventListener("readystatechange", function () {
       //     if (this.readyState === this.DONE) {
       //         console.log(this.responseText);
       //     }
       // });
       //
       // xhr.open("POST", "https://mercury-uat.phonepe.com/v4/debit/");
       // xhr.setRequestHeader("content-type", "application/json");
       // xhr.setRequestHeader("x-verify", "X-VERIFY");
       //
       // xhr.send(data);

   }
  return (
    <>
        <Header />
        <div className={classes.smartTipContainer}>
            <div className={classes.chartContainer}>
                  <ExpansionPanel square expanded={expanded === 'panel1'} >
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                     <div className={classes.root}>
                        <div className={classes.childRoot}>
                        <div className={classes.button}>
                            <center><span className={classes.span}>1</span></center>
                        </div>
                        <Typography variant="subtitle1" >
                            LOGIN
                        </Typography>
                        <Check style={{ color: 'green'}}/>
                        </div>
                        <Typography variant="subtitle2" className={classes.Typography}>
                            Pooja Sahani +919662107895
                        </Typography>
                       </div>

                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            fullWidth={true}
                            onClick={handleChange('panel2')}
                        >
                            Continue
                        </Button>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel square expanded={expanded === 'panel2'}>
                    <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                    <div className={classes.root}>
                        <div className={classes.childRoot}>
                        <div className={classes.button}>
                            <center><span className={classes.span}>2</span></center>
                        </div>
                        <Typography  variant="subtitle1" >
                            DELIVERY ADDRESS
                        </Typography>
                        <Check style={{ color: 'green'}}/>
                        </div>
                        <Typography variant="subtitle2" className={classes.Typography}>
                            Delivery adddress here
                        </Typography>

                       </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            fullWidth={true}
                            onClick={handleChange('panel3')}
                        >
                            Continue
                        </Button>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel square expanded={expanded === 'panel3'}>
                    <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                    <div className={classes.root}>
                        <div className={classes.childRoot}>
                        <div className={classes.button}>
                            <center><span className={classes.span}>3</span></center>
                        </div>
                        <Typography variant="subtitle1" >
                            ORDER SUMMARY
                        </Typography>
                        <Check style={{ color: 'green'}}/>
                        </div>
                       </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>

                      <Cart handleChange={handleChange('panel4')} {...history}/>

                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel square expanded={expanded === 'panel4'}>
            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
             <div className={classes.root}>
                <div className={classes.childRoot}>
                <div className={classes.button}>
                    <center><span className={classes.span}>4</span></center>
                </div>
                <Typography variant="subtitle1" >
                    PAYMENT INFORMATION
                </Typography>
                {/* <Check style={{ color: 'green'}}/> */}
                </div>
               </div>

            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

                {/*<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleRadio}>*/}
                {/*    <FormControlLabel value="Phone Pe" control={<Radio />} label="Phone Pe" />*/}
                {/*    <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" />*/}
                {/*    <FormControlLabel value="Credit/Debit/ATM" control={<Radio />} label="Credit/Debit/ATM" />*/}
                {/*</RadioGroup>*/}
                {/*<Button*/}
                {/*    variant="contained"*/}
                {/*    color="prima      ry"*/}
                {/*    className={classes.button}*/}
                {/*    size="medium"*/}
                {/*    onClick={handlePayment}*/}
                {/*>*/}
                {/*    CheckOut*/}
                {/*</Button>*/}
                <PayPalButton
                    paypalOptions={paypalOptions}
                    buttonStyles={buttonStyles}
                    amount={total}

                    onPaymentCancel={()=>{console.log('Payment Cancel')}}
                    onPaymentSuccess={(details, data)=>{
                        alert("Transaction completed by " + details.payer.name.given_name);

                        console.log('Success Fully Payment Done')
                    }}
                />
            </ExpansionPanelDetails>
          </ExpansionPanel>
            </div>
            <div className={classes.chartDetailContainer}>
                <center><Typography variant="h5" color="textSecondary">PRICE DETAILS</Typography></center>
                <Divider />
                <div className={classes.container}>
                    <Grid container spacing={7}>
                        <Grid item xs>
                            <InputLabel>Price ({history.location.state.length} items)</InputLabel>
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
        </>
  );
}
const ExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
})(MuiExpansionPanelSummary);
const useStyles = makeStyles((theme) => ({
    button:{
        background: 'rgb(174,181,221)',
        color: 'black',
        fontSize:'0.875rem',
        minWidth: '24px' ,
        minHeight:'9px',
        boxSizing: 'border-box',
        lineHeight: 2,
        borderRadius: '4px',
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
        marginRight:theme.spacing(2)
    },span:{
        width: '100%',
        color:'white'
    },root:{
        display:'flex',
        flexDirection:'column'
    },childRoot:{
        display:'flex'
    },Typography:{
        marginLeft:theme.spacing(5)
    },chartContainer: {
      width: '70%',
      border: 1,
      backgroundColor: '#f9f8f8',
      padding: 8,
      '@media(max-width:767px)':{
        width:'100%',
        padding:5
      }
    }, chartDetailContainer: {
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
    },smartTipDetailHead: {
      display: 'flex',
      flexDirection: "column"
    }, smartTipContainer: {
      display: 'flex',
      '@media(max-width:767px)':{
        flexWrap: 'wrap'
      }
    },container:{
       padding:theme.spacing(5),
    }
}))

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { useHistory} from 'react-router-dom';
import {BASE_URL} from "../../Constant";

const useStyles = makeStyles({
    root: {
        minWidth: '99vw',
        height:'20h',
    }
});

const SimpleCard =(props)=> {
    const classes = useStyles();
    const history = useHistory();
    const HandleClick = () =>{
        history.push({
            pathname: `${BASE_URL}`,
        })
    }
    return (
        <Card className={classes.root} >
            <CardContent>
                <center>
                    <div>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        Order Accepted SuccessFully Continue Shopping!!
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={HandleClick}
                    >
                        Continue Shopping
                    </Button>
                    </div>
                </center>
            </CardContent>
        </Card>
    );
}

export default SimpleCard;

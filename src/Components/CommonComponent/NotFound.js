import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: '99vw',
    height:'20h'
  },title:{
      marginTop:40
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardContent>
        <center>
            <Typography variant="h5" component="h2" className={classes.title}>
            {props.data}
            </Typography>
        </center>
      </CardContent>
    </Card>
  );
}

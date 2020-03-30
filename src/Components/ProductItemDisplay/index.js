import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Shop';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return ( 
    <Card className={classes.root}>
      <CardContent>
          <center>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD1f6W0XF7yLqAJ_R7wH0ltBba5-cdFTidhhLEYES1RqrBK5uj" />
         </center>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.description}
        </Typography>
        <Typography variant="h5" color="textSecondary">
            {'\u20B9'}{props.data.price}
        </Typography>
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            fullWidth={true}
            onClick={props.handleClick}
        >
       { t('Add To Cart')}
      </Button>
      </CardContent>
    </Card>    
  )
}
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
      maxHeight: 400,
      margin:'5px'
    },  
}));
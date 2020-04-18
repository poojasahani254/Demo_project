import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Shop';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import DataNotFound from '../CommonComponent/NotFound';

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  // console.log("props product item",props);
  return ( 
    <div  className={classes.rootDiv}>
    {
      props.Isdata?
      props.data.map((item,index)=>{

        let url=`https://firebasestorage.googleapis.com/v0/b/fir-3d365.appspot.com/o/${item.Product_image}`
        return (
          <Card className={classes.root} key={index}>
          <CardContent className={classes.cardContent}>
              <center>
             <img style={{height:'30vh',width:'20vw'}} src={url} alt='' />
            </center>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.Product_name}
            </Typography>
            <Typography variant="h5" color="textSecondary">
                {'\u20B9'}{item.Product_price}
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                fullWidth={true}
                onClick={()=>props.handleClick(item)}
            >
          { t('Add To Cart')}
          </Button>
           <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                fullWidth={true}
                onClick={()=>props.handleBuyNow(item)}
            >
          { t('Buy Now')}
          </Button>
          </CardContent>
    </Card>
        )        
      })
      :
      <DataNotFound data={props.data} />
    }
    </div>     
  )
}
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 321,
      maxHeight: 400,
      margin:'5px'
    },cardContent: {
      flexGrow: 1,
      textAlign:'center',
      justifyContent:'center'
  }, rootDiv:{
      display:'flex',
      flexFlow:'wrap'
  },button:{
    marginBottom:3
  }
}));
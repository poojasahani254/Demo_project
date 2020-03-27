import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Skeleton from '@material-ui/lab/Skeleton';

const a11yProps=(index) =>{
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}
export default function ScrollableTabsButtonAuto(props) {
    const classes = useStyles();
    const items = props.data.map((item,index) => <Tab label={item.Category} key={item.id} {...a11yProps(index)}  classes={classes} />)
    
    return (
        <div className={classes.root}>
            {
                props.Isdata?
                <Tabs
                    value={props.value}
                    onChange={props.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {items}
                </Tabs>
                :
                <Skeleton animation="wave" variant="rect" style={{height:"7vh"}}/>
            }     
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        boxShadow:'0px',

    },wrapper:{
        fontFamily: 'serif',
        fontSize: 'small',
        fontStyle: 'inherit',
        fontWeight: 'bold',
    }
}));

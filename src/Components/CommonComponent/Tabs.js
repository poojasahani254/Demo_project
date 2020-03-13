import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const a11yProps=(index) =>{
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}
export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Item One" {...a11yProps(0)} classes={classes} />
                    <Tab label="Item Two" {...a11yProps(1)} classes={classes} />
                    <Tab label="Item Three" {...a11yProps(2)} classes={classes}/>
                    <Tab label="Item Four" {...a11yProps(3)} classes={classes}/>
                    <Tab label="Item Five" {...a11yProps(4)} classes={classes}/>
                    <Tab label="Item Six" {...a11yProps(5)} classes={classes}/>
                    <Tab label="Item Seven" {...a11yProps(6)} classes={classes}/>
                    <Tab label="Item Six" {...a11yProps(5)} classes={classes} />
                    <Tab label="Item Seven" {...a11yProps(6)} classes={classes}/>
                </Tabs>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // width: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow:'0px',

    },wrapper:{
        fontFamily: 'serif',
        fontSize: 'small',
        fontStyle: 'inherit',
        fontWeight: 'bold',
    }
}));

import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
              {'.'}
        </Typography>
    );
}

export default function SignInSide(props) {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={props.handleChange}             
                             autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={props.handleChange}
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={props.handleSubmit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            {/* <Grid item xs> */}
                                {/*<Link href="#" variant="body2">*/}
                                {/*    Forgot password?*/}
                                {/*</Link>*/}
                            {/* </Grid> */}
                            <Grid item >
                                <Link href="" variant="body2" onClick={()=>{
                                    props.history.push('/Signup')
                                }}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    <div className={classes.hr1}>
                        <span className={classes.span}>OR</span>
                    </div>
                    <div className={classes.root1}>
                        {/*<img src={process.env.PUBLIC_URL + '/src/Action/logo512.png'} alt="logo" />*/}
                        {/*<img src={require('../Action/logo192.png')} />*/}
                        <Avatar alt="Facebook"  onClick={props.handleFacebookLogin} src="data:image/jpeg;base64,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" />
                        <Avatar alt="Google" onClick={props.handleGoogleLogin}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVPa0tFvU8l3XSqWicWIJEHTXi4OIIyl5K4Yzoq4_Pd4sjv72O" />
                    </div>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                </div>
            </Grid>
        </Grid>
    );
}
const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },root1:{
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            marginTop:theme.spacing(2),
        },
    },
    image: {
        backgroundImage: 'url(data:image/jpeg;base64,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)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }, hr1 :{
        borderBottom:'solid 1px #adac97',
        width:'100%',
        height:'9px',
        marginTop:'10px'
    },span:{
        marginLeft: '50%',
        display:'inline-block',
        height: '20px',
        background:'#fff',
        paddingLeft:'4px',
        paddingRight:'4px'
    }
}));
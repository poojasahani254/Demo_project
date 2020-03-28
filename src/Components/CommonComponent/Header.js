import React ,{useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles,useTheme,fade } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocationSearching from '@material-ui/icons/LocationSearching';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import { useTranslation } from 'react-i18next';
    
const names = [{
   name: 'Hindi',
   key:'de',
    country:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYwNx8v8loriLiEhrh9c8rX-haH07MXuZPhBEXQhiaBpN0OQhP'
},{
    name: 'English',
    key:'en',
}];
function App(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history=useHistory();
    const { t,i18n } = useTranslation();
    const [Lang, setLang] = React.useState(['en']);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 2;

    useEffect(()=>{
        i18n.changeLanguage("en");
    },[])
    const handleChange = (event) => {
        setLang(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    const getStyles=(name ,Lang,theme) =>{
        return {
            fontWeight:
                Lang.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 100,
            },
        },
    };
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const handleLocation = ()=>{
        history.push('/maps')
    }
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleLocation}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                        <LocationSearching />
                </IconButton>
                <p>Location</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>

        </Menu>
    );

    return (
        <div className={classes.root}>
                <Toolbar>
                    <div className={classes.title}>
                        <img src='https://pngimage.net/wp-content/uploads/2018/05/amul-logo-png-1.png' className={classes.img}/>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder={t('Search')}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Divider orientation="vertical" flexItem={true} variant="middle"/>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleLocation}>
                                <LocationSearching color="primary"/>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle color="primary"/>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <ShoppingCart color="primary"/>
                            </Badge>
                        </IconButton>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon color="primary"/>
                        </IconButton>
                    </div>
                    <Divider orientation="vertical" flexItem={true} variant="middle"/>
                    <FormControl className={classes.formControl}>
                        <Select
                            labelId="demo-mutiple-name-label"
                            id="demo-mutiple-name"
                            value={Lang}
                            onChange={handleChange}
                            input={<Input />}
                            MenuProps={MenuProps}
                        >
                            {names.map(item => (
                                <MenuItem key={item.key} value={item.key} style={getStyles(item.name, Lang, theme)}>
                                    {item.name}
                                    {/*<img src={item.country} style={{height:'5vh'}}/>*/}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Toolbar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
const useStyles=makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 70,
        maxWidth: 300,
    },root: {
        flexGrow: 1,
        backgroundColor:'white',
        boxShadow:'0px 1px 1px -1px rgba(0,0,0,0.2), ' +
            '0px 2px 2px 0px rgba(0, 0, 0, 0), ' +
            '0px 1px 1px 0px rgba(0,0,0,-0.12)',

},
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },img:{
      height:'8vh',
        width:'10vw'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}))
export default App;

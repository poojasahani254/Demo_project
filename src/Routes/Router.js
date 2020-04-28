import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from 'react';
import SignUp from '../Components/RegisterUser/Signup'
import SignIn from '../Container/Login/signin';
import DashBoard from '../Components/Dashboard/Dashboard';
import Maps from '../Components/Maps/index';
import OrderSummary from '../Components/OrderSummary/index'
import ProductDisplay from '../Container/Product/index';
import Cart from '../Components/Cart/index';
import AddToCart from  '../Components/AddToCart/index';
import {BASE_URL} from '../Constant';

class Router extends Component {
    render() {
        const item= localStorage.getItem('user')
        // console.log(item+"item")
        // const Private = ({component: Component, permission, ...rest}) => (
        //     <Route {...rest} render={(routeProps) => {
        //         return (
        //             item!=null && item
        //                 ? <Component {...routeProps} />
        //                 : <Redirect to={`${BASE_URL}`}/>
        //         )
        //     }}/>
        // );
        const Public = ({component: Component, permission, ...rest}) => (
            <Route {...rest} render={(routeProps) => {
                return (
                    item!=null || item==null
                        ? <Component {...routeProps} />
                        : <Redirect to={`${BASE_URL}`}/>
                )
            }}/>
        );
        return (
            <Switch>
                <Public exact path={`${BASE_URL}`}
                         component={() => <DashBoard value={this.props.value}/>}/>

                <Public exact path={`${BASE_URL}OrderSummary`}
                         component={() => <OrderSummary value={this.props.value}/>}/>
                <Public exact path={`${BASE_URL}Cart`}
                         component={() => <Cart value={this.props.value}/>}/>
                <Public exact path={`${BASE_URL}maps`}
                         component={() => <Maps value={this.props.value}/>}/>
                <Public exact path={`${BASE_URL}Product`} component={() => <ProductDisplay {...this.props}/>}/>
                <Public exact path={`${BASE_URL}SignIn`} component={() => <SignIn {...this.props}/>}/>
                <Public exact path={`${BASE_URL}Signup`} component={() => <SignUp {...this.props}/>}/>
                <Public exact path={`${BASE_URL}AddToCart`} component={() => <AddToCart {...this.props}/>}/>
            </Switch>
        )
    }
}
export default withRouter(Router);

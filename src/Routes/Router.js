import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from 'react';
import SignUp from '../Components/Signup'
import SignIn from '../Components/signIn';
import DashBoard from '../Components/Dashboard';
import {BASE_URL} from '../Constant';

class Router extends Component {
    render() {
        const Private = ({component: Component, permission, ...rest}) => (
            <Route {...rest} render={(routeProps) => {
                return (
                    true
                        ? <Component {...routeProps} />
                        : <Redirect to='/'/>
                )
            }}/>
        );
        const Public = ({component: Component, permission, ...rest}) => (
            <Route {...rest} render={(routeProps) => {
                return (
                    true
                        ? <Component {...routeProps} />
                        : <Redirect to={`${BASE_URL}Signup`}/>
                )
            }}/>
        );
        return (
            <Switch>
                <Private exact path={`${BASE_URL}smartTipWidget`}
                         component={() => <DashBoard value={this.props.value}/>}/>
                {/*<Private exact path={`${BASE_URL}viewSmartTip/`}*/}
                {/*         component={(props) => <ViewSmartTip {...props}/>}/>*/}
                {/*<Private exact path={`${BASE_URL}smartTipList/`}*/}
                {/*         component={() => (<SmartTipList value={this.props.value}/>)}/>*/}
                {/*<Private exact path='/logout' component={Login}/>*/}
                <Public exact path={`${BASE_URL}`} component={() => <SignIn {...this.props}/>}/>
                <Public exact path={`${BASE_URL}Signup`} component={() => <SignUp {...this.props}/>}/>
                {/*<Route exact path={`${BASE_URL}callback`} render={(props) => {*/}
                {/*    handleAuthentication(props);*/}
                {/*    return <Loader {...props} />*/}
                {/*}}/>*/}
            </Switch>
        )
    }
}

export default withRouter(Router);
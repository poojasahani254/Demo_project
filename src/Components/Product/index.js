import React from 'react';
import Header from '../CommonComponent/Header';
import Tabs from '../../Container/Tab/Tabs'
import ProductItem from '../../Container/ProductItemDisplay/index'
class App extends React.Component{
    render(){
        return (
            <>
                <Header/>
                <div style={{marginTop:'2px'}}>
                    <Tabs/>
                </div>
                <ProductItem />
            </>
        );
    }
}
export default App;

import React from 'react';
import ProductItem from '../../Container/ProductItemDisplay/index';
import HeaderCombine from '../CommonComponent/CombineComponent';

class App extends React.Component{ 
    render(){      
        return (
            <>
                <HeaderCombine />
                <ProductItem {...this.props} />
            </>
        );
    }
}
export default App;

import React from 'react';
import Header from '../CommonComponent/Header';
import Tabs from '../../Container/Tab/Tabs'
class App extends React.Component{
    
    render(){      
        return (
            <>
                <Header/>
                <div style={{marginTop:'2px'}}>
                    <Tabs />
                </div>
            </>
        );
    }
}
export default App;

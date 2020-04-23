import React from 'react';
import Header from './Header';
import Tabs from '../../Container/Tab/Tabs'

class App extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <div style={{marginTop:'2px'}}>
                    <Tabs/>
                </div>
            </div>
        );
    }

}
export default App;

import React from 'react';
import Header from '../CommonComponent/Header';
import Tabs from '../../Container/Tab/Tabs'
import Slide from '../../Slider/slider';
class App extends React.Component{

    render(){
        return (
            <div>
                <Header/>
                <div style={{marginTop:'2px'}}>
                    <Tabs/>
                </div>
                <Slide/>
            </div>
        );
    }

}
export default App;

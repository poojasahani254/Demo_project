import React from 'react';
import Header from '../Components/CommonComponent/Header';
import Tabs from '../Components/CommonComponent/Tabs'
import Slider from '../Components/CommonComponent/ImageSlider';

class App extends React.Component{

    render(){
        return (
            <div>
                <Header/>
                <div style={{marginTop:'2px'}}>
                    <Tabs/>
                </div>
                <Slider/>
            </div>
        );
    }

}
export default App;

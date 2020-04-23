import React from 'react';
import Slide from '../../Slider/slider';
import HeadeProtion from '../CommonComponent/CombineComponent';
class App extends React.Component{

    render(){
        return (
            <div>
              <HeadeProtion />
                <Slide/>
            </div>
        );
    }

}
export default App;

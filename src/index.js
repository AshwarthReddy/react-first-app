import React from 'react';
import ReactDOM from 'react-dom';
import EvenOrOdd from './components/EvenOrOdd';
import AddTwoNumber from './components/Sum';
import './index.css';


class Index extends React.Component{
  render(){
    return (
        <div>
  {/* <AddTwoNumber/> */}
  <br />
  <EvenOrOdd/>
        </div>
   
    
    );
  }
}

ReactDOM.render(<Index />,  document.getElementById('root'))

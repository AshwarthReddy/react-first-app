import React from 'react';

class EvenOrOdd extends React.Component{
    constructor(){
        super();
        this.textInput = null;
    
        this.state = {
          result: null,
          clr: "blue"
        }
        this.setTextInputRef = this.setTextInputRef.bind(this);
      }
    
       setTextInputRef(element){
        this.textInput = element;
      }

      findEvenOrOdd()  {
       let number = this.textInput.value;
       this.textInput.value = null;
       console.log("number is ", number);
        if(number % 2 === 0 ){
        this.setState({
          result : "EVEN",
          clr: "#dc2626"
        });
        }else{
          this.setState({
            result : "ODD",
            clr: "#4d7c0f"
          });
        }
        
      }
    
    
    
      render(){
        return (
    
        <div className='font-mono text-2xl container text-blue-600 block pl-2 content-center md:break-after-column break-all' >
          <label className = "font-mono">Enter the Number</label> 
          <input className = "space-y-0" type = "number" ref = {this.setTextInputRef}></input>
          <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.findEvenOrOdd()}> Even or Odd </button>
          <h1 style={{color: this.state.clr}}> provided number is : {this.state.result}</h1>
          </div>
    
          )
      }

    



}
export default EvenOrOdd;
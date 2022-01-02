import React from "react";


function AddTwoNumber(){

    function testClick(){
        
        console.log("submit BUTTON CLICKED SUCCESSFULLY");
    }


    return (

        <div align = 'center'>
            <button onClick={testClick}> clickMe</button>
        </div>

    );
}

 
export default AddTwoNumber;
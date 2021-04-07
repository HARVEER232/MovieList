import React, { Component } from 'react';

class Practice2 extends Component{
constructor(){
    super();
    this.state={
        counter:0,
    }
}

handleClick = () =>{
    this.setState(prevState=>({counter:  prevState.counter + 1}));
}

memberCountClick=()=>{
    alert('Hi this is me')
}

    render(){
        console.log("hi this is me", this.state.counter);
        return(
            <div className='testingpurpose'>
              <p onClick={this.memberCountClick}> <span className='memberCount'>{this.state.counter}</span> total no. of memeber </p> 
                <button onClick={this.handleClick}> Increase</button>
            </div>

        )
    }
}
export default Practice2;
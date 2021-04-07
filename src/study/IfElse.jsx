import React, { Component } from 'react';

class IfElse extends Component{
    constructor(props){
        super(props);
        this.state={
            name :'akshay',            
        }
    }
    componentWillMount(){
        // console.log("this is will mount");
    }
    componentDidMount(){
        // console.log("this is did mount");
        // let name = this.state.name;
        let {name} = this.state;
        // console.log(name);

        if (name==="nishant"){
            console.log("name");
        }else if(name==="akshay") {
           console.log("fname");
        }else {
            console.log("lname");
        } 
            
    }
    render(){
        console.log("this is renderwa");
        return(
            <div>this is this</div>
        )
    }
}

export default IfElse;
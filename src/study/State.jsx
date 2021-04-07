import React, {Component} from 'react'

class Practice extends Component{
    constructor(props){
        super(props)
        this.state={
            name: 10,
            text:''
        }
    }
componentDidMount(){
    let {name}=this.state
    if(name==='10'){
        console.log(name)
        this.setState({text: 'this is me'})
    }else{
        this.setState({text: 'you fool, this is not me'})
    }
}

    render(){
       
        return(
            <div>
                
                {/* {this.state.name} */}
                {this.state.text}

            </div>
        )
    }
}
export default Practice;
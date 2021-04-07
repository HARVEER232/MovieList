import React, { Component } from 'react'

class Model extends Component{

    render(){
        return(
            <div>
                <div>
                    {this.props.image}
                </div>
                <div>
                    {this.props.name}
                </div>
            </div>
        )
    }
}
export default Model;
import React, {Component} from 'react'

class Practice extends Component{

    render(){
        console.log(this.props);
        return(
            <div className="person_container">
                <div> {this.props.name1} </div>
                <div> {this.props.name2} </div>
                <div> {this.props.name3} </div>
            </div>
        )
    }
}
export default Practice;
import React, {Component} from 'react'

class Caard extends Component{

    render(){
        return(
            <div className='card'>
                <div className='text-primary'>
                  Mission Id:  {this.props.missionid}
                </div>  
                <div className='text-danger'>
                  Name:  {this.props.missionname}
                </div> 
                <div className='text-success'>
                   Launch Year: {this.props.year}
                </div> 
            </div>
            
        )
    }
}
export default Caard;
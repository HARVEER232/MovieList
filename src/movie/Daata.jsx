import React, {Component} from 'react'

class Daata extends Component{

    render(){
        return(
            <div>
                <div >
                <div className=' imaga'>
                    {this.props.image}
                </div>
                <div className='mb-3 naame'>
                    {this.props.name}
                </div>
                </div>
            </div>
        )
    }
}
export default Daata;
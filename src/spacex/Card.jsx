import React, {Component} from 'react'

class Card extends Component{

    render(){
        return(
            <div className='card mt-2' >
                <div className= 'card-body'>
                    <div className='text-primary'>
                      Flight no:  {this.props.number}
                    </div>
                    <div className='text-danger'>
                        Mission Name: {this.props.mission}

                    </div>
                    <div className='text-success'>
                        {this.props.detail}
                    </div>
                    
                </div>

            </div>
        )
    }
}
export default Card;
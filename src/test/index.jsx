import axios from 'axios';
import React, {Component} from 'react'
import Caard from './Caard';

class Test extends Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }

    componentDidMount(){
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((res)=>{
            console.log(res);
            this.setState({list:res.data})
        })
    }

    render(){
        console.log(this.state.list);
        return(
            <div className='container-fluid'>
            <div className='row'>
                {this.state.list.map((data,index)=>{
                    console.log(data);
                    return(
                        <div className='col-sm-3 mt-2'>
                            <Caard missionid={data.mission_id} missionname={data.mission_name}
                            year={data.launch_year} />
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}
export default Test;
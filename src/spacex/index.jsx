import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import CustomNav from './CustomNav'


class Spacex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {

        axios.get('https://api.spacexdata.com/v3/launches')
            .then((res) => {
                console.log(res);
                this.setState({ list: res.data })
            })
    }

    render() {
        const {list} =this.state
        console.log(list);
        return (
            <div className='container-fluid'>
                <CustomNav />
                <div className='row'>
                    {list.map((data, index) => {
                        // console.log(data);
                        return (
                            <div className='col-sm-3' key={index}>
                                <Card mission={data.mission_name} detail={data.details}
                                    number={data.flight_number}   />
                            </div>
                        )
                    })}

                </div>

            </div>
        )
    }
}
export default Spacex;
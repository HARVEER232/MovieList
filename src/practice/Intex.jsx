import axios from 'axios';
import React, { Component } from 'react'
import Daata from '../movie/Daata';
import Model from './Model';

class Intex extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            selectDate: {},
            showModel:true
        }
    }
    componentDidMount() {
        axios.get("data.json")
            .then((res) => {
                console.log(res);
                this.setState({ list: res.data && res.data[1] })
            })
    }
    handlePlayer = (data) => {
        this.setState({ selectDate:data, showModel:true })
    }
    handleClose = () => {
        this.setState({ showModel:false })
    }
    render() {
        var yodata = this.state.list
        var result = Object.keys(yodata).map(function (key) {
            return yodata[key]
        })
        return (
            <div className='container'>
                <div className='row'>
                    {result && result.length > 0 && result.map((data, index) => {
                        var imageUrl =
                            "https://in.bmscdn.com/events/moviecard/" + data.EventCode + ".jpg";
                        return (
                            <div className='col-sm-3 mt-3' onClick={()=>this.handlePlayer(data)} key={index}>
                                <div>
                                    <img src={imageUrl} />
                                </div>
                                <Model image={data.imageUrl} name={data.EventTitle} />
                            </div>
                        )
                    })}
                </div>
                {this.state.showModel && <Daata handleClose={this.handleClose}  data={this.state.selectDate} />}
            </div>
        )
    }
}
export default Intex;
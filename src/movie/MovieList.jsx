import axios from 'axios'
import React, { Component } from 'react'
import Daata from './Daata'
import Header from './Header'
import Modal from './Modal'

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            selectedData:{},
            showModal: false 
        }
    }
    componentDidMount() {
        axios.get('data.json')
            .then((res) => {
                console.log(res)
                this.setState({ list: res.data && res.data[1] })
            })
    } 
    handlePlayer=(data)=>{
        this.setState({selectedData:data, showModal:true})
    }
    handleClose=()=>{
        this.setState({showModal:false})
    }
    render() {
        console.log(this.state.selectedData);
        var yodata = this.state.list;
        var result = Object.keys(yodata).map(function (key) {
            return yodata[key];
        });
        // console.log(result);
        return (
            <div className='container-fluid contain'>
                <Header />

                <div className='row'>
                    {result && result.length > 0 && result.map((data, index) => {

                        // console.log(data);
                        var imageUrl =
                            "https://in.bmscdn.com/events/moviecard/" + data.EventCode + ".jpg";
                        return (
                            <div className='col-sm-3'onClick={()=> this.handlePlayer(data)}>
                                <div className="tailer-image-item">
                                    <img className="tailer-image" src={imageUrl} />
                                </div>
                                <Daata image={data.imageUrl} name={data.EventTitle} />
                            </div>
                        )
                    })}
                </div>
               {this.state.showModal&&<Modal handleClose={this.handleClose} data={this.state.selectedData}/>}
            </div>
        )
    }
}
export default MovieList;
import axios from 'axios';
import React, { Component } from 'react';

class TestLali extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data);
                this.setState({ list: res.data })
            })
    }
    handleSelect=(e)=>{
        alert('ki')
    }
    renderTableHeader=()=>{
        this.state.list.map((value, index)=>{
            return (
                {value}
            )
        })
    }

    renderTableRows=()=>{

    }
    render() {
        const { list } = this.state
        console.log(list);
        return (
            <div>
                hallo this is me;
                <select onChange={(e)=>this.handleSelect(e)}>
                    {list&&list.map((value, index)=>{
                        console.log(value);
                        return(
                         <option>{value.name}</option>
                        )
                    })}
                </select>
                {/* <table>
                    <thead>
                        <tr># </tr>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <th key={index}>Table heading</th>))}
                    </thead>
                    <tbody>
                     {list.map((value, index) => {
                        return(
                            <td key={index}>{value.name}</td>
                        )
                        })}
                    </tbody>
                </table> */}
            </div>
        )
    }
}
export default TestLali;
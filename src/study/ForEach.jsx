import React, {Component} from 'react'

class ForEach extends Component{

    render(){
        let list=[1,2,3,4.5,6,7,8,9];
        let arrData=[];
        list.forEach((d, index)=>{
            console.log(list);
            arrData.push(
                <div key={index}>{d} </div>
            )
        })
        return(
            <div >
                {arrData}
            </div>
        )
    }
}
export default ForEach;
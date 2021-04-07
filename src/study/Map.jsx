import React, {Component} from 'react'

class Map extends Component{

    render(){
        let number=[11,12,13,14,15,16,17,18,19];
        let numberList=number.map((number, index)=>{
            console.log(number);
            return(
                <div key={index}> 
                    {number} </div>
            )
        })
        console.log(numberList);
        return(
            <div>
                
               {numberList} 
            </div>
        )
    }
}
export default Map;
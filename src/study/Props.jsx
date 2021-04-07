import React, { Component } from 'react'

import Practice from './Practice'

class Props extends Component{

    render(){
        let data = [
            {
                name: "harveer",
                age:26,
                email: "harveer232singh@gmail.com"
            },
            {
                name: "Nishant",
                age: 25,
                email: "nishant343@gmail.com"
            },
            {
                name: "Sanjeev",
                age: 27,
                email:"sanjeev5454@gmail.com"  
            }
        ]
        return(
            <div>
                {data.map((d, index) => {
                    return(
                        <div> 
                            <Practice name1={d.name} name2={d.age} name3={d.email}  />
                        </div>
                    )}
                )}
            </div>
        )
    }
}
export default Props;
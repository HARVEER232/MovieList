import React, { Component } from 'react'

class Forloop extends Component {

    render() {
        let list = [10, 'dsasd', "nishant", 3, 'harveer', 5, 6, 7, 8, 9];
        console.log("fsdfwa")

        for(let i=0;  i<list.length; i++){
            console.log(list[i])
        }

        for (var i = list.length; i--; i >= 10) {
            if (i !== 7) {
                console.log(list[i]);
            } else {

            }

        }
        
        return (
            <div>
                hllo
                {list}
               
               
            </div>
        )
    }
}
export default Forloop
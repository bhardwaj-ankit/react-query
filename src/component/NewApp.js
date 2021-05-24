import React, {Component} from "react";
import Dropdown from "./Dropdown";

export default class NewApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           drpdowns : [{id:1,name:"Another Name"}]
        };
    }

    addDropdown = () => {
        console.log("Add New Dropdown") 
        this.setState((prevState) => ({
          drpdowns : [
              ...prevState.drpdowns,
             {id:prevState.drpdowns.length+1,name:"Another Name"} 
          ]  
        }))
    }

    deleteDropdown = (idx) => {
        let removeDrpDwn = (val) => {
            if(this.state.drpdowns.length != 1){
                return val.id != idx
            }
            else{
                return true;
            }
        }
        this.setState((prevState) => (
            {
                drpdowns : prevState.drpdowns.filter(removeDrpDwn)
            })
        )
    }

    render(){
        return (
            <div>
                <button onClick={this.addDropdown}>+</button>                
                <div>
                {
                    this.state.drpdowns.map((item) => (<div><button onClick={() => this.deleteDropdown(item.id)}>-</button><Dropdown key={item.id} name={item.name}></Dropdown></div>))
                }
                </div>
            </div>
        )
    }

}
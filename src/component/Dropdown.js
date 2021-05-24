import React, {Component} from "react";

export default class Dropdown extends React.Component {

    render(){
        return (
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        )
    }

}
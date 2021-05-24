import React, { Component } from "react";

export default class Searchresult extends Component {
  render() {
    return (
      <>
        <div>
          {this.props.result.length > 0 && (
            <>
              <p>Student Name : {this.props.result[0].name}</p>
              <p>
                Student Passport Number : {this.props.result[0].passportNumber}
              </p>
            </>
          )}
        </div>
      </>
    );
  }
}

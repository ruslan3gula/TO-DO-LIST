import React, { Component } from "react";
import { uuid } from "uuidv4";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: ""
    };
  }



  render() {
    return (
      <div>
        <h1>{this.state.title + this.state.description + this.state.date}</h1>

       
      </div>
    );
  }
}

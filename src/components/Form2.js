import React, { Component } from "react";
import { uuid } from "uuidv4";

export class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["ListItem1", "ListItem2"]
    };
  }

  //  const tasks =[{ title: "title1", description: "des1", date: "date1" },
  //  { title: "title2", description: "des2", date: "date2" }];

  deleteHandler = index => {
    const tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  };

  render() {
    const mystyle = {
      border: "1px solid black"
    };

    return (
      <div>
        {this.state.tasks.map((task, index) => {
          return (
            <div click={() => this.deleteHandler(index)} style={mystyle}>
              {task}
            </div>
          );
        })}
      </div>
    );
  }
}

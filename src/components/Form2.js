import React, { Component } from "react";
import { uuid } from "uuidv4";

export class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //tasks: ["ListItem1", "ListItem2"],
      //submittedName: "",
      title: "hhh",
      description: "jjjj",
      date: "010101",
      tasks: []
    };
  }

  deleteHandler = index => {
    const tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  };

  addTask = () => {
    console.log(this.firstName);
  };

  onChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    //   this.setState({
    //     [name]: value
    //   });

    //   var task = { this.state.title, this.state.description, this.state.date };
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const mystyle = {
      border: "1px solid black"
    };

    return (
      <div>
        {this.state.tasks.map((task, index) => {
          return (
            <div style={mystyle}>
              {task}
              <button onClick={() => this.deleteHandler(index)}>
                Delete task
              </button>
            </div>
          );
        })}

        <form style={{ border: "black solid 1px" }} onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="input name "
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="description"
            placeholder="input description "
            value={this.state.description}
            name="description"
            onChange={this.onChange}
          />
          <input
            type="date"
            placeholder="input date"
            value={this.state.date}
            name="date"
            onChange={this.onChange}
          />
          <button type="submit">Create task</button>
        </form>
      </div>
    );
  }
}

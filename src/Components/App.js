import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import AgeStats from "./AgeStats";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "1998-08-04",
      showStats: false
    };
  }

  changeBirthday = () => {
    this.setState({ birthday: this.state.newDate, showStats: true });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>What's your birthday</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          />{" "}
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
        </Form>
        {this.state.showStats ? (
          <div className="fade age-stats">
            <AgeStats date={this.state.birthday} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;

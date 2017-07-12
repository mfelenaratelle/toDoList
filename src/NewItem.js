import React, { Component } from "react";
import TextField from "material-ui/TextField";

class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.onValueChanged = this.onValueChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChanged(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({ value: false, label: this.state.value });
    this.setState({ value: "" });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          value={value}
          className="new-item"
          onChange={this.onValueChanged}
          floatingLabelText="What needs to be done?"
        />
      </form>
    );
  }
}

export default NewItem;

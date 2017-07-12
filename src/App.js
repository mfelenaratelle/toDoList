import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import Items from "./Items";
import NewItem from "./NewItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { value: true, label: "Learn React" },
        { value: false, label: "Watch Rick and Morty" }
      ]
    };
    this.checkItem = this.checkItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  checkItem(index) {
    const items = this.state.items.map((item, i) => {
      if (i === index) {
        item.value = !item.value;
      }
      return item;
    });
    this.setState({ items });
  }

  deleteItem(index) {
    const items = this.state.items.filter((item, i) => i !== index);
    this.setState({ items });
  }

  addNewItem(item) {
    const items = [...this.state.items, item];
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    return (
      <MuiThemeProvider>
        <Paper>
          <NewItem onSubmit={this.addNewItem} />
          <Items
            items={items}
            onItemValueChange={this.checkItem}
            onDeleteClicked={this.deleteItem}
          />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;

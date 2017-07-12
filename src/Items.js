import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import Delete from "material-ui/svg-icons/action/delete";
import Filters from "./Filters";

class componentName extends Component {
  constructor() {
    super();
    this.state = { activeFilter: "all" };
    this.setActiveFilter = this.setActiveFilter.bind(this);
  }

  setActiveFilter(filter) {
    this.setState({ activeFilter: filter });
  }

  render() {
    const { items, onItemValueChange, onDeleteClicked } = this.props;
    const { activeFilter } = this.state;
    const filteredItems = items.filter(item => {
      switch (activeFilter) {
        case 'active':
          return !item.value;
        case 'completed':
          return item.value;
        default:
          return true;
      }
    });

    return (
      <div>
        <List>
          {filteredItems.map((item, index) =>
            <ListItem
              key={index}
              primaryText={item.label}
              leftCheckbox={
                <Checkbox
                  checked={item.value}
                  onCheck={() => onItemValueChange(index)}
                />
              }
              rightIcon={<Delete onClick={() => onDeleteClicked(index)} />}
            />
          )}
        </List>
        <Filters activeFilter={activeFilter} onFilterClick={this.setActiveFilter} />
      </div>
    );
  }
}

export default componentName;

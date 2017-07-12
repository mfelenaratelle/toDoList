import React, { Component } from "react";
import Chip from "material-ui/Chip";
import { blue300, gray100 } from "material-ui/styles/colors";

class Filters extends Component {
  constructor() {
    super();
    this.state = {
      filters: ["all", "active", "completed"]
    };
  }


  render() {
    const styles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }
    };

    const { filters } = this.state;
    const { activeFilter, onFilterClick } = this.props;
    return (
      <div style={styles.wrapper}>
        {filters.map(filter =>
          <Chip
            style={styles.chip}
            backgroundColor={activeFilter === filter ? blue300 : gray100}
            onClick={() => { onFilterClick(filter) }}
          >
            {filter}
          </Chip>
        )}
      </div>
    );
  }
}

export default Filters;

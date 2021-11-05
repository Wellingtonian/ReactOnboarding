import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";

class TableHeaderGen extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.key) return null;
    if (column.path !== sortColumn.path) return "arrow right";
    if (sortColumn.order === "asc") return "arrow down";
    else return "arrow up";
  };

  render() {
    return (
      <Table.Header>
        <Table.Row>
          {this.props.columns.map((column) => (
            <Table.HeaderCell key={column.path || column.key}>
              {column.label}
              <Icon
                className="clickable"
                name={this.renderSortIcon(column)}
                onClick={() => this.raiseSort(column.path)}
              />
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
    );
  }
}

export default TableHeaderGen;

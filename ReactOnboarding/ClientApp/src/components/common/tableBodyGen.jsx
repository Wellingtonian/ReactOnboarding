import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";

class TableBodyGen extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    if (column.path === "dateSold")
      return _.get(item, column.path).slice(0, 10);
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <Table.Body>
        {data.map((item) => (
          <Table.Row key={item.id}>
            {columns.map((column) => (
              <Table.Cell key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    );
  }
}

export default TableBodyGen;

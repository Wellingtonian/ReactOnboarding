import React from "react";
import { Table } from "semantic-ui-react";
import TableHeaderGen from "./tableHeaderGen";
import TableBodyGen from "./tableBodyGen";

const TableGen = ({ columns, sortColumn, onSort, data }) => {
  return (
    <Table striped>
      <TableHeaderGen
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBodyGen data={data} columns={columns} />
    </Table>
  );
};

export default TableGen;

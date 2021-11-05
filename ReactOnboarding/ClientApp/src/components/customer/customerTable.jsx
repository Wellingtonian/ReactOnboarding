import React, { Component } from "react";
import TableGen from "../common/tableGen";
import DeleteCustomer from "./deleteCustomer";
import EditCustomer from "./editCustomer";

class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditModalOpen: false,
      isDeleteModalOpen: false,
    };
  }

  columns = [
    { path: "name", label: "Name" },
    { path: "address", label: "Address" },
    {
      key: "edit",
      label: "Activity-1",
      content: (data) => (
        <EditCustomer onEdit={this.props.onEdit} customer={data} />
      ),
    },
    {
      key: "delete",
      label: "Activit-2",
      content: (data) => (
        <DeleteCustomer onDelete={this.props.onDelete} customer={data} />
      ),
    },
  ];
  render() {
    const { customerList, onSort, sortColumn } = this.props;
    return (
      <TableGen
        columns={this.columns}
        data={customerList}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CustomerTable;

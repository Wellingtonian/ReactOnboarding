import React, { Component } from "react";
import TableGen from "../common/tableGen";
import DeleteStore from "./deleteStore";
import EditStore from "./editStore";

class StoreTable extends Component {
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
      content: (data) => <EditStore onEdit={this.props.onEdit} store={data} />,
    },
    {
      key: "delete",
      label: "Activit-2",
      content: (data) => (
        <DeleteStore onDelete={this.props.onDelete} store={data} />
      ),
    },
  ];
  render() {
    const { storeList, onSort, sortColumn } = this.props;
    return (
      <TableGen
        columns={this.columns}
        data={storeList}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default StoreTable;

import React, { Component } from "react";
import TableGen from "../common/tableGen";
import EditProduct from "./editproduct";
import DeleteProduct from "./deleteProduct";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditModalOpen: false,
      isDeleteModalOpen: false,
    };
  }

  columns = [
    { path: "name", label: "Name" },
    { path: "price", label: "Price" },
    {
      key: "edit",
      label: "Activity-1",
      content: (data) => (
        <EditProduct onEdit={this.props.onEdit} product={data} />
      ),
    },
    {
      key: "delete",
      label: "Activit-2",
      content: (data) => (
        <DeleteProduct onDelete={this.props.onDelete} product={data} />
      ),
    },
  ];
  render() {
    const { productList, onSort, sortColumn } = this.props;
    return (
      <TableGen
        columns={this.columns}
        data={productList}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ProductTable;

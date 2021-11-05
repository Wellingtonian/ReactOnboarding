import React, { Component } from "react";
import TableGen from "../common/tableGen";
import DeleteSale from "./deleteSale";
import EditSale from "./editSale";

class SaleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditModalOpen: false,
      isDeleteModalOpen: false,
    };
  }

  columns = [
    { path: "dateSold", label: "Date Sold" },
    { path: "product.name", label: "Product" },
    { path: "customer.name", label: "Customer" },
    { path: "store.name", label: "Store" },
    {
      key: "edit",
      label: "Activity-1",
      content: (data) => (
        <EditSale
          onEdit={this.props.onEdit}
          sale={data}
          store={this.props.store}
          customer={this.props.customer}
          product={this.props.product}
        />
      ),
    },
    {
      key: "delete",
      label: "Activit-2",
      content: (data) => (
        <DeleteSale onDelete={this.props.onDelete} sale={data} />
      ),
    },
  ];
  render() {
    const { saleList, onSort, sortColumn } = this.props;
    return (
      <TableGen
        columns={this.columns}
        data={saleList}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default SaleTable;

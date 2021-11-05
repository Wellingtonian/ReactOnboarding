import axios from "axios";
import React, { Component } from "react";
import { Label } from "semantic-ui-react";
import PaginationUnit from "../common/paginationUnit";
import { paginate } from "../../utilities/paginate";
import { Divider } from "semantic-ui-react";
import Selections from "../common/selections";
import _ from "lodash";
import CreateSale from "./createSale";
import SaleTable from "./saleTable";

class SaleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saleList: [],
      customerList: [],
      productList: [],
      storeList: [],
      currentPage: 1,
      pageSize: 5,
      sortColumn: { path: "title", order: "asc" },
    };
  }
  // Didmount and initial state
  async componentDidMount() {
    this.fetchSaleList();
    this.fetchStoreList();
    this.fetchProductList();
    this.fetchCustomerList();
  }

  fetchSaleList = async () => {
    const { data } = await axios.get("/sales/getsales").catch((err) => {
      console.log(err);
    });

    this.setState({ saleList: data });
  };

  fetchProductList = async () => {
    const { data } = await axios.get("/products/getproducts").catch((err) => {
      console.log(err);
    });

    this.setState({ productList: data });
  };

  fetchCustomerList = async () => {
    const { data } = await axios.get("/customers/getcustomers").catch((err) => {
      console.log(err);
    });
    this.setState({ customerList: data });
  };

  fetchStoreList = async () => {
    const { data } = await axios.get("/stores/getstores").catch((err) => {
      console.log(err);
    });
    this.setState({ storeList: data });
  };

  handleCreate = async (sale) => {
    const { data } = await axios.post("/sales/postsale", sale);
    const saleList = [data, ...this.state.saleList];
    this.setState({ saleList });
  };

  handleEdit = async (sale) => {
    await axios.put(`/sales/putsale/${sale.id}`, sale);
    const saleList = [...this.state.saleList];
    const index = saleList.indexOf(sale);
    saleList[index] = { ...sale };
    this.setState({ saleList });
    this.fetchSaleList();
  };

  handleDelete = async (sale) => {
    await axios.delete(`/sales/deletesale/${sale.id}`);
    const saleList = this.state.saleList.filter((p) => p.id !== sale.id);
    this.setState({ saleList });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePageSizeChange = (optionSelected) => {
    this.setState({ pageSize: optionSelected });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const { saleList: allsale, currentPage, pageSize, sortColumn } = this.state;

    const sorted = _.orderBy(allsale, [sortColumn.path], [sortColumn.order]);
    const saleList = paginate(sorted, currentPage, pageSize);

    return { saleList };
  };

  render() {
    const { length: count } = this.state.saleList;
    const {
      //saleList: allsaleList,
      customerList,
      productList,
      storeList,
      currentPage,
      pageSize,
      sortColumn,
    } = this.state;

    if (count === 0)
      return (
        <div>
          <h1>sale</h1>

          <CreateSale
            onCreate={this.handleCreate}
            store={storeList}
            customer={customerList}
            product={productList}
          />
          <Divider horizontal>No Sale</Divider>
          <p>Creat your first Sale!</p>
        </div>
      );
    const { saleList } = this.getPageData();

    return (
      <div>
        <h1>Sale</h1>

        <CreateSale
          onCreate={this.handleCreate}
          store={storeList}
          customer={customerList}
          product={productList}
        />
        <Divider horizontal>
          Total {count === 1 ? count + "Sale" : count + " Sales"}
        </Divider>

        <div>
          {" "}
          <SaleTable
            saleList={saleList}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
            store={storeList}
            customer={customerList}
            product={productList}
          />
          <div className="collapse navbar-collapse d-flex justify-content-between">
            <PaginationUnit
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
            <div>
              <Label pointing="right">Items On Each Page</Label>
              <Selections onPageSizeChange={this.handlePageSizeChange} />
            </div>
          </div>
        </div>
        <Divider horizontal>Copyright Wellingtonian@2021</Divider>
      </div>
    );
  }
}
export default SaleHome;

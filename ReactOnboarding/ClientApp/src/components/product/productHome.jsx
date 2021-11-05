import axios from "axios";
import React, { Component } from "react";
import { Label, Button, Icon } from "semantic-ui-react";
import PaginationUnit from "../common/paginationUnit";
import { paginate } from "../../utilities/paginate";
import { Divider } from "semantic-ui-react";
import ProductTable from "./productTable";
import Selections from "../common/selections";
import _ from "lodash";
import CreateProduct from "./createProduct";

class ProductHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      currentPage: 1,
      pageSize: 5,
      sortColumn: { path: "title", order: "asc" },
      isModalOpen: false,
    };
  }
  // Didmount and initial state
  async componentDidMount() {
    this.fetchProductList();
  }

  fetchProductList = async () => {
    const { data } = await axios.get("/products/getproducts").catch((err) => {
      console.log(err);
    });
    this.setState({ productList: data });
  };

  handleCreate = async (product) => {
    const { data } = await axios.post("/products/postproduct", product);

    const productList = [data, ...this.state.productList];
    this.setState({ productList });
  };

  handleEdit = async (product) => {
    await axios.put(`/products/putproduct/${product.id}`, product);
    const productList = [...this.state.productList];
    const index = productList.indexOf(product);
    productList[index] = { ...product };
    this.setState({ productList });
    this.fetchProductList();
  };

  handleDelete = async (product) => {
    await axios.delete(`/products/deleteproduct/${product.id}`);
    const productList = this.state.productList.filter(
      (p) => p.id !== product.id
    );
    this.setState({ productList });
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
    const {
      productList: allproduct,
      currentPage,
      pageSize,
      sortColumn,
    } = this.state;

    const sorted = _.orderBy(allproduct, [sortColumn.path], [sortColumn.order]);
    const productList = paginate(sorted, currentPage, pageSize);

    return { productList };
  };

  setOpen = (isModalOpen) => {
    this.setState({ isModalOpen });
  };

  render() {
    const { length: count } = this.state.productList;
    const {
      //productList: allProduct,
      currentPage,
      pageSize,
      sortColumn,
      isModalOpen,
    } = this.state;

    if (count === 0)
      return (
        <div>
          <h1>Product</h1>
          <Button color="violet" onClick={() => this.setOpen(true)}>
            <Icon name="file" />
            Create Product
          </Button>
          <CreateProduct
            open={isModalOpen}
            setOpen={this.setOpen}
            onCreate={this.handleCreate}
          />
          <Divider horizontal>No Product</Divider>
          <p>Creat your first product!</p>
        </div>
      );
    const { productList } = this.getPageData();

    return (
      <div>
        <h1>Product</h1>
        <Button color="violet" onClick={() => this.setOpen(true)}>
          <Icon name="file" />
          Create Product
        </Button>
        <CreateProduct
          open={isModalOpen}
          setOpen={this.setOpen}
          onCreate={this.handleCreate}
        />
        <Divider horizontal>
          Total {count === 1 ? count + "Pruduct" : count + " Products"}
        </Divider>

        <div>
          {" "}
          <ProductTable
            productList={productList}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
          <div className="pagination">
            <PaginationUnit
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />

            <Selections onPageSizeChange={this.handlePageSizeChange} />
          </div>
        </div>
        <Divider horizontal>Copyright Wellingtonian@2021</Divider>
      </div>
    );
  }
}

export default ProductHome;

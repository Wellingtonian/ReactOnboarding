import axios from "axios";
import React, { Component } from "react";
import { Label, Button, Icon } from "semantic-ui-react";
import PaginationUnit from "../common/paginationUnit";
import { paginate } from "../../utilities/paginate";
import { Divider } from "semantic-ui-react";
import StoreTable from "./storeTable";
import Selections from "../common/selections";
import _ from "lodash";
import CreateStore from "./createStore";

class StoreHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeList: [],
      currentPage: 1,
      pageSize: 5,
      sortColumn: { path: "title", order: "asc" },
    };
  }
  // Didmount and initial state
  async componentDidMount() {
    this.fetchStoreList();
  }

  fetchStoreList = async () => {
    const { data } = await axios.get("/stores/getstores").catch((err) => {
      console.log(err);
    });
    this.setState({ storeList: data });
  };

  handleCreate = async (store) => {
    const { data } = await axios.post("/stores/poststore", store);

    const storeList = [data, ...this.state.storeList];
    this.setState({ storeList });
  };

  handleEdit = async (store) => {
    await axios.put(`/stores/putStore/${store.id}`, store);
    const storeList = [...this.state.storeList];
    const index = storeList.indexOf(store);
    storeList[index] = { ...store };
    this.setState({ storeList });
    this.fetchStoreList();
  };

  handleDelete = async (store) => {
    await axios.delete(`/stores/deleteStore/${store.id}`);
    const storeList = this.state.storeList.filter((p) => p.id !== store.id);
    this.setState({ storeList });
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
      storeList: allStore,
      currentPage,
      pageSize,
      sortColumn,
    } = this.state;

    const sorted = _.orderBy(allStore, [sortColumn.path], [sortColumn.order]);
    const storeList = paginate(sorted, currentPage, pageSize);

    return { storeList };
  };

  render() {
    const { length: count } = this.state.storeList;
    const {
      // storeList: allStore,
      currentPage,
      pageSize,
      sortColumn,
    } = this.state;

    if (count === 0)
      return (
        <div>
          <h1>Store</h1>
          <Button color="violet" onClick={() => this.setOpen(true)}>
            <Icon name="file" />
            Create Store
          </Button>
          <CreateStore onCreate={this.handleCreate} />
          <Divider horizontal>No Store</Divider>
          <p>Creat your first Store!</p>
        </div>
      );
    const { storeList } = this.getPageData();

    return (
      <div>
        <h1>Store</h1>

        <CreateStore onCreate={this.handleCreate} />
        <Divider horizontal>
          Total {count === 1 ? count + "Pruduct" : count + " Stores"}
        </Divider>

        <div>
          {" "}
          <StoreTable
            storeList={storeList}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
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

export default StoreHome;

import axios from "axios";
import React, { Component } from "react";
import { Label, Button, Icon } from "semantic-ui-react";
import PaginationUnit from "../common/paginationUnit";
import { paginate } from "../../utilities/paginate";
import { Divider } from "semantic-ui-react";
import Selections from "../common/selections";
import CustomerTable from "./customerTable";
import CreateCustomer from "./createCustomer";
import _ from "lodash";

class CustomerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: [], // To empty array when use database
      currentPage: 1,
      pageSize: 5,
      sortColumn: { path: "title", order: "asc" },
      isModalOpen: false,
    };
  }

  // Didmount and initial state
  async componentDidMount() {
    this.fetchCustomerList();
  }

  fetchCustomerList = async () => {
    const { data } = await axios.get("/customers/getcustomers").catch((err) => {
      console.log(err);
    });
    this.setState({ customerList: data });
  };

  handleCreate = async (customer) => {
    const { data } = await axios.post("/customers/postcustomer", customer);

    const customerList = [data, ...this.state.customerList];
    this.setState({ customerList });
  };

  handleEdit = async (customer) => {
    await axios.put(`/customers/putcustomer/${customer.id}`, customer);
    const customerList = [...this.state.customerList];
    const index = customerList.indexOf(customer);
    customerList[index] = { ...customer };
    this.setState({ customerList });
    this.fetchCustomerList();
  };

  handleDelete = async (customer) => {
    await axios.delete(`/customers/deletecustomer/${customer.id}`);
    const customerList = this.state.customerList.filter(
      (p) => p.id !== customer.id
    );
    this.setState({ customerList });
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
      customerList: allCustomer,
      currentPage,
      pageSize,
      sortColumn,
    } = this.state;

    const sorted = _.orderBy(
      allCustomer,
      [sortColumn.path],
      [sortColumn.order]
    );
    const customerList = paginate(sorted, currentPage, pageSize);

    return { customerList };
  };

  setOpen = (isModalOpen) => {
    this.setState({ isModalOpen });
  };

  render() {
    const { length: count } = this.state.customerList;
    const {
      // customerList: allCustomer,
      currentPage,
      pageSize,
      sortColumn,
      isModalOpen,
    } = this.state;

    if (count === 0)
      return (
        <div>
          <h1>Customer</h1>
          <Button color="violet" onClick={() => this.setOpen(true)}>
            <Icon name="file" />
            Create Customer
          </Button>
          <CreateCustomer
            open={isModalOpen}
            setOpen={this.setOpen}
            onCreate={this.handleCreate}
          />
          <Divider horizontal>No Customer</Divider>
          <p>Creat your first customer!</p>
        </div>
      );

    const { customerList } = this.getPageData();

    return (
      <div>
        <h1>Customer</h1>
        <Button color="violet" onClick={() => this.setOpen(true)}>
          <Icon name="file" />
          Create Customer
        </Button>
        <CreateCustomer
          open={isModalOpen}
          setOpen={this.setOpen}
          onCreate={this.handleCreate}
        />
        <Divider horizontal>
          Total {count === 1 ? count + "Customer" : count + " Customers"}
        </Divider>

        <div>
          {" "}
          <CustomerTable
            customerList={customerList}
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

export default CustomerHome;

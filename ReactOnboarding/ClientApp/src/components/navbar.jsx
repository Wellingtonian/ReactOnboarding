import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";
import ReactIcon from "./reactIcon";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item>
          <ReactIcon />
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/customers"
          name="customer"
          active={activeItem === "customer"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/products"
          name="product"
          active={activeItem === "product"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/stores"
          name="store"
          active={activeItem === "store"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/sales"
          name="sale"
          active={activeItem === "sale"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

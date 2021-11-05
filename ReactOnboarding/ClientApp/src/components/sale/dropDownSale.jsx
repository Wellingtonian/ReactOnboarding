import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropDownSale = ({ data, onSelect }) => (
  <Dropdown
    placeholder="Select"
    search
    selection
    options={data.map(function (item) {
      return { key: item.id, value: item.id, text: item.name };
    })}
    onChange={(e, data) => onSelect(data.value)}
  />
);
export default DropDownSale;

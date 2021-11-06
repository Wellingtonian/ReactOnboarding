import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropDownSaleEdit = ({ data, onSelect, sale }) => (
  <Dropdown
    search
    selection
    placeholder={
      data
        .map(function (item) {
          return { key: item.id, value: item.id, text: item.name };
        })
        .find((s) => s.key === sale).text
    }
    options={data.map(function (item) {
      return { key: item.id, value: item.id, text: item.name };
    })}
    onChange={(e, data) => onSelect(data.value)}
  />
);
export default DropDownSaleEdit;

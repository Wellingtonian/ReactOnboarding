import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropDownSale = ({ data, onSelect }) => (
  <Dropdown
    placeholder="Select"
    search
    selection
    options={data.map(function (item) {
      if (data && data.length)
        return { key: item.id, value: item.name, text: item.name };
    })}
    //options={[{ key: "1", value: "1", text: "10" }]}
    onChange={(e, data) => onSelect(data.value)}
  />
);
export default DropDownSale;

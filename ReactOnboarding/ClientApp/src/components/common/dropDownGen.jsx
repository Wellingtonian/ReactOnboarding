import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropDownGen = ({ data, onSelect }) => (
  <Dropdown
    placeholder="Select"
    search
    selection
    options={data.map(function (item) {
      return { key: item.id, value: item.name, text: item.name };
    })}
    onChange={(e, data) => onSelect(data.value)}
  />
);
export default DropDownGen;

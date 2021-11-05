import React from "react";
import { Select } from "semantic-ui-react";

const options = [
  { key: "1", value: "1", text: "1" },
  { key: "2", value: "3", text: "3" },
  { key: "3", value: "5", text: "5" },
  { key: "4", value: "10", text: "10" },
  { key: "5", value: "20", text: "20" },
];

const Selections = ({ onPageSizeChange }) => {
  return (
    <Select
      placeholder="5"
      options={options}
      onChange={(event, data) => onPageSizeChange(data.value)}
    />
  );
};

export default Selections;

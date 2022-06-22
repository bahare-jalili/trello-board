import React from "react";
import { constants } from "../constants/constants";

function SelectInput({ data, value, handleChange }) {
  return (
    <select onChange={handleChange} value={value}>
      <option disabled value="">
        {constants.PLEASE_SELECT_COLUMN}
      </option>
      {data}
    </select>
  );
}

export default React.memo(SelectInput);

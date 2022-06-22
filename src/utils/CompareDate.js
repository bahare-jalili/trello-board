import React from "react";
import moment from "moment";

const CompareDate = (dueDate) => {
  const dateFormat = "YYYY-MM-DD";
  const today = new Date();
  const todayFormat = moment(today).format(dateFormat);

  if (dueDate < todayFormat) {
    return "red";
  } else {
    return "green";
  }
};

export default CompareDate;

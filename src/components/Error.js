import React from "react";

function Error({ text }) {
  return <p style={{ color: "red", fontSize: "12px" }}>{text}</p>;
}

export default React.memo(Error);

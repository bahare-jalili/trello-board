import React from "react";

function Button({ className, style, onClick, name }) {
  return (
    <button className={className} style={style} onClick={onClick}>
      {name}
    </button>
  );
}

export default React.memo(Button);

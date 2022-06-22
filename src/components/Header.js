import React from "react";
import { constants } from "../constants/constants";

function Header() {
  return (
    <header className="App-header">
      <p>{constants.TRELLO_BOARD}</p>
    </header>
  );
}

export default Header;

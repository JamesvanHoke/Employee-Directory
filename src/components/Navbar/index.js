import React from "react";
import "./style.css";

function Navbar() {
  return (
    <>
      <nav class="navbar fixed-top navbar-dark bg-dark justify-content-between">
        <span class="navbar-brand">Navbar</span>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </>
  );
}

export default Navbar;

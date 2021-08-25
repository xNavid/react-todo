import React, { useEffect, useState } from "react";

const Navbar = (props) => {
  const lougoutUser = () => {
    localStorage.removeItem("user");
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex">
            <button
              className="btn btn-outline-danger"
              type="submit"
              onClick={lougoutUser}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

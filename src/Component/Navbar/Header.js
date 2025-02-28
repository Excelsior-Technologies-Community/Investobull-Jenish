import React from "react";
import "../Navbar/Navbar.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg container-fluid">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./Assets/Headerlogo.png" alt="Logo" />
            </a>

            <button
              style={{ backgroundColor: "#2fb574", marginLeft: "122px" }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-ittem">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-ittem">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-ittem">
                    Payment
                  </Link>
                </li>
              </ul>
            </div>

            <form className="d-flex">
              <button
                className="headerbutton btn btn-outline-success"
                type="submit"
              >
                Download The App
              </button>
            </form>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;

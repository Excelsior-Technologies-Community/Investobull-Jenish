import React from "react";
import "../Footer/Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footersection">
        <div className="container d-flex footer" style={{ paddingTop: "60px" }}>
          <div className="footerleft" style={{ width: "40%" }}>
            <div className="">
              <h4 className="mb-3">
                <img src="./Assets/Headerlogo.png" alt="Investobull Logo" />
              </h4>
              <p>
                A marketplace that sells various types of work by professional
                designers and is paid with NFT tokens.
              </p>
            </div>
          </div>
          <div className="d-flex footerright">
            <div className="">
              <h5>About Us</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Abous Us</Link>
                </li>
                <li>
                  <Link to="#">Our Services</Link>
                </li>
                <li>
                  <Link to="#">How It Works</Link>
                </li>
                <li>
                  <Link to="#">Become a Partner</Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Token</Link>
                </li>
                <li>
                  <Link to="#">Discussion</Link>
                </li>
                <li>
                  <Link to="#">Voting</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="#">Help Center</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5>Social Media</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Instagram</Link>
                </li>
                <li>
                  <Link to="#">Facebook</Link>
                </li>
                <li>
                  <Link to="#">Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Last Section  */}
      <hr style={{ color: "white" }} />
      <section className="container">
        <div className="row footerlast">
          <div className="col">
            <span>Copyright @2023 Asra</span>
          </div>
          <div className="col">
            <ul className="d-flex">
              <li>
                <Link to="#" style={{ color: "#262626" }}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" style={{ color: "#727272" }}>
                  Security
                </Link>
              </li>
              <li>
                <Link to="#" style={{ color: "#727272" }}>
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

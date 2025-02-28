import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero section  */}
      <div>
        <section className="mainhero">
          <img
            src="./Assets/background_1_.png"
            alt="herobackgroundimage"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div className="herosection">
              <h1>We make it easy for everyone to invest</h1>
              <p>
                Investment is a term with several meanings related to finance
                and economics. The term relates to the accumulation of an assets
                in the forms of an expectation of the future profits.
              </p>
              <div className="herobtn">
                <button className="btn btn-outline-success" type="submit">
                  Get Started
                </button>
                <Link to="/as">
                  <img src="./Assets/Frame 40.png" alt="herofetstartedbutton" />
                </Link>
              </div>
            </div>
          </div>
          <div className="heroimage">
            <img
              src="./Assets/Mask group.png"
              alt="heroimagesideimage"
              style={{ position: "absolute", width: "100%", height: "50%" }}
            />
            <div className="container">
              <div className="heroimagerow row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <div className="row">
                  <img
                    src="./Assets/Frame 427320504.png"
                    alt="heroimage1"
                    className="img-fluid heroimagerow1"
                    style={{ height: "75%", marginTop: "29px" }}
                  />
                </div>
                <div className="col">
                  <img
                    src="./Assets/Frame 427320502.png"
                    alt="heroimage2"
                    className="img-fluid"
                  />
                  <img
                    src="./Assets/Frame 427320513.png"
                    alt="heroimage3"
                    className="img-fluid "
                    style={{ marginTop: "10px" }}
                  />
                </div>
                <div className="col">
                  <img
                    src="./Assets/Group 427319614.png"
                    alt="heroimage4"
                    className="img-fluid"
                    style={{ height: "100%" }}
                  />
                </div>
                <div className="col heroimagerow4">
                  <img
                    src="./Assets/02.png"
                    alt="heroimage5"
                    className="img-fluid"
                    style={{ height: "75%", marginTop: "29px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* services section */}
      <section className="service">
        <img
          src="./Assets/Bg Shape2.png"
          alt=""
          className="serviceimage serviceimageleft"
        />
        <img
          src="./Assets/Bg Shape.png"
          alt=""
          className="serviceimage serviceimageright"
        />
        <div className="container">
          <div className="servicecontent">
            <h1>Our Best Services For Your Convinience</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="d-flex justify-content-center serviceline">
            <img src="./Assets/Groupbig.png" alt="groupbig" />
          </div>
          <div className="row g-4 justify-content-center servicecard">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./Assets/Shield Done.png"
                    className="img-fluid"
                    alt="Shield Done"
                  />
                  <h1>Guarantee Safety</h1>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./Assets/Tick Square.png"
                    className="img-fluid"
                    alt="Tick Square"
                  />
                  <h1>All in One App</h1>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./Assets/Game.png"
                    className="img-fluid"
                    alt="Game"
                  />
                  <h1>Easy to Use</h1>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* These are why you should use Investobull */}
      <section className="container">
        <div className="shoulduse">
          <div className="shouldusecontent">
            <h1>These are why you should use Investobull</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="shouldusecontentimg">
            <img src="./Assets/Groupbig.png" alt="Groupbig" />
          </div>
          <div
            style={{ width: "100%" }}
            className="d-flex justify-content-center shouldusebox"
          >
            <div style={{ alignContent: "center" }}>
              <div
                className="shouldusebox1"
                style={{ padding: "90px", marginTop: "-131px" }}
              >
                <img src="./Assets/menu.png" alt="menuimage" />
                <h1>Lots Choices</h1>
                <img src="./Assets/Group.png" alt="groupimage" />
                <p>
                  There are various types of investments available and you can
                  choose investments
                </p>
              </div>
              <img
                src="./Assets/Vector 2277.png"
                alt="vectore2277"
                style={{ width: "100%" }}
                className="shoulduseline"
              />
              <div className="shouldusebox1buttom" style={{ padding: "90px" }}>
                <img src="./Assets/chart.png" alt="chartimage" />
                <h1>High Profit</h1>
                <img src="./Assets/Group.png" alt="groupimage" />
                <p>
                  The money or assets will gradually grow or increase in value
                  within a certain period
                </p>
              </div>
            </div>
            <img
              src="./Assets/Vector 2276 (1).png"
              alt="vector2276(1)"
              style={{ height: "auto" }}
              className="hline"
            />

            <div style={{ marginTop: "50px", alignContent: "center" }}>
              <div
                className="shouldusebox2"
                style={{ padding: "90px", marginTop: "60px" }}
              >
                <img src="./Assets/wallet-check.png" alt="wallet" />
                <h1>Minimal Risk</h1>
                <img src="./Assets/Group.png" alt="group" />
                <p>
                  Interest rate risk in the risk that arises because the
                  relative value
                </p>
              </div>
              <img
                src="./Assets/Vector 2277.png"
                alt="vectore2277"
                style={{ width: "100%" }}
                className="shoulduseline"
              />
              <div className="shouldusebox2bottom" style={{ padding: "90px" }}>
                <img src="./Assets/judge.png" alt="judge" />
                <h1>Legal</h1>
                <img src="./Assets/Group.png" alt="group" />
                <p>
                  Our platform has been verified and supervised by related
                  institutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature section  */}
      <section className="featurebgcolor">
        <div className="container">
          <div className="featurecontent">
            <h1>Some of Wonderful Features</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <img src="./Assets/Groupbig.png" alt="groupbig" />
          </div>
          <div className="featureblock1 d-flex justify-content-between">
            <div className="leftside">
              <img src="./Assets/Iconfeature.png" alt="iconfeature" />
              <h1>One Click Blance view</h1>
              <p>
                Commonly used in the graphic, print & publishing industris for
                previewing visual layout and mockups.
              </p>
              <i>
                <img src="./Assets/Button.png" alt="button" />
              </i>
            </div>
            <div className="d-flex block1right">
              <div className="rightside">
                <img src="./Assets/Headerlogo.png" alt="headerlogo" />
              </div>
              <div className="rightsideimage">
                <img src="./Assets/Group 16760.png" alt="" />
                <img src="./Assets/Group 16761.png" alt="" />
              </div>
            </div>
          </div>
          <div className="featureblock2 d-flex justify-content-between">
            <div className="block2left">
              <img src="./Assets/Group 16762.png" alt="" />
            </div>
            <div className="block2right">
              <i>
                <img
                  src="./Assets/Icon.png"
                  alt=""
                  className="block2rightimg"
                />
              </i>
              <h1>Expense with Our Limiter</h1>
              <p>
                Commonly used in the graphic, print & publishing industris for
                previewing visual layout and mockups.
              </p>
              <i>
                <img src="./Assets/Button.png" alt="" />
              </i>
            </div>
          </div>

          <div className="featureblock3 d-flex justify-content-between">
            <div className="block3left">
              <i>
                <img src="./Assets/Iconblock3.png" alt="" />
              </i>
              <h1>Custome & Plugin Development.</h1>
              <p>
                Commonly used in the graphic, print & publishing industris for
                previewing visual layout and mockups.
              </p>
              <i>
                <img src="./Assets/Button.png" alt="" />
              </i>
            </div>
            <div className="block3right">
              <img src="./Assets/Group 8.png" alt="" />
            </div>
          </div>
          <div className="featureblock4">
            <div className="block4left">
              <span className="highlight-text">Get started in minutes</span>
              <h1>3 Main Reasons to Choose Us</h1>
              <img
                src="./Assets/Groupbig.png"
                alt="MainImage"
                className="block4-main-img"
              />

              <div className="block4-text">
                <h3>Register and create your first support portal</h3>
                <p>
                  It only takes 5 minutes. Setup is smooth & simple, with fully
                  customizable page design to reflect your brand.
                </p>

                <div className="border-box">
                  <div className="questionlist">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            style={{ padding: "0px" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            Manage your dashbaord easily
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              Web hosting is a data storage service so that a
                              website can be accessed online. This website data
                              is stored in a storage space called a web hosting
                              server which is always active 24 hours a day. The
                              quality of web hosting services can determine the
                              success of your business as well as all your
                              website activities. Without a quality web hosting
                              service, a website may not be accessed properly.
                              Therefore, always use the best web hosting service
                              for your website
                            </strong>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingtwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsetwo"
                            aria-expanded="false"
                            aria-controls="collapsetwo"
                          >
                            Start Investing
                          </button>
                        </h2>
                        <div
                          id="collapsetwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingtwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src="./Assets/Shape 3.png"
                alt="ShapeImage"
                className="block4leftimage"
              />
            </div>

            <div className="block4right">
              <img
                src="./Assets/Image.png"
                alt="FeatureImage"
                className="block4image1"
              />
              <img
                src="./Assets/Homepage 1.png"
                alt="HomepageImage"
                className="block4image2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Asked Question Section  */}
      <section className="container">
        <div className="question">
          <div className="questioncontent">
            <h1>Frequently Asked Question</h1>
            <img src="Image/Groupbig.png" alt="" style={{ width: "100%" }} />
          </div>
          <div className="questionlist">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Lorem ipsum dolor sit amet consterqeur?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Web hosting is a data storage service so that a website
                      can be accessed online. This website data is stored in a
                      storage space called a web hosting server which is always
                      active 24 hours a day. The quality of web hosting services
                      can determine the success of your business as well as all
                      your website activities. Without a quality web hosting
                      service, a website may not be accessed properly.
                      Therefore, always use the best web hosting service for
                      your website
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Lorem ipsum dolor sit amet consterqeur?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Lorem ipsum dolor sit amet consterqeur?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More sections */}
      <section className="learnmorebgimage">
        <div className="container learnmore">
          <div className="d-flex justify-content-between learnmorecontent">
            <div className="lernmoreleft">
              <img src="./Assets/Image.svg" alt="" />
            </div>
            <div className="lernmoreright">
              <img
                src="./Assets/Group 42.png"
                alt=""
                style={{ marginBottom: "30px" }}
              />
              <h1 style={{ marginBottom: "30px" }}>
                Deski combines excellent live chat, ticketing and automation
                that allow us to provide quality.
              </h1>
              <div className="learnmoreright2">
                <span style={{ fontSize: "12px" }}>Mike Lucas. </span>
                <br />
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  CEO & Founder deksi
                </span>
              </div>
              <button className="btn btn-outline-secondary" type="button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Sections  */}
      <section className="container">
        <div className="trial">
          <div className="d-flex trialbgcolor">
            <div className="trialleft">
              <span>Start Your free trial.</span>
              <h1>New user? Start your free trial now.</h1>
            </div>
            <div className="trialright" style={{ marginLeft: "60px" }}>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                  style={{ position: "absolute" }}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  style={{ position: "relative" }}
                >
                  Start Trial
                </button>
              </div>
              <div style={{ marginTop: "20px" }}>
                <span>
                  Already a member?{" "}
                  <span>
                    <Link to="#">Sign in.</Link>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment sections  */}
      <section className="paymentsection">
        <div className="container payment">
          <div className="row align-items-center paymentbgcolor">
            <div className="col-md-5 d-flex justify-content-center position-relative paymentleft">
              <img
                src="./Assets/Image.png"
                alt=""
                className="pleft1 position-absolute rounded-3"
              />
              <img src="./Assets/Homepage 1.png" alt="" className="pleft2" />
            </div>

            <div className="col-md-6 paymentright">
              <h1>The New Way of Cashless Payment</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <div className="d-flex gap-3">
                <img
                  src="./Assets/logos_google-play.png"
                  alt=""
                  style={{ maxWidth: "150px" }}
                />
                <img
                  src="./Assets/download-on-the-app-store-badge_us 1.png"
                  alt=""
                  style={{ maxWidth: "150px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Sections  */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;

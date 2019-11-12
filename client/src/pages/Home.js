import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleIndicators"
          className="carousel slide carouselSize"
          data-ride="carousel"
          data-interval="5000"
          data-pause="false"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active f-img">
              <img
                className="d-block w-100"
                src="https://i.vimeocdn.com/video/572944906_1280.jpg"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Come chill with us</h2>
                <p>The best tools to chill out.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/XWGXimIJhGg/maxresdefault.jpg"
                alt="Second slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Come chill with us</h2>
                <p>The best tools to chill out.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://s-ec.bstatic.com/images/hotel/max1024x768/312/31223331.jpg"
                alt="Third slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Come chill with us</h2>
                <p>The best tools to chill out.</p>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only"></span>
          </a>
        </div>
        <section id="social">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Connect With Us</h2>
                <hr align="left" width="50%" />
                <p> Feel free to reach out to our development team!</p>
              </div>
              <div className="col-md-6 social">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/jonathan.giler.9"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square connect"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram connect"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter-square connect"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-pinterest-square connect"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-google-plus-square connect"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fas fa-rss-square connect"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="who">
          <div className="container">
            <div className="row">
              <h2>WHO WE ARE</h2>
              
              <p className="lead">
                Lorem ipsum dolor sit amet, per ex animal audire, quem tale
                aliquip has ei, ea euismod sanctus
              </p>
              <p>
                Lorem ipsum dolor sit amet, per ex animal audire, quem tale
                aliquip has ei, ea euismod sanctus qui.
              </p>
            </div>
            <div className="flex-container">
              <img
                className="img-fluid"
                src="https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_teaser_image/2019-03/march-2019-how-do-we-become-who-we-are.jpg?itok=CAOJY3tj"
              ></img>
            </div>
          </div>
        </section> */}
        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-gem text-primary mb-4" />
                  <h3 className="h4 mb-2">Top Quality</h3>
                  <p className="text-muted mb-0">
                    Our products have 30 day money back guarantee
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4" />
                  <h3 className="h4 mb-2">Connect Anywhere</h3>
                  <p className="text-muted mb-0">
                    Ecommerce Site Works Anywhere.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-globe text-primary mb-4" />
                  <h3 className="h4 mb-2">Shipping Worldwide</h3>
                  <p className="text-muted mb-0">
                    Get our products wherever you live!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4" />
                  <h3 className="h4 mb-2">Made with Love</h3>
                  <p className="text-muted mb-0">
                    We love all our products and make them with care!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="team">
          <div className="container">
            <div className="row team">
              <div className="col-lg-6 col-lg-offset-3 text-center">
                <h2 id="ourTeam">
                  <span className="ion-minus" />
                  Our Team
                  <span className="ion-minus" />
                </h2>
                <p>
                  These are some of the forces that came together to provide
                  this website.
                </p>
                <br />
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <img
                  className="img-rounded"
                  alt="team-photo"
                  src="https://avatars3.githubusercontent.com/u/7431751?s=460&v=4"
                  // width="100%"
                  height="200px"
                />
                <div className="team-member">
                  <h4>Patrick Howard</h4>
                  <p>CIO</p>
                </div>
                <p className="social">
                  {/* <a href="#">
                    <span className="fa fa-facebook-square" />
                  </a> */}
                </p>
              </div>{" "}
              {/*col-lg-4 */}
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <img
                  className="img-rounded"
                  alt="team-photo"
                  src={require("../img/JonathanGiler.jpg")}
                  // width="100%"
                  height="200px"
                />
                <div className="team-member">
                  <h4>Jonathan Giler</h4>
                  <p>Web Developer</p>
                </div>
                <p className="social">
                  <a href="https://github.com/jgiler/" target="_blank">
                    <span className="fab fa-github-square" />
                  </a>
                </p>
              </div>{" "}
              {/*col-lg-4 */}
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <img
                  className="img-rounded"
                  alt="team-photo"
                  src="https://pbs.twimg.com/profile_images/829431121586880513/UGqLggLr_400x400.jpg"
                  // width="100%"
                  height="200px"
                />
                <div className="team-member">
                  <h4>Road to Hire</h4>
                  <p>Headquarters</p>
                </div>
                {/* <p className="social">
                  <a href="#">
                    <span className="fa fa-facebook-square" />
                  </a>
                </p> */}
              </div>{" "}
              {/* col-lg-4 */}
            </div>{" "}
            {/* row text-center */}
          </div>
        </div>
        <div className="jumbotron">
          <h1 className="display-4">Chill Store</h1>
          <p className="lead">The best tools to help y'all chill out</p>
          <hr className="my-4" />
          <p>Thank you for visiting our store!</p>
          <p className="lead">
            <NavLink
              className="btn btn-primary btn-lg"
              exact
              to="/products"
              role="button"
            >
              Chill Products!
            </NavLink>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

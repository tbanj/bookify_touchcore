import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';
class NavBar extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-default navbar-inverse navbar-theme navbar-theme-abs navbar-theme-transparent navbar-theme-border" id="main-nav">
          <div className="container">
            <div className="navbar-inner nav">
              <div className="navbar-header">
                <button className="navbar-toggle collapsed" data-target="#navbar-main" data-toggle="collapse" type="button" area-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <NavLink className="navbar-brand addStyle" to={"index.html"} >
                  <img src="/test_assets/img/logo/logo7.png" alt="Alternative text" title="Image Title" />
                </NavLink>
              </div>
              <div className="collapse navbar-collapse" id="navbar-main">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <NavLink to={"/"} >Home</NavLink>
                  </li>
                  <li className=" dropdown">
                    <NavLink className="dropdown-toggle" to={"index.html"} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</NavLink>
                    <div className="dropdown-menu dropdown-menu-lg">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"index.html"} >Index 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-2.html"} >Index 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-3.html"} >Index 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-4.html"} >Index 4</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-5.html"} >Index 5</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-6.html"} >Index 6</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-7.html"} >Index 7</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-8.html"} >Index 8</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-9.html"} >Index 9</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-10.html"} >Index 10</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Misc</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"blog.html"} >Blog</NavLink>
                            </li>
                            <li>
                              <NavLink to={"blog-post.html"} >Blog Post</NavLink>
                            </li>
                            <li>
                              <NavLink to={"404.html"} >404</NavLink>
                            </li>
                            <li>
                              <NavLink to={"about-us.html"} >About Us</NavLink>
                            </li>
                            <li>
                              <NavLink to={"contact.html"} >Contact</NavLink>
                            </li>
                            <li>
                              <NavLink to={"login.html"} >Login</NavLink>
                            </li>
                            <li>
                              <NavLink to={"login-2.html"} >Login 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"register.html"} >Register</NavLink>
                            </li>
                            <li>
                              <NavLink to={"pwd-reset.html"} >Reset password</NavLink>
                            </li>
                            <li>
                              <NavLink to={"payment-success.html"} >Sucess Payment</NavLink>
                            </li>
                            <li>
                              <NavLink to={"coming-soon.html"} >Coming Soon</NavLink>
                            </li>
                            <li>
                              <NavLink to={"loading.html"} >Loading</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Country/City</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"index-city-1.html"} >Index City 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-city-2.html"} >Index City 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-city-3.html"} >Index City 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-country-1.html"} >Index Country 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-country-2.html"} >Index Country 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"index-country-3.html"} >Index Country 3</NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <NavLink className="dropdown-toggle" to={"hotel-index-1.html"} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hotels</NavLink>
                    <div className="dropdown-menu dropdown-menu-xl">
                      <div className="row">
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"hotel-index-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-index-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-index-3.html"} >Layout 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-index-4.html"} >Layout 4</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"hotel-results-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-results-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-results-3.html"} >Layout 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-results-4.html"} >Layout 4</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-results-5.html"} >Layout 5</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-results-6.html"} >Layout 6</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Hotel Pages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"hotel-page-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-page-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-page-3.html"} >Layout 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-page-4.html"} >Layout 4</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-page-5.html"} >Layout 5</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"hotel-payment-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"hotel-payment-2.html"} >Layout 2</NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <NavLink className="dropdown-toggle" to={"room-index-1.html"} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Rooms</NavLink>
                    <div className="dropdown-menu dropdown-menu-xl">
                      <div className="row">
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"room-index-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-index-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-index-3.html"} >Layout 3</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"room-results-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-results-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-results-3.html"} >Layout 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-results-4.html"} >Layout 4</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-results-5.html"} >Layout 5</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-results-6.html"} >Layout 6</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Room Pages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"room-page-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-page-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-page-3.html"} >Layout 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-page-4.html"} >Layout 4</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-page-5.html"} >Layout 5</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"room-payment-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"room-payment-2.html"} >Layout 2</NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <NavLink className="dropdown-toggle" to={"flight-index-1.html"} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Flights</NavLink>
                    <div className="dropdown-menu dropdown-menu-lg">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"flight-index-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"flight-index-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"flight-index-3.html"} >Layout 3</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"flight-results-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"flight-results-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"flight-results-3.html"} >Layout 3</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"flight-payment-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"flight-payment-2.html"} >Layout 2</NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <NavLink className="dropdown-toggle" to={"car-index-1.html"} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cars</NavLink>
                    <div className="dropdown-menu dropdown-menu-lg">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"car-index-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"car-index-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"car-index-3.html"} >Layout 3</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"car-results-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"car-results-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"car-results-3.html"} >Layout 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"car-results-4.html"} >Layout 4</NavLink>
                            </li>
                            <li>
                              <NavLink to={"car-results-5.html"} >Layout 5</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"car-payment-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"car-payment-2.html"} >Layout 2</NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <NavLink className="dropdown-toggle" to={"exp-index-1.html"} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Experiences</NavLink>
                    <div className="dropdown-menu dropdown-menu-xl">
                      <div className="row">
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"exp-index-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-index-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-index-3.html"} >Layout 3</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"exp-results-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-results-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-results-3.html"} >Layout 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-results-4.html"} >Layout 4</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-results-5.html"} >Layout 5</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-results-6.html"} >Layout 6</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Event Pages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"exp-page-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-page-2.html"} >Layout 2</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-page-3.html"} >Layout 3</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-page-4.html"} >Layout 4</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-page-5.html"} >Layout 5</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <NavLink to={"exp-payment-1.html"} >Layout 1</NavLink>
                            </li>
                            <li>
                              <NavLink to={"exp-payment-2.html"} >Layout 2</NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <NavLink className="dropdown-toggle" to={""} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <span className="_desk-h">Currency</span>
                      <b>USD</b>
                    </NavLink>
                    <div className="dropdown-menu dropdown-menu-xxl">
                      <h5 className="dropdown-meganav-select-list-title">Popular Currencies</h5>
                      <div className="row" data-gutter="10">
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <NavLink to={""}>
                                <span>€</span>Euro
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>£</span>Pound sterling
                                  </NavLink>
                            </li>
                            <li className="active">
                              <NavLink to={""}>
                                <span>US$</span>U.S. dollar
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <NavLink to={""}>
                                <span>CAD</span>Canadian dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>AUD</span>Australian dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>RUB</span>Russian Ruble
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <NavLink to={""}>
                                <span>S$</span>Singapore dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>CNY</span>Chinese yuan
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>¥</span>Japanese yen
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr />
                      <h5 className="dropdown-meganav-select-list-title">All Currencies</h5>
                      <div className="row" data-gutter="10">
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <NavLink to={""}>
                                <span>AR$</span>Argentine peso
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>AUD</span>Australian dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>AZN</span>Azerbaijan, New Ma...
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>BHD</span>Bahrain dinar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>BRL</span>Brazilian real
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>BGN</span>Bulgarian lev
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>CAD</span>Canadian dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>XOF</span>CFA Franc BCEAO
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>CL$</span>Chilean peso
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>CNY</span>Chinese yuan
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>COP</span>Colombian peso
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>Kč</span>Czech koruna
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>DKK</span>Danish krone
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <NavLink to={""}>
                                <span>EGP</span>Egyptian pound
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>€</span>Euro
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>FJD</span>Fijian dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>GEL</span>Georgian lari
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>HK$</span>Hong Kong Dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>HUF</span>Hungarian forint
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>Rs.</span>Indian rupee
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>Rp</span>Indonesian rupiah
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>₪</span>Israeli new sheqel
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>¥</span>Japanese yen
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>JOD</span>Jordanian dinar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>KZT</span>Kazakhstani tenge
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>KRW</span>Korean won
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <NavLink to={""}>
                                <span>KWD</span>Kuwaiti dinar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>MYR</span>Malaysian ringgit
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>MXN</span>Mexican peso
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>MDL</span>Moldovan leu
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>NAD</span>Namibian Dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>TWD</span>New Taiwan Dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>NZD</span>New Zealand dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>NOK</span>Norwegian krone
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>OMR</span>Omani rial
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>zł</span>Polish zloty
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>£</span>Pound sterling
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>QAR</span>Qatar riyal
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>lei</span>Romanian new leu
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <NavLink to={""}>
                                <span>RUB</span>Russian Ruble
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>SAR</span>Saudi Arabian riyal
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>S$</span>Singapore dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>ZAR</span>South African rand
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>SEK</span>Swedish krona
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>CHF</span>Swiss franc
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>THB</span>Thai baht
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>TL</span>Turkish lira
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>AED</span>U.A.E. dirham
                                  </NavLink>
                            </li>
                            <li className="active">
                              <NavLink to={""}>
                                <span>US$</span>U.S. dollar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>UAH</span>Ukraine Hryvnia
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <span>UZS</span>Uzbekistan, Sums
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <NavLink className="dropdown-toggle" to={""} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <span className="_desk-h">Language</span>
                      <img className="navbar-flag" src="/test_assets/img/flags/USA.png" alt="visual Alternative text" title="Image Title" />
                    </NavLink>
                    <div className="dropdown-menu dropdown-menu-xxl">
                      <h5 className="dropdown-meganav-select-list-title">Languages</h5>
                      <div className="row" data-gutter="10">
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-lang">
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/UK.png" alt="visual Alternative text" title="Image Title" />English(UK)
                                  </NavLink>
                            </li>
                            <li className="active">
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/US.png" alt="visual Alternative text" title="Image Title" />English(US)
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/DE.png" alt="visual Alternative text" title="Image Title" />Deutsch
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/NED.png" alt="visual Alternative text" title="Image Title" />Nederlands
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/FR.png" alt="visual Alternative text" title="Image Title" />Français
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/SP.png" alt="visual Alternative text" title="Image Title" />Español
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/ARG.png" alt="visual Alternative text" title="Image Title" />Español (AR)
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/IT.png" alt="visual Alternative text" title="Image Title" />Italiano
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/PT.png" alt="visual Alternative text" title="Image Title" />Português (PT)
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/BR.png" alt="visual Alternative text" title="Image Title" />Português (BR)
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/NR.png" alt="visual Alternative text" title="Image Title" />Norsk
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-lang">
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/FIN.png" alt="visual Alternative text" title="Image Title" />Suomi
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/SW.png" alt="visual Alternative text" title="Image Title" />Svenska
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/DEN.png" alt="visual Alternative text" title="Image Title" />Dansk
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/CZ.png" alt="visual Alternative text" title="Image Title" />Čeština
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/HUN.png" alt="visual Alternative text" title="Image Title" />Magyar
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/ROM.png" alt="visual Alternative text" title="Image Title" />Română
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/JP.png" alt="visual Alternative text" title="Image Title" />日本語
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/CN.png" alt="visual Alternative text" title="Image Title" />简体中文
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/PL.png" alt="visual Alternative text" title="Image Title" />Polski
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/GR.png" alt="visual Alternative text" title="Image Title" />Ελληνικά
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/RU.png" alt="visual Alternative text" title="Image Title" />Русский
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-lang">
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/TUR.png" alt="visual Alternative text" title="Image Title" />Türkçe
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/BUL.png" alt="visual Alternative text" title="Image Title" />Български
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/ARB.png" alt="visual Alternative text" title="Image Title" />العربية
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/KOR.png" alt="visual Alternative text" title="Image Title" />한국어
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/ISR.png" alt="visual Alternative text" title="Image Title" />עברית
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/LAT.png" alt="visual Alternative text" title="Image Title" />Latviski
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/UKR.png" alt="visual Alternative text" title="Image Title" />Українська
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/IND.png" alt="visual Alternative text" title="Image Title" />Bahasa Indonesia
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/MAL.png" alt="visual Alternative text" title="Image Title" />Bahasa Malaysia
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/TAI.png" alt="visual Alternative text" title="Image Title" />ภาษาไทย
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/EST.png" alt="visual Alternative text" title="Image Title" />Eesti
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-lang">
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/CRO.png" alt="visual Alternative text" title="Image Title" />Hrvatski
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/LIT.png" alt="visual Alternative text" title="Image Title" />Lietuvių
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/SLO.png" alt="visual Alternative text" title="Image Title" />Slovenčina
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/SERB.png" alt="visual Alternative text" title="Image Title" />Srpski
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/SLOVE.png" alt="visual Alternative text" title="Image Title" />Slovenščina
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/NAM.png" alt="visual Alternative text" title="Image Title" />Tiếng Việt
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/PHI.png" alt="visual Alternative text" title="Image Title" />Filipino
                                  </NavLink>
                            </li>
                            <li>
                              <NavLink to={""}>
                                <img src="/test_assets/img/flag_codes/ICE.png" alt="visual Alternative text" title="Image Title" />Íslenska
                                  </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="navbar-nav-item-user dropdown">
                    <NavLink className="dropdown-toggle" to={"account.html"} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-user-circle-o navbar-nav-item-user-icon"></i>My Account
                        </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to={"account.html"} >Preferences</NavLink>
                      </li>
                      <li>
                        <NavLink to={"account-notifications.html"} >Notifications</NavLink>
                      </li>
                      <li>
                        <NavLink to={"account-cards.html"} >Payment Methods</NavLink>
                      </li>
                      <li>
                        <NavLink to={"account-travelers.html"} >Travelers</NavLink>
                      </li>
                      <li>
                        <NavLink to={"account-history.html"} >History</NavLink>
                      </li>
                      <li>
                        <NavLink to={"account-bookmarks.html"} >Bookmarks</NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>


      </React.Fragment>
    );
  }
}

export default NavBar;
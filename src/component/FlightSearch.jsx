import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ResultContext } from './shared/result-context';
class FlightSearch extends Component {
    // state = {}
    render() {
        console.log(this.props);
        
        return (
            <React.Fragment>



                <div className="theme-hero-area front">
      <div className="theme-hero-area-bg-wrap">
        <div className="theme-hero-area-bg theme-hero-area-bg-blur" style={{backgroundImage:'url(./test_assets/img/1500x800.png)'}}></div>
        <div className="theme-hero-area-mask theme-hero-area-mask-half"></div>
      </div>
      <div className="theme-hero-area-body">
        <div className="container">
          <div className="_pb-50 _pt-100 _pv-mob-50">
            <div className="theme-search-area _mob-h theme-search-area-white">
              <div className="theme-search-area-header _mb-20">
                <h1 className="theme-search-area-title theme-search-area-title-sm">265 Flights to Lodon</h1>
              </div>
              <div className="theme-search-area-form" id="hero-search-form">
                <div className="row" data-gutter="10">
                  <div className="col-md-5 ">
                    <div className="row" data-gutter="10">
                      <div className="col-md-6 ">
                        <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-fade-white theme-search-area-section-no-border">
                          <label className="theme-search-area-section-label _op-06">From</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                            <input className="theme-search-area-section-input typeahead" defaultValue="New York, United States" type="text" placeholder="Departure" data-provide="typeahead"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-fade-white theme-search-area-section-no-border">
                          <label className="theme-search-area-section-label _op-06">To</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                            <input className="theme-search-area-section-input typeahead" defaultValue="London, United Kindom" type="text" placeholder="Arrival" data-provide="typeahead"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="row" data-gutter="10">
                      <div className="col-md-4 ">
                        <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-fade-white theme-search-area-section-no-border">
                          <label className="theme-search-area-section-label _op-06">Depart</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-calendar"></i>
                            <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in"/>
                            <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-fade-white theme-search-area-section-no-border">
                          <label className="theme-search-area-section-label _op-06">Arrival</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-calendar"></i>
                            <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out"/>
                            <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-fade-white theme-search-area-section-no-border quantity-selector" data-increment="Passengers">
                          <label className="theme-search-area-section-label _op-06">Passengers</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-people"></i>
                            <input className="theme-search-area-section-input" defaultValue="1 Passenger" type="text"/>
                            <div className="quantity-selector-box" id="FlySearchPassengers">
                              <div className="quantity-selector-inner">
                                <p className="quantity-selector-title">Passengers</p>
                                <ul className="quantity-selector-controls">
                                  <li className="quantity-selector-decrement">
                                    <Link to={"#"}>&#45;</Link>
                                  </li>
                                  <li className="quantity-selector-current">1</li>
                                  <li className="quantity-selector-increment">
                                    <Link to={"#"}>&#43;</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 ">
                    <button className="theme-search-area-submit _tt-uc theme-search-area-submit-curved theme-search-area-submit-sm theme-search-area-submit-no-border theme-search-area-submit-primary">Edit</button>
                  </div>
                </div>
              </div>
              <div className="theme-search-area-options clearfix">
                <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                  <label className="btn btn-primary active">
                    <input type="radio" name="flight-options" id="flight-option-1" defaultChecked/>Round Trip
                  </label>
                  <label className="btn btn-primary">
                    <input type="radio" name="flight-options" id="flight-option-2"/>One Way
                  </label>
                </div>
              </div>
            </div>
            <div className="theme-search-area-inline _desk-h theme-search-area-inline-white">
              <h4 className="theme-search-area-inline-title">Lodon Flights</h4>
              <p className="theme-search-area-inline-details">June 27 &rarr; July 02, 1 Passnger</p>
              <Link className="theme-search-area-inline-link magnific-inline" to="#searchEditModal">
                <i className="fa fa-pencil"></i>Edit
              </Link>
              <div className="magnific-popup magnific-popup-sm mfp-hide" id="searchEditModal">
                <div className="theme-search-area theme-search-area-vert">
                  <div className="theme-search-area-header">
                    <h1 className="theme-search-area-title theme-search-area-title-sm">Edit your Search</h1>
                    <p className="theme-search-area-subtitle">Prices might be different from current results</p>
                  </div>
                  <div className="theme-search-area-form">
                    <div className="theme-search-area-section first theme-search-area-section-curved">
                      <label className="theme-search-area-section-label">From</label>
                      <div className="theme-search-area-section-inner">
                        <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                        <input className="theme-search-area-section-input typeahead" defaultValue="New York" type="text" placeholder="Departure" data-provide="typeahead"/>
                      </div>
                    </div>
                    <div className="theme-search-area-section theme-search-area-section-curved">
                      <label className="theme-search-area-section-label">To</label>
                      <div className="theme-search-area-section-inner">
                        <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                        <input className="theme-search-area-section-input typeahead" type="text" placeholder="Arrival" data-provide="typeahead"/>
                      </div>
                    </div>
                    <div className="row" data-gutter="10">
                      <div className="col-md-6 ">
                        <div className="theme-search-area-section theme-search-area-section-curved">
                          <label className="theme-search-area-section-label">Depart</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-calendar"></i>
                            <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in"/>
                            <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="theme-search-area-section theme-search-area-section-curved">
                          <label className="theme-search-area-section-label">Arrival</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-calendar"></i>
                            <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out"/>
                            <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-area-section theme-search-area-section-curved quantity-selector" data-increment="Passengers">
                      <label className="theme-search-area-section-label">Passengers</label>
                      <div className="theme-search-area-section-inner">
                        <i className="theme-search-area-section-icon lin lin-people"></i>
                        <input className="theme-search-area-section-input" defaultValue="1 Passenger" type="text"/>
                        <div className="quantity-selector-box" id="mobile-FlySearchPassengers">
                          <div className="quantity-selector-inner">
                            <p className="quantity-selector-title">Passengers</p>
                            <ul className="quantity-selector-controls">
                              <li className="quantity-selector-decrement">
                                <Link to={"#"}>&#45;</Link>
                              </li>
                              <li className="quantity-selector-current">1</li>
                              <li className="quantity-selector-increment">
                                <Link to={"#"}>&#43;</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="theme-search-area-submit _mt-0 _tt-uc theme-search-area-submit-curved">Change</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="theme-page-section theme-page-section-gray">
      <div className="container">
        <div className="row row-col-static" id="sticky-parent" data-gutter="20">
          <div className="col-md-2-5 ">
            <div className="sticky-col _mob-h">
              <div className="theme-search-results-sidebar">
                <div className="theme-search-results-sidebar-sections _mb-20 _br-2">
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">Stops</h5>
                    <div className="theme-search-results-sidebar-section-checkbox-list">
                      <div className="theme-search-results-sidebar-section-checkbox-list-items">
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">nonstop</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$305</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">1 stop</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$349</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">2 stops</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$154</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">Flight Class</h5>
                    <div className="theme-search-results-sidebar-section-checkbox-list">
                      <div className="theme-search-results-sidebar-section-checkbox-list-items">
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Economy</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$375</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Business</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$292</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">First</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$332</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">Price</h5>
                    <div className="theme-search-results-sidebar-section-price">
                      <input id="price-slider" name="price-slider" data-min="100" data-max="500"/>
                    </div>
                  </div>
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">Take-off London</h5>
                    <div className="theme-search-results-sidebar-section-checkbox-list">
                      <div className="theme-search-results-sidebar-section-checkbox-list-items">
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Morning
                              <span className="icheck-sub-title">05:00am - 11:59am</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$466</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Afternoon
                              <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$256</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Evening
                              <span className="icheck-sub-title">06:00pm - 11:59pm</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$257</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">Landing New York</h5>
                    <div className="theme-search-results-sidebar-section-checkbox-list">
                      <div className="theme-search-results-sidebar-section-checkbox-list-items">
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Morning
                              <span className="icheck-sub-title">05:00am - 11:59am</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$404</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Afternoon
                              <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$216</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Evening
                              <span className="icheck-sub-title">06:00pm - 11:59pm</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$286</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">Take-off New York</h5>
                    <div className="theme-search-results-sidebar-section-checkbox-list">
                      <div className="theme-search-results-sidebar-section-checkbox-list-items">
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Morning
                              <span className="icheck-sub-title">05:00am - 11:59am</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$411</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Afternoon
                              <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$386</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Evening
                              <span className="icheck-sub-title">06:00pm - 11:59pm</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$285</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">Landing London</h5>
                    <div className="theme-search-results-sidebar-section-checkbox-list">
                      <div className="theme-search-results-sidebar-section-checkbox-list-items">
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Morning
                              <span className="icheck-sub-title">05:00am - 11:59am</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$469</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Afternoon
                              <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$248</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Evening
                              <span className="icheck-sub-title">06:00pm - 11:59pm</span>
                            </span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$190</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">London Airport</h5>
                    <div className="theme-search-results-sidebar-section-checkbox-list">
                      <div className="theme-search-results-sidebar-section-checkbox-list-items">
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">CLY: City</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$336</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">LHR: Heathrow</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$229</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">LCW: Gatwich</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$403</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">STN: Stansed</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$405</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">SEN: Southend</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$319</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">New York Airport</h5>
                    <div className="theme-search-results-sidebar-section-checkbox-list">
                      <div className="theme-search-results-sidebar-section-checkbox-list-items">
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">JFK: John F. Kennedy</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$366</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">LGA: LaGuardia</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$257</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">EWR: Newark Liberty</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$424</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-search-results-sidebar-section">
                    <h5 className="theme-search-results-sidebar-section-title">Airlines</h5>
                    <div className="theme-search-results-sidebar-section-checkbox-list">
                      <div className="theme-search-results-sidebar-section-checkbox-list-items">
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">KLM Royal Dutch...</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$127</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">LOT Polish Airlines</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$261</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Wow Airlines</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$423</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Virgin Atlantic...</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$268</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Delta Airlines</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$425</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">SWISS Airlines</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$403</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Lufthansa</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$469</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">American Airlines</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$319</span>
                        </div>
                        <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                          <label className="icheck-label">
                            <input className="icheck" type="checkbox"/>
                            <span className="icheck-title">Fly Emirates</span>
                          </label>
                          <span className="theme-search-results-sidebar-section-checkbox-list-amount">$105</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-ad">
                <Link className="theme-ad-link" to={"#"}></Link>
                <p className="theme-ad-sign">Advertisement</p>
                <img className="theme-ad-img" src="./test_assets/img/300x500.png" alt="Visual Alternative text" title="Image Title"/>
              </div>
            </div>
          </div>
          <div className="col-md-7 ">
            <div className="theme-search-results-sort _mob-h clearfix">
              <h5 className="theme-search-results-sort-title">Sort by:</h5>
              <ul className="theme-search-results-sort-list">
                <li>
                  <Link to={"#"}>Price
                    <span>Low &rarr; High</span>
                  </Link>
                </li>
                <li className="active">
                  <Link to={"#"}>Duration
                    <span>Long &rarr; Short</span>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Recommended
                    <span>High &rarr; Low</span>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Airline Name
                    <span>Name &nbsp; A &rarr; Z</span>
                  </Link>
                </li>
              </ul>
              <div className="dropdown theme-search-results-sort-alt">
                <Link id="dropdownMenu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to={"#"}>More
                  <span className="caret"></span>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li>
                    <Link to={"#"}>Departure take-off</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Departure landing</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Return take-off</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Return landing</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="theme-search-results-sort-select _desk-h">
              <select>
                <option>Price</option>
                <option>Duration</option>
                <option>Recommended</option>
                <option>Airline Name</option>
                <option>Departure take-off</option>
                <option>Departure landing</option>
                <option>Return take-off</option>
                <option>Return landing</option>
              </select>
            </div>
            <div className="theme-search-results-sign-in _mob-h bg-grad">
              <i className="theme-search-results-sign-in-icon fa fa-unlock-alt"></i>
              <h5 className="theme-search-results-sign-in-title">Sign in to unlock our secret delas. Save up to
                <b>50%</b>
              </h5>
              <Link className="btn theme-search-results-sign-in-btn btn-ghost btn-white" to={"#"}>Sign in now</Link>
            </div>
            <div className="theme-search-results">
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-1" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-1"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/351x253.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">07:30
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>17h 50m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">CLY</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">01:20
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Virgin Atlantic Airways</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/310x304.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">12:10
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>16h 40m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LCW</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:50
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by American Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$179</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-1">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-1" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-1">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">17h 50m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">17h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CLY</b>City
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>6845 Virgin</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">16h 40m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:10
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">16h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LCW</b>Gatwich
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>7612 American</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-200</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-2" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-2"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/351x253.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">11:20
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>17h 10m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LHR</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:30
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Virgin Atlantic Airways</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/192x88.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">08:40
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>19h 0m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">03:40
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Fly Emirates</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$443</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-2">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-2" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-2">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">17h 10m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">17h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LHR</b>Heathrow
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>4980 Virgin</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-200</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">19h 0m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">08:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">19h 0m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>1887 Fly</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-3" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-3"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/192x88.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">05:30
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>24h 30m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LTN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">CDG</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SVO</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">06:00
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Fly Emirates</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/200x124.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">06:20
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>37h 30m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LTN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">PHL</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">CDG</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">07:50
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by KLM Royal Dutch Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$472</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-3">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-3" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-3">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">24h 30m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">7h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LTN</b>Luton
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>3937 Fly</li>
                                      <li>Wide-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:30
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">5h 30m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Paris(CDG)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:10
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>6001 Fly</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-200</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:10
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:60
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 50m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Moscow(SVO)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:60
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:00
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">5h 0m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>4731 Fly</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">37h 30m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:20
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:10
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">8h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LTN</b>Luton
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>1331 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-200</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:10
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 40m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Philadelphia(PHL)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:50
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:60
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>8443 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:60
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 20m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Paris(CDG)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:20
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">10h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>8412 KLM</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-4" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-4"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/647x647.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">03:50
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>20h 50m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">KEF</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">12:40
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Wow Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/310x304.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">10:10
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>24h 20m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LCW</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">BOS</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">10:30
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by American Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$339</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-4">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-4" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-4">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">20h 50m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">1 stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:50
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">8h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>KEF</b>Keflavík Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Keflavík</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>1106 Wow</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:20
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:10
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 50m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Keflavík(KEF)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:10
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:40
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">7h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>KEF</b>Keflavík Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Keflavík</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>1437 Wow</li>
                                      <li>Wide-body jet</li>
                                      <li>Airbus A321-100/200</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">24h 20m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">1 stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:10
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:30
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">14h 20m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LCW</b>Gatwich
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>6848 American</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:50
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">0h 20m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Boston(BOS)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:50
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>9692 American</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-5" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-5"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/200x124.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">10:40
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>21h 0m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">STN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">PHL</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">AMS</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">07:40
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by KLM Royal Dutch Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/149x119.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">01:30
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>27h 0m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">PHL</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">AMS</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:30
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Delta Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$105</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-5">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-5" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-5">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">21h 0m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">8h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>STN</b>Stansed
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>9395 KLM</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">3h 20m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Philadelphia(PHL)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:50
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">2h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>AMS</b>Schiphol
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Amsterdam</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>5465 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Airbus A321-100/200</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">02:50
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 10m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Amsterdam(AMS)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">02:50
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>AMS</b>Schiphol
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Amsterdam</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>3870 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">27h 0m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:20
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">7h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>9205 Delta</li>
                                      <li>Wide-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 40m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Philadelphia(PHL)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:30
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>AMS</b>Schiphol
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Amsterdam</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>2505 Delta</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">3h 10m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Amsterdam(AMS)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>AMS</b>Schiphol
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Amsterdam</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>1899 Delta</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-6" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-6"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/192x88.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">11:40
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>16h 50m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LCW</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:30
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Fly Emirates</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/200x124.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">12:20
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>19h 30m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">STN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">07:50
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by KLM Royal Dutch Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$440</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-6">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-6" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-6">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">16h 50m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:30
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">16h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LCW</b>Gatwich
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>4351 Fly</li>
                                      <li>Narrow-body jet</li>
                                      <li>Airbus A321-100/200</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">19h 30m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">19h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>STN</b>Stansed
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>8665 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-7" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-7"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/200x124.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">07:30
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>23h 50m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LHR</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SVO</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">CDG</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">07:20
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by KLM Royal Dutch Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/647x647.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">11:30
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>21h 10m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LHR</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">08:40
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Wow Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$466</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-7">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-7" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-7">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">23h 50m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">8h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LHR</b>Heathrow
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>6803 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">2h 50m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Moscow(SVO)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:50
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>4192 KLM</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777-200</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:40
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 40m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Paris(CDG)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:40
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">6h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>7432 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">21h 10m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">08:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">21h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LHR</b>Heathrow
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>6734 Wow</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-8" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-8"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/343x257.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">06:30
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>22h 10m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LHR</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">CDG</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:40
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by SWISS Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/310x304.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:30
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>27h 50m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">CDG</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">08:20
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by American Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$412</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-8">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-8" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-8">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">22h 10m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">1 stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">13h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LHR</b>Heathrow
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>2190 SWISS</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:10
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">2h 10m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Paris(CDG)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:10
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">6h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>1346 SWISS</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">27h 50m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">1 stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">11h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>3664 American</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:30
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 50m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Paris(CDG)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">08:20
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">14h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>5697 American</li>
                                      <li>Wide-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-9" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-9"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/343x257.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">09:50
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>18h 30m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:20
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by SWISS Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/310x304.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:20
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>23h 40m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">BOS</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SVO</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:00
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by American Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$129</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-9">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-9" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-9">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">18h 30m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:50
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">18h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>9607 SWISS</li>
                                      <li>Narrow-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">23h 40m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">6h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>3715 American</li>
                                      <li>Narrow-body jet</li>
                                      <li>Airbus A321-100/200</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:50
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">3h 20m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Boston(BOS)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:50
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:30
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>8269 American</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">2h 50m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Moscow(SVO)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:20
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:00
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">6h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>7764 American</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-10" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-10"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/192x88.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">06:30
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>15h 20m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">09:50
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Fly Emirates</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/647x647.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">07:20
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>19h 20m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SVO</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">02:40
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Wow Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$462</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-10">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-10" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-10">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">15h 20m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:50
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">15h 20m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>5927 Fly</li>
                                      <li>Narrow-body jet</li>
                                      <li>Airbus A321-100/200</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">19h 20m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">1 stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:50
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>9287 Wow</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:50
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:30
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">0h 40m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Moscow(SVO)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">02:40
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>7503 Wow</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-11" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-11"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/647x647.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">09:30
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>24h 30m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">STN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">PHL</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SVO</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">10:00
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Wow Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/310x304.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">01:20
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>36h 20m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LTN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">BOS</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">WAW</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">01:40
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by American Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$328</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-11">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-11" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-11">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">24h 30m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">8h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>STN</b>Stansed
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>4648 Wow</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:20
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 20m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Philadelphia(PHL)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>5904 Wow</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">3h 50m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Moscow(SVO)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:20
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:00
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">6h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SVO</b>Sheremetyevo
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Moscow</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>8268 Wow</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">36h 20m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LTN</b>Luton
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>4093 American</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:50
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:60
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">3h 10m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Boston(BOS)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:60
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>WAW</b>Warsaw Chopin
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Warszawa</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>9917 American</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-200</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">02:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">3h 20m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Warszawa(WAW)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">02:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">10h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>WAW</b>Warsaw Chopin
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Warszawa</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>7972 American</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-200</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-12" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-12"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/439x198.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">11:50
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>19h 10m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LCW</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">PHL</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">07:00
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by LOT Polish Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/192x88.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:20
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>18h 0m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LTN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">10:20
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Fly Emirates</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$245</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-12">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-12" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-12">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">19h 10m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">1 stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:50
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">10h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LCW</b>Gatwich
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>8512 LOT</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:20
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:50
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">0h 30m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Philadelphia(PHL)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:50
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:00
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">8h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>3752 LOT</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">18h 0m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">18h 0m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LTN</b>Luton
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>4404 Fly</li>
                                      <li>Wide-body jet</li>
                                      <li>Airbus A321-100/200</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-13" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-13"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/200x124.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">08:10
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>20h 0m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LCW</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:10
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by KLM Royal Dutch Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/310x304.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">06:20
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>22h 30m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:50
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by American Airlines</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$383</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-13">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-13" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-13">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">20h 0m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">08:10
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:10
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">20h 0m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LCW</b>Gatwich
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>6146 KLM</li>
                                      <li>Wide-body jet</li>
                                      <li>Airbus A321-100/200</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">22h 30m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">non-stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:20
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:50
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">22h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>2600 American</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-14" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-14"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/200x124.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">09:30
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>23h 20m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LTN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">BOS</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">KEF</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LGA</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">08:50
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by KLM Royal Dutch Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/351x253.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">11:10
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>31h 20m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">LHR</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">PHL</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">JFK</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">06:30
                                        <span>am</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Virgin Atlantic Airways</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$196</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-14">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-14" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-14">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">23h 20m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 10m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LTN</b>Luton
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>1640 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Airbus A321-100/200</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:30
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">3h 50m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Boston(BOS)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">10:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:10
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>KEF</b>Keflavík Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Keflavík</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>8575 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 747-400</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">03:10
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:20
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 10m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Keflavík(KEF)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">08:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>KEF</b>Keflavík Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Keflavík</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LGA</b>LaGuardia
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>6420 KLM</li>
                                      <li>Narrow-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">31h 20m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">1 stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:10
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:40
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">13h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LHR</b>Heathrow
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>9541 Virgin</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:40
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:60
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 20m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Philadelphia(PHL)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:60
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">16h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>PHL</b>Philadelphia Airport
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Philadelphia</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>9125 Virgin</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777-200</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                <div className="theme-search-results-item-preview">
                  <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-15" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-15"></Link>
                  <div className="row" data-gutter="20">
                    <div className="col-md-10 ">
                      <div className="theme-search-results-item-flight-sections">
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/439x198.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">09:20
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 17, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>20h 20m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">CLY</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-1">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">WAW</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle-2">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">CDG</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">05:40
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 18, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by LOT Polish Airlines</h5>
                        </div>
                        <div className="theme-search-results-item-flight-section">
                          <div className="row row-no-gutter row-eq-height">
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/374x374.png" alt="Visual Alternative text" title="Image Title"/>
                              </div>
                            </div>
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-section-item">
                                <div className="row">
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">07:10
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">New York</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 23, 2018</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-results-item-flight-section-path">
                                      <div className="theme-search-results-item-flight-section-path-fly-time">
                                        <p>21h 10m</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line"></div>
                                      <div className="theme-search-results-item-flight-section-path-line-start">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">SEN</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-middle">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">WAW</div>
                                      </div>
                                      <div className="theme-search-results-item-flight-section-path-line-end">
                                        <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                        <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                        <div className="theme-search-results-item-flight-section-path-line-title">EWR</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3 ">
                                    <div className="theme-search-results-item-flight-section-meta">
                                      <p className="theme-search-results-item-flight-section-meta-time">04:20
                                        <span>pm</span>
                                      </p>
                                      <p className="theme-search-results-item-flight-section-meta-city">London</p>
                                      <p className="theme-search-results-item-flight-section-meta-date">May 24, 2018</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="theme-search-results-item-flight-section-airline-title">Operated by Lufthansa</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <div className="theme-search-results-item-book">
                        <div className="theme-search-results-item-price">
                          <p className="theme-search-results-item-price-tag">$136</p>
                          <p className="theme-search-results-item-price-sign">economy</p>
                        </div>
                        <Link className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" to={"#"}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse theme-search-results-item-collapse" id="searchResultsItem-15">
                  <div className="theme-search-results-item-extend">
                    <Link className="theme-search-results-item-extend-close" to="#searchResultsItem-15" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-15">&#10005;</Link>
                    <div className="theme-search-results-item-extend-inner">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London &rarr; New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">20h 20m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:20
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">8h 30m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CLY</b>City
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>WAW</b>Warsaw Chopin
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Warszawa</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>4677 LOT</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:50
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">3h 40m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Warszawa(WAW)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">09:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:50
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">3h 20m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>WAW</b>Warsaw Chopin
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Warszawa</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>4676 LOT</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:50
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">0h 10m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Paris(CDG)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">12:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>5444 LOT</li>
                                      <li>Wide-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York &rarr; London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">21h 10m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">1 stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">07:10
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 20m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>SEN</b>Southend
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>WAW</b>Warsaw Chopin
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Warszawa</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>5025 Lufthansa</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:20
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 50m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Warszawa(WAW)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon"></i>
                                    <div className="theme-search-results-item-flight-details-schedule-dots"></div>
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:20
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">&mdash;</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">04:20
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">10h 0m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>WAW</b>Warsaw Chopin
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Warszawa</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>&rarr;</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>EWR</b>Newark Liberty
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>6517 Lufthansa</li>
                                      <li>Wide-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-search-results-mobile-filters" id="mobileFilters">
                <Link className="theme-search-results-mobile-filters-btn magnific-inline" to="#MobileFilters">
                  <i className="fa fa-filter"></i>Filters
                </Link>
                <div className="magnific-popup mfp-hide" id="MobileFilters">
                  <div className="theme-search-results-sidebar">
                    <div className="theme-search-results-sidebar-sections">
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Stops</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">nonstop</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$369</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">1 stop</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$284</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">2 stops</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$492</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Flight Class</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Economy</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$273</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Business</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$171</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">First</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$399</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Price</h5>
                        <div className="theme-search-results-sidebar-section-price">
                          <input id="price-slider-mob" name="price-slider" data-min="100" data-max="500"/>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Take-off London</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Morning
                                  <span className="icheck-sub-title">05:00am - 11:59am</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$287</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Afternoon
                                  <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$212</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Evening
                                  <span className="icheck-sub-title">06:00pm - 11:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$445</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Landing New York</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Morning
                                  <span className="icheck-sub-title">05:00am - 11:59am</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$259</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Afternoon
                                  <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$468</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Evening
                                  <span className="icheck-sub-title">06:00pm - 11:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$367</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Take-off New York</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Morning
                                  <span className="icheck-sub-title">05:00am - 11:59am</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$177</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Afternoon
                                  <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$354</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Evening
                                  <span className="icheck-sub-title">06:00pm - 11:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$242</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Landing London</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Morning
                                  <span className="icheck-sub-title">05:00am - 11:59am</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$219</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Afternoon
                                  <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$268</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Evening
                                  <span className="icheck-sub-title">06:00pm - 11:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$470</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">London Airport</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">CLY: City</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$321</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">LHR: Heathrow</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$110</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">LCW: Gatwich</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$196</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">STN: Stansed</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$281</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">SEN: Southend</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$329</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">New York Airport</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">JFK: John F. Kennedy</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$287</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">LGA: LaGuardia</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$372</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">EWR: Newark Liberty</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$427</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Airlines</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">KLM Royal Dutch...</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$421</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">LOT Polish Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$117</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Wow Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$230</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Virgin Atlantic...</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$244</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Delta Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$427</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">SWISS Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$375</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Lufthansa</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$204</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">American Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$150</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox"/>
                                <span className="icheck-title">Fly Emirates</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$229</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link className="btn _tt-uc _fs-sm btn-dark btn-block btn-lg" to={"#"}>Load More Results</Link>
          </div>
          <div className="col-md-2-5 ">
            <div className="sticky-col _mob-h">
              <div className="theme-ad _mb-20">
                <Link className="theme-ad-link" to={"#"}></Link>
                <p className="theme-ad-sign">Advertisement</p>
                <img className="theme-ad-img" src="./test_assets/img/300x800.png" alt="Visual Alternative text" title="Image Title"/>
              </div>
              <div className="theme-ad">
                <Link className="theme-ad-link" to={"#"}></Link>
                <p className="theme-ad-sign">Advertisement</p>
                <img className="theme-ad-img" src="./test_assets/img/300x500.png" alt="Visual Alternative text" title="Image Title"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="theme-footer" id="mainFooter">
      <div className="container _ph-mob-0">
        <div className="row row-eq-height row-mob-full" data-gutter="60">
          <div className="col-md-3">
          <ResultContext.Consumer>
        {({ val }) => {
            console.log("dele: ",val);
            
            return <div className="">
            {val}<button className="btn btn-primary">Check beside {val}</button>
          </div>
        }}
      </ResultContext.Consumer>
            <div className="theme-footer-section theme-footer-">
              <Link className="theme-footer-brand _mb-mob-30" to={"#"}>
                <img src="/test_assets/img/logo-black.png" alt="Visual Alternative text" title="Image Title"/>
              </Link>
              <div className="theme-footer-brand-text">
                <p>Aenean ante inceptos velit facilisis habitasse ac pellentesque ac dictum ante mollis semper nullam curabitur</p>
                <p>Sagittis potenti rhoncus vitae inceptos elementum habitasse vestibulum habitant sagittis montes a nibh ante nec</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-4">
                <div className="theme-footer-section theme-footer-">
                  <h5 className="theme-footer-section-title">Travel Mate</h5>
                  <ul className="theme-footer-section-list">
                    <li>
                      <Link to={"#"}>About Travel Mate</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Mobile App</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Customer Support</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Advertising</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Jobs</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Terms of Use</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="theme-footer-section theme-footer-">
                  <h5 className="theme-footer-section-title">Explore</h5>
                  <ul className="theme-footer-section-list">
                    <li>
                      <Link to={"#"}>Countries</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Regions</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Cities</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Districs</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Airports</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Hotels</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Places of Interest</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="theme-footer-section theme-footer-">
                  <h5 className="theme-footer-section-title">Book</h5>
                  <ul className="theme-footer-section-list">
                    <li>
                      <Link to={"#"}>Apartments</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Resorts</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Villas</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Hostels</Link>
                    </li>
                    <li>
                      <Link to={"#"}>B&Bs</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Guesthouses</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Hotel Chains</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="theme-footer-section theme-footer-section-subscribe bg-grad _mt-mob-30">
              <div className="theme-footer-section-subscribe-bg" style={{backgroundImage:'url(img/footer/footer_subscribe_bg.png)'}}></div>
              <div className="theme-footer-section-subscribe-content">
                <h5 className="theme-footer-section-title">Save up to 50% off your next trip</h5>
                <p className="text-muted">Subscribe to unlock our secret deals</p>
                <form>
                  <div className="form-group">
                    <input className="form-control theme-footer-subscribe-form-control" type="email" placeholder="Type your e-mail here"/>
                  </div>
                  <button className="btn btn-primary-invert btn-shadow text-upcase theme-footer-subscribe-btn" type="submit">Get deals</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="theme-copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="theme-copyright-text">Copyright &copy; 2018
              <Link to={"#"}>Bookify</Link>. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="theme-copyright-social">
              <li>
                <Link className="fa fa-facebook" to={"#"}></Link>
              </li>
              <li>
                <Link className="fa fa-google" to={"#"}></Link>
              </li>
              <li>
                <Link className="fa fa-twitter" to={"#"}></Link>
              </li>
              <li>
                <Link className="fa fa-youtube-play" to={"#"}></Link>
              </li>
              <li>
                <Link className="fa fa-instagram" to={"#"}></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
            </React.Fragment>
        );
    }
}

export default FlightSearch;
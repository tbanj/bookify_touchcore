import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { ResultContext } from './shared/result-context';
import { findFlights } from "../service/flightService.js";
import Storage from '../service/Storage.js';

const dataItem = new Storage();
class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      serverData: [], isFetching: true, errorData: 'loading'
    }
    this.getlocalTime = this.getlocalTime.bind(this);
  }

  async getFlights() {
    // let detailReceived = this.context;
    // console.log(detailReceived.val);
    const detailReceived = dataItem.getItemsFromStorage();
    findFlights(detailReceived[0])
      .then(data => {
        if (data) {
          const sendData = data.data.body.data.itineraries;
          const awaitData = this.dataToPopulate(sendData);
          this.setState({ serverData: awaitData, isFetching: false })
        }
      }, (error) => {
        if (error.response && error.response.status === 422) {
          this.setState({ errorData: 'no data found currently, try again later', serverData: [], isFetching: false });
          toast.error(this.state.errorData);
          console.error(this.state.errorData);
        }
      })

  }

  getlocalTime = (date, time) => {
    let dateTime = new Date(`${date} ${time}`);
    let options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    let timeString = dateTime.toLocaleString('en-US', options);
    return timeString
  }

  extractFromOrigin = (origin) => {

    let publishData = [];
    let segment = origin.segments;

    for (let m = 0; m < segment.length; m++) {
      let dataSegment = {
        departure_city: segment[m].departure.airport.city_name,
        departure_date: segment[m].departure.date,
        departure_time: segment[m].departure.time,
        flight_duartion: segment[m].flight_duration,
        departure_code: segment[m].departure.airport.code,
        arrival_code: segment[m].arrival.airport.code,
        arrival_city_name: segment[m].arrival.airport.city_name,
        arrival_date: segment[m].arrival.date,
        arrival_time: segment[m].arrival.time,
        operating_airline: segment[m].operating_airline.name,
        res_book_desig_cabin_name: segment[m].cabins[1].res_book_desig_cabin_name,
        arrival_airport_time: this.getlocalTime(segment[m].arrival.date, segment[m].arrival.time),
        departure_airport_time: this.getlocalTime(segment[m].departure.date, segment[m].departure.time),
      }

      publishData.push(dataSegment);

    }

    return publishData;
  }

  dataToPopulate = (data) => {
    let updatedDatedm = [];
    for (let u = 0; u < data.length; u++) {

      let code_fair = {
        currency_code_r: data[u].pricing.provider.currency.code,
        total_fare_r: data[u].pricing.provider.total_fare,
        general_array: this.extractFromOrigin(data[u].origin_destinations[0]),
      }

      updatedDatedm.push(code_fair)
    }
    return updatedDatedm;
  }



  componentDidMount() {
    this.getFlights()
  }

  render() {
    const { serverData, isFetching, errorData } = this.state;
    // const message = this.context;
    return (
      <React.Fragment>
        <div className="theme-hero-area front">
          <div className="theme-hero-area-bg-wrap">
            <div className="theme-hero-area-bg theme-hero-area-bg-blur" style={{ backgroundImage: 'url(./test_assets/img/1500x800.png)' }}></div>
            <div className="theme-hero-area-mask theme-hero-area-mask-half"></div>
          </div>
          <div className="theme-hero-area-body" lazy-img-error="https://wakanow-images.azureedge.net/Images/New-Wireframebanner1.jpg"
            style={{ backgroundImage: 'url(/test_assets/img/logo/cover_image2.jpg)' }}
          >
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
                                <input className="theme-search-area-section-input typeahead" defaultValue="New York, United States" type="text" placeholder="Departure" data-provide="typeahead" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-fade-white theme-search-area-section-no-border">
                              <label className="theme-search-area-section-label _op-06">To</label>
                              <div className="theme-search-area-section-inner">
                                <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                                <input className="theme-search-area-section-input typeahead" defaultValue="London, United Kindom" type="text" placeholder="Arrival" data-provide="typeahead" />
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
                                <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 ">
                            <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-fade-white theme-search-area-section-no-border">
                              <label className="theme-search-area-section-label _op-06">Arrival</label>
                              <div className="theme-search-area-section-inner">
                                <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 ">
                            <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-sm theme-search-area-section-fade-white theme-search-area-section-no-border quantity-selector" data-increment="Passengers">
                              <label className="theme-search-area-section-label _op-06">Passengers</label>
                              <div className="theme-search-area-section-inner">
                                <i className="theme-search-area-section-icon lin lin-people"></i>
                                <input className="theme-search-area-section-input" defaultValue="1 Passenger" type="text" />
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
                        <input type="radio" name="flight-options" id="flight-option-1" defaultChecked />Round Trip
                  </label>
                      <label className="btn btn-primary">
                        <input type="radio" name="flight-options" id="flight-option-2" />One Way
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
                            <input className="theme-search-area-section-input typeahead" defaultValue="New York" type="text" placeholder="Departure" data-provide="typeahead" />
                          </div>
                        </div>
                        <div className="theme-search-area-section theme-search-area-section-curved">
                          <label className="theme-search-area-section-label">To</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                            <input className="theme-search-area-section-input typeahead" type="text" placeholder="Arrival" data-provide="typeahead" />
                          </div>
                        </div>
                        <div className="row" data-gutter="10">
                          <div className="col-md-6 ">
                            <div className="theme-search-area-section theme-search-area-section-curved">
                              <label className="theme-search-area-section-label">Depart</label>
                              <div className="theme-search-area-section-inner">
                                <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <div className="theme-search-area-section theme-search-area-section-curved">
                              <label className="theme-search-area-section-label">Arrival</label>
                              <div className="theme-search-area-section-inner">
                                <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-area-section theme-search-area-section-curved quantity-selector" data-increment="Passengers">
                          <label className="theme-search-area-section-label">Passengers</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-people"></i>
                            <input className="theme-search-area-section-input" defaultValue="1 Passenger" type="text" />
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
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">nonstop</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$305</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">1 stop</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$349</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
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
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Economy</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$375</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Business</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$292</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
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
                          <input id="price-slider" name="price-slider" data-min="100" data-max="500" />
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Take-off London</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Morning
                              <span className="icheck-sub-title">05:00am - 11:59am</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$466</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Afternoon
                              <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$256</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
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
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Morning
                              <span className="icheck-sub-title">05:00am - 11:59am</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$404</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Afternoon
                              <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$216</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
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
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Morning
                              <span className="icheck-sub-title">05:00am - 11:59am</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$411</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Afternoon
                              <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$386</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
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
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Morning
                              <span className="icheck-sub-title">05:00am - 11:59am</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$469</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Afternoon
                              <span className="icheck-sub-title">12:00pm - 5:59pm</span>
                                </span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$248</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
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
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">CLY: City</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$336</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">LHR: Heathrow</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$229</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">LCW: Gatwich</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$403</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">STN: Stansed</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$405</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
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
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">JFK: John F. Kennedy</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$366</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">LGA: LaGuardia</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$257</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
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
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">KLM Royal Dutch...</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$127</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">LOT Polish Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$261</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Wow Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$423</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Virgin Atlantic...</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$268</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Delta Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$425</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">SWISS Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$403</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Lufthansa</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$469</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">American Airlines</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">$319</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
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
                    <img className="theme-ad-img" src="./test_assets/img/300x500.png" alt="Visual Alternative text" title="Image Title" />
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

                  {serverData.length > 1 && isFetching === false ?
                    serverData.map((data, key) => (
                      <div key={key} className="theme-search-results-item _mb-10 theme-search-results-item-rounded theme-search-results-item-">
                        <div className="theme-search-results-item-preview">
                          <Link className="theme-search-results-item-mask-link" to="#searchResultsItem-1" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="searchResultsItem-1"></Link>
                          <div className="row" data-gutter="20">
                            <div className="col-md-10 ">
                              <div className="theme-search-results-item-flight-sections">
                                <div className="theme-search-results-item-flight-section">
                                  <div className="row row-no-gutter row-eq-height">
                                    <div className="col-md-2 ">
                                      <div className="theme-search-results-item-flight-section-airline-logo-wrap">
                                        <img className="theme-search-results-item-flight-section-airline-logo" src="./test_assets/img/351x253.png" alt="Visual Alternative text" title="Image Title" />
                                      </div>
                                    </div>
                                    <div className="col-md-10 ">
                                      <div className="theme-search-results-item-flight-section-item">
                                        <div className="row">
                                          <div className="col-md-3 ">
                                            <div className="theme-search-results-item-flight-section-meta">
                                              <p className="theme-search-results-item-flight-section-meta-time">
                                                {data.general_array[0].departure_airport_time.slice(0, -2)}
                                                <span>{data.general_array[0].departure_airport_time.slice(-2)}</span>
                                              </p>

                                              <p className="theme-search-results-item-flight-section-meta-city">{data.general_array[0].departure_city}</p>
                                              <p className="theme-search-results-item-flight-section-meta-date">{data.general_array[0].departure_date}</p>
                                            </div>
                                          </div>
                                          <div className="col-md-6 ">
                                            <div className="theme-search-results-item-flight-section-path">
                                              <div className="theme-search-results-item-flight-section-path-fly-time">
                                                <p>{data.general_array[0].flight_duration}</p>
                                              </div>
                                              <div className="theme-search-results-item-flight-section-path-line"></div>
                                              <div className="theme-search-results-item-flight-section-path-line-start">
                                                <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                                <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                                <div className="theme-search-results-item-flight-section-path-line-title">{data.general_array[0].departure_code}</div>
                                              </div>
                                              <div className="theme-search-results-item-flight-section-path-line-end">
                                                <i className="fa fa-plane theme-search-results-item-flight-section-path-icon"></i>
                                                <div className="theme-search-results-item-flight-section-path-line-dot"></div>
                                                <div className="theme-search-results-item-flight-section-path-line-title">{data.general_array[0].arrival_code}</div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-md-3 ">
                                            <div className="theme-search-results-item-flight-section-meta">
                                              <p className="theme-search-results-item-flight-section-meta-time">{data.general_array[0].arrival_airport_time.slice(0, -2)}
                                                <span>{data.general_array[0].arrival_airport_time.slice(-2)}</span>
                                              </p>
                                              <p className="theme-search-results-item-flight-section-meta-city">{data.general_array[0].arrival_city_name}</p>
                                              <p className="theme-search-results-item-flight-section-meta-date">{data.general_array[0].arrival_date}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <h5 className="theme-search-results-item-flight-section-airline-title">Operated by {data.general_array[0].operating_airline}</h5>
                                </div>
                                {/*  */}
                                {/* place code back here after working on it  */}
                                {/*  */}
                              </div>
                            </div>
                            <div className="col-md-2 ">
                              <div className="theme-search-results-item-book">
                                <div className="theme-search-results-item-price">
                                  <p className="theme-search-results-item-price-tag">{`${data.currency_code_r} ${data.total_fare_r}`}</p>
                                  {/* <p className="theme-search-results-item-price-sign">{data.general_array[1].res_book_desig_cabin_name}</p> */}
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

                    )) : <div>{`${this.state.errorData} `}<span><i className={this.state.isFetching === true ?
                      `spinner-border text-primary` : ""}></i></span></div>}

                </div>
                <Link className="btn _tt-uc _fs-sm btn-dark btn-block btn-lg" to={"#"}>Load More Results</Link>
              </div>
              <div className="col-md-2-5 ">
                <div className="sticky-col _mob-h">
                  <div className="theme-ad _mb-20">
                    <Link className="theme-ad-link" to={"#"}></Link>
                    <p className="theme-ad-sign">Advertisement</p>
                    <img className="theme-ad-img" src="./test_assets/img/300x800.png" alt="Visual Alternative text" title="Image Title" />
                  </div>
                  <div className="theme-ad">
                    <Link className="theme-ad-link" to={"#"}></Link>
                    <p className="theme-ad-sign">Advertisement</p>
                    <img className="theme-ad-img" src="./test_assets/img/300x500.png" alt="Visual Alternative text" title="Image Title" />
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

                <div className="theme-footer-section theme-footer-">
                  <Link className="theme-footer-brand _mb-mob-30" to={"#"}>
                    <img src="/test_assets/img/logo/logo7black.png" alt="Visual Alternative text" title="Image Title" />
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
                  <div className="theme-footer-section-subscribe-bg" style={{ backgroundImage: 'url(img/footer/footer_subscribe_bg.png)' }}></div>
                  <div className="theme-footer-section-subscribe-content">
                    <h5 className="theme-footer-section-title">Save up to 50% off your next trip</h5>
                    <p className="text-muted">Subscribe to unlock our secret deals</p>
                    <form>
                      <div className="form-group">
                        <input className="form-control theme-footer-subscribe-form-control" type="email" placeholder="Type your e-mail here" />
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
                <p className="theme-copyright-text">Copyright &copy; 2019
              <Link to={"#"}>mybooky</Link>. All rights reserved.
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


        {/* <div className="">
             adeleke {message.val}
          </div> */}
      </React.Fragment>
    );
  }
}

FlightSearch.contextType = ResultContext;

export default FlightSearch;
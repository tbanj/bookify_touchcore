import React, { Component } from 'react';
import { Link } from "react-router-dom";
import _ from "lodash";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { toast } from 'react-toastify';
import formData from './shared/form_data.js'
import env from "../env.js";
import { ResultContext } from './shared/result-context';
import { requestToken, getAirlineCode } from "../service/flightService.js";

import Storage from '../service/Storage.js';

import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import './landing.css';

const dataItem = new Storage();
let minDate = new Date();

minDate = `${minDate.getFullYear()}-0${minDate.getMonth() + 1}-${minDate.getDate()}`;
class Landing extends Component {
  constructor() {
    super()
    this.state = {
      data: {}, schedule_duration: 0, isLoading: false, flight_departure_date: minDate, flight_arrival_date: minDate,
      departFilterBy: 'callback', departMultiple: false, departOptions: [], departIsloading: false,
      no_of_children: "No of Children (2 - 12 yo)", no_of_infant: "No of Infants (0 - 2 yo)",
      departSelected: [], selected: [],
      no_of_adults: "No of Adults (> 12 yo)", cabin_type: 'Select Cabin Class', api_token: '', populateImage: []
    }


    this.getDetail = this.getDetail.bind(this);
    this.handleDoesFormHaveErrors = this.handleDoesFormHaveErrors.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.getAirportCode = this.getAirportCode.bind(this);
  }



  getDetail() {
    requestToken().then(data => {
      if (data) {
        this.setState({ api_token: data.body.data.api_token })
      }
    }, (error) => {
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.body.message);
      }

    });

  }



  getAirportCode() {
    let storeCode = getAirlineCode();
    let pageNumber;
    if (!JSON.parse(localStorage.getItem("airport_page"))) {
      pageNumber = 1;
    } else { pageNumber = JSON.parse(localStorage.getItem("airport_page")) }

    const pageCount = Math.ceil(storeCode.length / 4);
    setInterval(function () {
      if (pageNumber === pageCount) {
        pageNumber = 0;
      }
      pageNumber++;
      console.log('click me', pageNumber, pageCount);
      localStorage.setItem('airport_page', pageNumber)
      let airportCode = this.paginate(storeCode, pageNumber, 4);
      this.insertAirportUrl(airportCode);
    }, 3000);
    console.log('click me', pageNumber);
    localStorage.setItem('airport_page', pageNumber)
    let airportCode = this.paginate(storeCode, pageNumber, 4);
    this.insertAirportUrl(airportCode);
  }



  paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  }


  insertAirportUrl(data) {
    let populateImage = [];
    for (let i = 0; i < data.length; i++) {
      data[i]['code'] = `https://daisycon.io/images/airline/?width=600&height=413&color=ffffff&iata=${data[i]['code'].toLowerCase()}`
      populateImage.push(data[i]);

    }
    this.setState({ populateImage });
  }






  handleStartTime = (e) => {
    e.preventDefault();
    let startTimeValue = e.target.value;
    this.setState({ flight_departure_date: startTimeValue, flight_arrival_date: startTimeValue });
    startTimeValue = 0;

  }

  handleStopTime = e => {

    let stop = new Date(e.target.value);
    let start = new Date(this.state.flight_departure_date);
    let diff = Math.floor((Date.UTC(stop.getFullYear(), stop.getMonth(), stop.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / (1000 * 60 * 60 * 24));
    this.setState({ schedule_duration: diff, flight_arrival_date: e.target.value });
    diff = 0;
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => { });
  }

  handleDoesFormHaveErrors() {

    const required = ['no_of_children', 'no_of_infant', 'no_of_adults', 'cabin_type'];
    let emptyFields = 0;
    required.forEach(field => {
      if (this.state[field] === formData.cabin_class[0].val) { ++emptyFields; }
      if (this.state[field] === formData.select_adult_number[0].val) { ++emptyFields; }
      if (this.state[field] === formData.select_infant_number[0].val) { ++emptyFields; }
      if (this.state[field] === formData.select_children_number[0].val) { ++emptyFields; }

      if (this.state.departSelected.length < 1 || this.state.selected.length < 1
        || this.state.departSelected[0].code === this.state.selected[0].code) {
        ++emptyFields;
      }


    });
    if (emptyFields > 0) { return true; }
    else {
      return false;
    }
  }

  coverDate(date) {
    return new Date(date).toLocaleDateString();
  }


  handleSubmitForm() {
    if (this.handleDoesFormHaveErrors()) return;
    try {
      let storeData = [];
      const detail = {
        "header": { "cookie": this.state.api_token },
        "body": {
          "origin_destinations": [
            {
              "departure_city": this.state.departSelected[0].code,
              "destination_city": this.state.selected[0].code,
              "departure_date": this.coverDate(this.state.flight_departure_date),
              "return_date": this.state.flight_arrival_date !== this.state.flight_departure_date ? this.coverDate(this.state.flight_arrival_date) : ''
            }
          ],
          "search_param": {

            "no_of_adult": this.state.no_of_adults,
            "no_of_child": this.state.no_of_children,
            "no_of_infant": this.state.no_of_infant,
            "preferred_airline_code": "",
            "calendar": false,
            "cabin": this.state.cabin_type
          }
        }
      }
      storeData.push(detail);

      // if (detail['referral_code'].trim().length < 1) delete detail.referral_code;
      // const res = await http.post(`${env.airports_type_ahead_url}/v1/flight/search-flight`, detail);

      // use below to send data to the second page
      // let messaged = this.context;
      // messaged.onUserInput(storeData);
      dataItem.storeItem(storeData);
      this.props.history.push('/flight-search');

    } catch (error) {
      if (error.response && error.response.status === 422)
        toast.error('error encounter when fetching sample airport list');
    }
  }

  componentDidMount() {
    this.getDetail();
    this.getAirportCode();

  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() {
    let injectedProps = {}
    injectedProps.clearButton = true;

    const { filterBy, departFilterBy, flight_departure_date, flight_arrival_date,
      isLoading } = this.state;

    const filterByCallback = (option, props) => (
      option.code.toLowerCase().indexOf(props.text.toLowerCase()) !== -1 ||
      option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
    );

    const departFilterByCallback = (option, props) => (
      option.code.toLowerCase().indexOf(props.text.toLowerCase()) !== -1 ||
      option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
    );

    // departFilterBy: 'callback', departMultiple: false,  departOptions: []

    const filterByFields = ['code', 'name'];
    const departFilterByFields = ['code', 'name'];
    // let messaged = this.context;
    return (
      <React.Fragment>


        <div className="theme-hero-area theme-hero-area-primary">
          <div className="theme-hero-area-bg-wrap">
            <div className="theme-hero-area-bg ws-action" style={{ backgroundImage: 'url(/test_assets/img/logo/background_image.jpg)' }} data-parallax="true"></div>
            <div className="theme-hero-area-mask theme-hero-area-mask-half"></div>
            <div className="theme-hero-area-inner-shadow theme-hero-area-inner-shadow-light"></div>
          </div>
          <div className="theme-hero-area-body">
            <div className="_pt-250 _pb-200 _pv-mob-50">
              <div className="container">
                <div className="theme-search-area-tabs">
                  <div className="theme-search-area-tabs-header _c-w _ta-mob-c">
                    <h1 className="theme-search-area-tabs-title">Start Your Jorney</h1>
                    <p className="theme-search-area-tabs-subtitle">Compare hundreds travel websites at once</p>
                  </div>
                  <div>


                    <div id="pills-home" role="tabpanel" aria-labelledby="">



                    </div>

                  </div>
                  <div className="tabbable">
                    <ul className="nav nav-tabs nav-line nav-white nav-lg nav-mob-inline" role="tablist">
                      <li role="presentation">
                        <Link aria-controls="SearchAreaTabs-1" role="tab" data-toggle="tab" to={"#SearchAreaTabs-1"}>Hotels</Link>
                      </li>
                      <li role="presentation">
                        <Link aria-controls="SearchAreaTabs-2" role="tab" data-toggle="tab" to={"#SearchAreaTabs-2"}>Homes</Link>
                      </li>
                      <li className="active" role="presentation">
                        <Link aria-controls="SearchAreaTabs-3a" role="tab" data-toggle="tab" to={"#SearchAreaTabs-3a"}>Flights</Link>
                      </li>
                      <li role="presentation">
                        <Link aria-controls="SearchAreaTabs-4" role="tab" data-toggle="tab" to={"#SearchAreaTabs-4"}>Cars</Link>
                      </li>
                      <li role="presentation">
                        <Link aria-controls="SearchAreaTabs-5" role="tab" data-toggle="tab" to={"#SearchAreaTabs-5"}>Experiences</Link>
                      </li>
                    </ul>


                    <div className="tab-content _pt-20">
                      <div className="tab-pane " id="SearchAreaTabs-1" role={"tabpanel"}>
                        <div className="theme-search-area theme-search-area-stacked">
                          <div className="theme-search-area-form">
                            <div className="row" data-gutter="none">
                              <div className="col-md-3 ">
                                <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                  <div className="theme-search-area-section-inner">
                                    <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                                    <input className="theme-search-area-section-input typeahead" type="text" placeholder="Hotel Location" data-provide="typeahead" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 ">
                                <div className="row" data-gutter="none">
                                  <div className="col-md-6 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input className="theme-search-area-section-input datePickerStart _mob-h" default defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                        <input className="theme-search-area-section-input _desk-h mobile-picker" default defaultValue="2018-06-27" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                        <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 ">
                                <div className="row" data-gutter="none">
                                  <div className="col-md-6 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr quantity-selector" data-increment="Rooms">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-tag"></i>
                                        <input className="theme-search-area-section-input" defaultValue="1 Room" type="text" />
                                        <div className="quantity-selector-box" id="HotelSearchRooms">
                                          <div className="quantity-selector-inner">
                                            <p className="quantity-selector-title">Rooms</p>
                                            <ul className="quantity-selector-controls">
                                              <li className="quantity-selector-decrement">
                                                <Link to={""}>&#45;</Link>
                                              </li>
                                              <li className="quantity-selector-current">1</li>
                                              <li className="quantity-selector-increment">
                                                <Link to={""}>&#43;</Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr quantity-selector" data-increment="Guests">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-people"></i>
                                        <input className="theme-search-area-section-input" defaultValue="2 Guests" type="text" />
                                        <div className="quantity-selector-box" id="HotelSearchGuests">
                                          <div className="quantity-selector-inner">
                                            <p className="quantity-selector-title">Guests</p>
                                            <ul className="quantity-selector-controls">
                                              <li className="quantity-selector-decrement">
                                                <Link to={""}>&#45;</Link>
                                              </li>
                                              <li className="quantity-selector-current">1</li>
                                              <li className="quantity-selector-increment">
                                                <Link to={""}>&#43;</Link>
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
                                <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved">Search</button>
                              </div>
                            </div>
                          </div>


                          <div className="theme-search-area-options _mob-h theme-search-area-options-white theme-search-area-options-dot-primary-inverse clearfix">
                            <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                              <label className="btn btn-primary active">
                                <input type="radio" name="hotel-options" id="hotel-option-1" defaultChecked />Any
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-2" />Business
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-3" />Family
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-4" />Luxury
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-5" />Budget
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-6" />Romantic
                                  </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="SearchAreaTabs-2" role={"tabpanel"}>
                        <div className="theme-search-area theme-search-area-stacked">
                          <div className="theme-search-area-form">
                            <div className="row" data-gutter="none">
                              <div className="col-md-4 ">
                                <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                  <div className="theme-search-area-section-inner">
                                    <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                                    <input className="theme-search-area-section-input typeahead" type="text" placeholder="Apartment Location" data-provide="typeahead" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-7 ">
                                <div className="row" data-gutter="none">
                                  <div className="col-md-4 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                        <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                        <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr quantity-selector" data-increment="Guests">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-people"></i>
                                        <input className="theme-search-area-section-input" defaultValue="2 Guests" type="text" />
                                        <div className="quantity-selector-box" id="RoomSearchGuests">
                                          <div className="quantity-selector-inner">
                                            <p className="quantity-selector-title">Guests</p>
                                            <ul className="quantity-selector-controls">
                                              <li className="quantity-selector-decrement">
                                                <Link to={""}>&#45;</Link>
                                              </li>
                                              <li className="quantity-selector-current">1</li>
                                              <li className="quantity-selector-increment">
                                                <Link to={""}>&#43;</Link>
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
                                <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved">Search</button>
                              </div>
                            </div>
                          </div>
                          <div className="theme-search-area-options _mob-h theme-search-area-options-white theme-search-area-options-dot-primary-inverse clearfix">
                            <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                              <label className="btn btn-primary active">
                                <input type="radio" name="room-options" id="room-option-1" defaultChecked />Any
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="room-options" id="room-option-2" />Entire Home
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="room-options" id="room-option-3" />Private Room
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="room-options" id="room-option-4" />Shared Space
                                  </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane active" id="SearchAreaTabs-3a" role={"tabpanel"}>
                        <div className="">
                          <div className="">
                            <form className="row " >
                              <div className="container-fluid" >
                                <div className="col-md-6 ">
                                  <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                    <div className="theme-search-area-section-inner">
                                      {/* <i className="theme-search-area-section-icon lin lin-location-pin"></i> */}
                                      <AsyncTypeahead className="my-4" id="depart_async"
                                        // departFilterBy: 'callback', departMultiple: false,  departOptions: []
                                        clearButton={false}
                                        {...this.state} // passing state to component
                                        bsSize={'large'}
                                        minLength={3}
                                        filterBy={departFilterBy === 'callback' ? departFilterByCallback : departFilterByFields}
                                        labelKey="name"
                                        renderMenuItemChildren={(option) => (
                                          <div>
                                            {option.name}
                                            <div>
                                              <small>{option.code}</small>
                                            </div>
                                          </div>
                                        )}

                                        onSearch={query => {
                                          this.setState({ isLoading: true });
                                          fetch(`${env.airports_type_ahead_url}/v1/plugins/airports-type-ahead/${query}`)
                                            .then(resp => resp.json())
                                            .then(({ body }) => {
                                              const options = body.data;
                                              return { options };
                                            })
                                            .then(({ options }) => {
                                              this.setState({
                                                isLoading: false,
                                                options: options
                                              });
                                            }
                                              , (error) => {
                                                if (error.response && error.response.status === 422) {
                                                  toast.error(error.response.data.body.message);
                                                  // console.error(error.response.body.message);
                                                }
                                              }
                                            );
                                        }}
                                        options={this.state.options}
                                        onChange={(selected) => {

                                          this.setState({ departSelected: selected });
                                        }}

                                        placeholder="Departure"
                                        selected={this.state.departSelected}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 ">
                                  <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                    <div className="theme-search-area-section-inner">
                                      {/* <i className="theme-search-area-section-icon lin lin-location-pin"></i> */}
                                      {/* <input className="theme-search-area-section-input typeahead" type="text" placeholder="Arrival" data-provide="typeahead" />
                                       */}

                                      <AsyncTypeahead className="my-4" id="arrival_async" isLoading={isLoading}
                                        // {...injectedProps}
                                        // {...this.state}
                                        bsSize={'large'}
                                        minLength={3}
                                        filterBy={filterBy === 'callback' ? filterByCallback : filterByFields}
                                        labelKey="name"
                                        renderMenuItemChildren={(option) => (
                                          <div>
                                            {option.name}
                                            <div>
                                              <small>{option.code}</small>
                                            </div>
                                          </div>
                                        )}

                                        onSearch={query => {
                                          this.setState({ isLoading: true });
                                          fetch(`${env.airports_type_ahead_url}/v1/plugins/airports-type-ahead/${query}`)
                                            .then(resp => resp.json())
                                            .then(({ body }) => {
                                              const options = body.data;
                                              return { options };
                                            })
                                            .then(({ options }) => {
                                              this.setState({
                                                isLoading: false,
                                                options
                                              });
                                            },
                                              (error) => {
                                                if (error.response && error.response.status === 422) {
                                                  toast.error(error.response.data.body.message);
                                                  // console.error(error.response.body.message);
                                                }
                                              });
                                        }}
                                        options={this.state.options}
                                        onChange={(selected) => {
                                          this.setState({ selected: selected });
                                        }}
                                        selected={this.state.selected}
                                        placeholder="Arrival"

                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="container-fluid " data-gutter="none">

                                <div className="  col-md-3 form-group">
                                  <label htmlFor="depart_date" className="text-white">Departure Date</label>
                                  <div className="">
                                    {/* <i className=" iconColor  theme-search-area-section-icon lin lin-calendar"></i> */}

                                    <input type="date" min={minDate} value={flight_departure_date}
                                      onChange={this.handleStartTime} name="depart_date"
                                      className=" addHeight form-control fa fa-calendar-check-o" ></input>
                                  </div>
                                </div>

                                <div className=" col-md-3 form-group">
                                  <label htmlFor="arrival_date" className="text-white">Arrival Date</label>
                                  <div className="">
                                    {/* <i className=" iconColor theme-search-area-section-icon lin lin-calendar"></i> */}

                                    <input className="form-control addHeight fa fa-calendar-check-o" value={flight_arrival_date} onChange={this.handleStopTime} type="date"
                                      min={flight_departure_date} />
                                  </div>
                                </div>


                                <div className="col-md-3 form-group " style={{ marginTop: '2%' }}>
                                  <select className="form-control addHeight" onChange={this.handleOnChange} name="cabin_type">
                                    {formData.cabin_class.map((data, key) => (<option value={data.val} key={key} >{data.val}</option>))}

                                  </select>
                                </div>
                              </div>

                              <div className="container-fluid form-group" style={{ marginTop: '4%' }} data-gutter="none">
                                <div className="col-md-3  form-group">
                                  <select className="form-control addHeight " onChange={this.handleOnChange} name="no_of_adults">
                                    {formData.select_adult_number.map((data, key) => (<option value={data.val} key={key} >{data.val}</option>))}

                                  </select>
                                </div>
                                <div className="col-md-3  form-group">
                                  <select className="form-control addHeight " onChange={this.handleOnChange} name="no_of_children">
                                    {formData.select_children_number.map((data, key) => (<option value={data.val} key={key} >{data.val}</option>))}

                                  </select>
                                </div>

                                <div className="col-md-3 form-group">
                                  <select className="form-control addHeight" onChange={this.handleOnChange} name="no_of_infant">
                                    {formData.select_infant_number.map((data, key) => (<option value={data.val} key={key} >{data.val}</option>))}

                                  </select>
                                </div>
                              </div>
                              <div className="container-fluid form-group">
                                <div className="col-md-2 ">
                                  <button type="button" disabled={this.handleDoesFormHaveErrors()} onClick={this.handleSubmitForm} className="submitButton">Search</button>
                                </div>
                              </div>
                              {/* <ResultContext.Consumer>
                                {({ val, onUserInput }) => (
                                  
                                )}
                              </ResultContext.Consumer> */}
                              {/* <div className="form-group">
                                <input type="text" value={messaged.val} placeholder="input a trial text"
                                  onChange={e => { messaged.onUserInput(e.target.value) }} />
                              </div> */}
                            </form>
                          </div>
                          <div className="theme-search-area-options theme-search-area-options-white theme-search-area-options-dot-primary-inverse clearfix">
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
                      </div>
                      <div className="tab-pane" id="SearchAreaTabs-4" role={"tabpanel"}>
                        <div className="theme-search-area theme-search-area-stacked">
                          <div className="theme-search-area-form">
                            <div className="row" data-gutter="none">
                              <div className="col-md-7 ">
                                <div className="row" data-gutter="none">
                                  <div className="col-md-6 ">
                                    <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                                        <input className="theme-search-area-section-input typeahead" type="text" placeholder="Pick up location" data-provide="typeahead" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                                        <input className="theme-search-area-section-input typeahead" type="text" placeholder="Drop off location" data-provide="typeahead" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2 ">
                                <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                  <div className="theme-search-area-section-inner">
                                    <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                    <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                    <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2 ">
                                <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                  <div className="theme-search-area-section-inner">
                                    <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                    <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                    <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-1 ">
                                <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved">Search</button>
                              </div>
                            </div>
                          </div>
                          <div className="theme-search-area-options _mob-h theme-search-area-options-white theme-search-area-options-dot-primary-inverse clearfix">
                            <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                              <label className="btn btn-primary active">
                                <input type="radio" name="car-options" id="car-option-1" defaultChecked />Any
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-2" />Sedan
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-3" />Hatchback
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-4" />SUV
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-5" />Crossover
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-6" />Coupe
                                  </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="SearchAreaTabs-5" role={"tabpanel"}>
                        <div className="theme-search-area theme-search-area-stacked">
                          <div className="theme-search-area-form">
                            <div className="row" data-gutter="none">
                              <div className="col-md-4 ">
                                <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                  <div className="theme-search-area-section-inner">
                                    <i className="theme-search-area-section-icon lin lin-location-pin"></i>
                                    <input className="theme-search-area-section-input typeahead" type="text" placeholder="Destination" data-provide="typeahead" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-7 ">
                                <div className="row" data-gutter="none">
                                  <div className="col-md-4 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                        <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                        <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 ">
                                    <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-no-border theme-search-area-section-mr quantity-selector" data-increment="Guests">
                                      <div className="theme-search-area-section-inner">
                                        <i className="theme-search-area-section-icon lin lin-people"></i>
                                        <input className="theme-search-area-section-input" defaultValue="2 Guests" type="text" />
                                        <div className="quantity-selector-box" id="ExpSearchGuests">
                                          <div className="quantity-selector-inner">
                                            <p className="quantity-selector-title">Guests</p>
                                            <ul className="quantity-selector-controls">
                                              <li className="quantity-selector-decrement">
                                                <Link to={""}>&#45;</Link>
                                              </li>
                                              <li className="quantity-selector-current">1</li>
                                              <li className="quantity-selector-increment">
                                                <Link to={""}>&#43;</Link>
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
                                <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved">Search</button>
                              </div>
                            </div>
                          </div>
                          <div className="theme-search-area-options _mob-h theme-search-area-options-white theme-search-area-options-dot-primary-inverse clearfix">
                            <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                              <label className="btn btn-primary active">
                                <input type="radio" name="exp-options" id="exp-option-1" defaultChecked />Any
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="exp-options" id="exp-option-2" />Experiences
                                  </label>
                              <label className="btn btn-primary">
                                <input type="radio" name="exp-options" id="exp-option-3" />Immersions
                                  </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" data-gutter="0">
          {this.state.populateImage.map((data, key) => (
            <div key={key} className="col-md-3 ">
              <div className="banner banner-">
                <img className="banner-img" src={data % 2 === 0 ? './test_assets/img/600x413.png' :
                  data.code} alt="visual Alternative text" title="Image Title" />
                <a className="banner-link" href={`${data.url}`} dangerouslySetInnerHTML={{ __html: '' }} />

              </div>
            </div>
          ))}
        </div>
        <div className="theme-hero-area">
          <div className="theme-hero-area-bg-wrap">
            <div className="theme-hero-area-bg-pattern theme-hero-area-bg-pattern-ultra-light" style={{ backgroundImage: 'url(/test_assets/img/patterns/travel/2.png)' }}></div>
            <div className="theme-hero-area-grad-mask"></div>
            <div className="theme-hero-area-inner-shadow theme-hero-area-inner-shadow-light"></div>
          </div>
          <div className="theme-hero-area-body">
            <div className="theme-page-section theme-page-section-xxl">
              <div className="container">
                <div className="theme-page-section-header theme-page-section-header-white">
                  <h5 className="theme-page-section-title">Cities to Travel</h5>
                  <p className="theme-page-section-subtitle">The most searched cities in March</p>
                </div>
                <div className="theme-inline-slider row" data-gutter="10">
                  <div className="owl-carousel owl-carousel-nav-white" data-items="5" data-loop="true" data-nav="true">
                    <div className="theme-inline-slider-item">
                      <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                        <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/400x500.png)' }}></div>
                        <div className="banner-mask"></div>
                        <Link className="banner-link" to={""}></Link>
                        <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                          <h5 className="banner-title _fs _fw-b">Bangkok</h5>
                          <p className="banner-subtitle _fw-n _mt-5">Amet malesuada placerat</p>
                        </div>
                      </div>
                    </div>
                    <div className="theme-inline-slider-item">
                      <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                        <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/400x500.png)' }}></div>
                        <div className="banner-mask"></div>
                        <Link className="banner-link" to={""}></Link>
                        <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                          <h5 className="banner-title _fs _fw-b">San Francisco</h5>
                          <p className="banner-subtitle _fw-n _mt-5">Vehicula volutpat porta</p>
                        </div>
                      </div>
                    </div>
                    <div className="theme-inline-slider-item">
                      <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                        <div className="banner-bg" style={{ backgroundImage: "url(.//test_assets/img/400x500.png)" }}></div>
                        <div className="banner-mask"></div>
                        <Link className="banner-link" to={""}></Link>
                        <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                          <h5 className="banner-title _fs _fw-b">Paris</h5>
                          <p className="banner-subtitle _fw-n _mt-5">Commodo mattis id</p>
                        </div>
                      </div>
                    </div>
                    <div className="theme-inline-slider-item">
                      <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                        <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/400x500.png)' }}></div>
                        <div className="banner-mask"></div>
                        <Link className="banner-link" to={""}></Link>
                        <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                          <h5 className="banner-title _fs _fw-b">London</h5>
                          <p className="banner-subtitle _fw-n _mt-5">Adipiscing metus quis</p>
                        </div>
                      </div>
                    </div>
                    <div className="theme-inline-slider-item">
                      <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                        <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/400x500.png)' }}></div>
                        <div className="banner-mask"></div>
                        <Link className="banner-link" to={""}></Link>
                        <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                          <h5 className="banner-title _fs _fw-b">New York</h5>
                          <p className="banner-subtitle _fw-n _mt-5">Donec nam placerat</p>
                        </div>
                      </div>
                    </div>
                    <div className="theme-inline-slider-item">
                      <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                        <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/400x500.png)' }}></div>
                        <div className="banner-mask"></div>
                        <Link className="banner-link" to={""}></Link>
                        <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                          <h5 className="banner-title _fs _fw-b">Dubai</h5>
                          <p className="banner-subtitle _fw-n _mt-5">Curabitur habitasse porttitor</p>
                        </div>
                      </div>
                    </div>
                    <div className="theme-inline-slider-item">
                      <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                        <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/400x500.png)' }}></div>
                        <div className="banner-mask"></div>
                        <Link className="banner-link" to={""}></Link>
                        <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                          <h5 className="banner-title _fs _fw-b">Tokyo</h5>
                          <p className="banner-subtitle _fw-n _mt-5">Feugiat lobortis tortor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="theme-page-section theme-page-section-xxl">
          <div className="container">
            <div className="theme-page-section-header">
              <h5 className="theme-page-section-title">Top Destinations</h5>
              <p className="theme-page-section-subtitle">The most searched countries in March</p>
            </div>
            <div className="row row-col-gap" data-gutter="10">
              <div className="col-md-4 ">
                <div className="banner _h-40vh _br-3 banner-animate banner-animate-mask-in banner-animate-very-slow banner-animate-zoom-in">
                  <div className="banner-bg" style={{ backgroundimage: 'url(.//test_assets/img/550x360.png)' }}></div>
                  <div className="banner-mask"></div>
                  <Link className="banner-link" to={""}></Link>
                  <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                    <h5 className="banner-title">India</h5>
                    <p className="banner-subtitle">Incredeble !india</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
                <div className="banner _h-40vh _br-3 banner-animate banner-animate-mask-in banner-animate-very-slow banner-animate-zoom-in">
                  <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/860x360.png)' }}></div>
                  <div className="banner-mask"></div>
                  <Link className="banner-link" to={""}></Link>
                  <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                    <h5 className="banner-title">China</h5>
                    <p className="banner-subtitle">China like never before</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="banner _h-33vh _br-3 banner-animate banner-animate-mask-in banner-animate-very-slow banner-animate-zoom-in">
                  <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/800x800.png)' }}></div>
                  <div className="banner-mask"></div>
                  <Link className="banner-link" to={""}></Link>
                  <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                    <h5 className="banner-title">Morocco</h5>
                    <p className="banner-subtitle">Much mor</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="banner _h-33vh _br-3 banner-animate banner-animate-mask-in banner-animate-very-slow banner-animate-zoom-in">
                  <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/800x800.png)' }}></div>
                  <div className="banner-mask"></div>
                  <Link className="banner-link" to={""}></Link>
                  <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                    <h5 className="banner-title">Canada</h5>
                    <p className="banner-subtitle">Keep exploring</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="banner _h-33vh _br-3 banner-animate banner-animate-mask-in banner-animate-very-slow banner-animate-zoom-in">
                  <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/400x360.png)' }}></div>
                  <div className="banner-mask"></div>
                  <Link className="banner-link" to={""}></Link>
                  <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                    <h5 className="banner-title">Portugal</h5>
                    <p className="banner-subtitle">Europe's west coast</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="banner _h-33vh _br-3 banner-animate banner-animate-mask-in banner-animate-very-slow banner-animate-zoom-in">
                  <div className="banner-bg" style={{ backgroundImage: 'url(.//test_assets/img/400x360.png)' }}></div>
                  <div className="banner-mask"></div>
                  <Link className="banner-link" to={""}></Link>
                  <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                    <h5 className="banner-title">Malasia</h5>
                    <p className="banner-subtitle">Truly asia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="theme-hero-area">
          <div className="theme-hero-area-bg-wrap">
            <div className="theme-hero-area-bg" style={{ backgroundImage: 'url(.//test_assets/img/1500x800.png)' }}></div>
            <div className="theme-hero-area-inner-shadow theme-hero-area-inner-shadow-light"></div>
          </div>
          <div className="theme-hero-area-body">
            <div className="container">
              <div className="theme-page-section _p-0">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="theme-mobile-app">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="theme-mobile-app-section">
                            <div className="theme-mobile-app-body">
                              <div className="theme-mobile-app-header">
                                <h2 className="theme-mobile-app-title">Download our app</h2>
                                <p className="theme-mobile-app-subtitle">Book and manage your trips on the go. Be notified of our hot deals and offers.</p>
                              </div>
                              <ul className="theme-mobile-app-btn-list">
                                <li>
                                  <Link className="btn btn-dark theme-mobile-app-btn" to={""}>
                                    <i className="theme-mobile-app-logo">
                                      <img src="/test_assets/img/brands/apple.png" alt="visual Alternative text" title="Image Title" />
                                    </i>
                                    <span>Download on
                                          <br />
                                      <span>App Store</span>
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="btn btn-dark theme-mobile-app-btn" to={""}>
                                    <i className="theme-mobile-app-logo">
                                      <img src="/test_assets/img/brands/play-market.png" alt="visual Alternative text" title="Image Title" />
                                    </i>
                                    <span>Download on
                                          <br />
                                      <span>Play Market</span>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="theme-mobile-app-section"></div>
                        </div>
                      </div>
                    </div>
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
                  <Link className="theme-footer-brand _mb-mob-30" to={""}>
                    <img src="/test_assets/img/logo/logo7black.png" alt="visual Alternative text" title="Image Title" />
                  </Link>
                  <div className="theme-footer-brand-text">
                    <p>Eget est blandit pulvinar morbi ligula vel dignissim inceptos dignissim eleifend tortor tempus dictumst tincidunt</p>
                    <p>Neque eu integer venenatis fames ultricies pretium mauris maecenas interdum pharetra sodales congue a felis</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row">
                  <div className="col-md-4">
                    <div className="theme-footer-section theme-footer-">
                      <h5 className="theme-footer-section-title">Mybooky Travel</h5>
                      <ul className="theme-footer-section-list">
                        <li>
                          <Link to={""}>About Mybooky Travel</Link>
                        </li>
                        <li>
                          <Link to={""}>Mobile App</Link>
                        </li>
                        <li>
                          <Link to={""}>Customer Support</Link>
                        </li>
                        <li>
                          <Link to={""}>Advertising</Link>
                        </li>
                        <li>
                          <Link to={""}>Jobs</Link>
                        </li>
                        <li>
                          <Link to={""}>Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to={""}>Terms of Use</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="theme-footer-section theme-footer-">
                      <h5 className="theme-footer-section-title">Explore</h5>
                      <ul className="theme-footer-section-list">
                        <li>
                          <Link to={""}>Countries</Link>
                        </li>
                        <li>
                          <Link to={""}>Regions</Link>
                        </li>
                        <li>
                          <Link to={""}>Cities</Link>
                        </li>
                        <li>
                          <Link to={""}>Districs</Link>
                        </li>
                        <li>
                          <Link to={""}>Airports</Link>
                        </li>
                        <li>
                          <Link to={""}>Hotels</Link>
                        </li>
                        <li>
                          <Link to={""}>Places of Interest</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="theme-footer-section theme-footer-">
                      <h5 className="theme-footer-section-title">Book</h5>
                      <ul className="theme-footer-section-list">
                        <li>
                          <Link to={""}>Apartments</Link>
                        </li>
                        <li>
                          <Link to={""}>Resorts</Link>
                        </li>
                        <li>
                          <Link to={""}>Villas</Link>
                        </li>
                        <li>
                          <Link to={""}>Hostels</Link>
                        </li>
                        <li>
                          <Link to={""}>B&Bs</Link>
                        </li>
                        <li>
                          <Link to={""}>Guesthouses</Link>
                        </li>
                        <li>
                          <Link to={""}>Hotel Chains</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="theme-footer-section theme-footer-section-subscribe bg-grad _mt-mob-30">
                  <div className="theme-footer-section-subscribe-bg" style={{ backgroundImage: 'url(/test_assets/img/footer/footer_subscribe_bg.png)' }}></div>
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
                      <Link to={""}>mybooky</Link>. All rights reserved.
                    </p>
              </div>
              <div className="col-md-6">
                <ul className="theme-copyright-social">
                  <li>
                    <Link className="fa fa-facebook" to={""}></Link>
                  </li>
                  <li>
                    <Link className="fa fa-google" to={""}></Link>
                  </li>
                  <li>
                    <Link className="fa fa-twitter" to={""}></Link>
                  </li>
                  <li>
                    <Link className="fa fa-youtube-play" to={""}></Link>
                  </li>
                  <li>
                    <Link className="fa fa-instagram" to={""}></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* <ResultContext.Consumer>
          {({ val, onUserInput }) => (
            <div className="form-group">
              <input type="text" value={val} placeholder="input a trial text" onChange={e => { onUserInput(e.target.value) }} />
            </div>
          )}
        </ResultContext.Consumer> */}


      </React.Fragment>
    );
  }
}

Landing.contextType = ResultContext;
export default Landing;
import React, { Component } from 'react'
// const {AsyncTypeahead} = ReactBootstrapTypeahead;
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
class Testting extends Component {



    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            filterBy: 'callback',
            multiple: false,
            options: [],
            showHome: 'show',
            selectedUsers: []
        }

    }


    render() {
        const { showHome } = this.state;
        console.log(showHome);

        const { filterBy } = this.state;
        const filterByCallback = (option, props) => (
            option.code.toLowerCase().indexOf(props.text.toLowerCase()) !== -1 ||
            option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
        );

        const filterByFields = ['code', 'name'];

        return (
            <div>

                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a onClick={this.handleHome} className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.handleHomeHide} className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.handleHomeHide} className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane  active`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        Home

                        <AsyncTypeahead
                            {...this.state}
                            minLength={3}
                            filterBy={filterBy === 'callback' ? filterByCallback : filterByFields}
                            labelKey="name"
                            renderMenuItemChildren={(option) => (
                                <div>
                                    {option.name}
                                    <div>
                                        <small>Capital: {option.code}</small>
                                    </div>
                                </div>
                            )}

                            onSearch={query => {
                                this.setState({ isLoading: true });
                                fetch(`http://www.ije-api.tcore.xyz/v1/plugins/airports-type-ahead/${query}`)
                                    .then(resp => resp.json())
                                    .then(({ body }) => {
                                        console.log(body.data);
                                        const options = body.data;
                                        return { options };
                                    })
                                    .then(({ options }) => {
                                        this.setState({
                                            isLoading: false,
                                            options
                                        });
                                    });
                            }}
                            options={this.state.options}

                            placeholder="Search for users"

                        />

                    </div>

                </div>



            </div>
        );
    }
}

export default Testting;



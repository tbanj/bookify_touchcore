
import http from './httpService.js';
import env from '../env.js';

export function requestToken() {
    const userDetail = {
        "header": {
            "cookie": ""
        },
        "body": {
            "email": "customer@travelportal.com",
            "password": "customer"
        }
    };
    return http.post(`${env.airports_type_ahead_url}/v1/auth/login`, userDetail).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response.data
    });
}


export function findFlights(detail) {
    console.log(detail)
    return http.post(`${env.airports_type_ahead_url}/v1/flight/search-flight`, detail).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response;
    });

}




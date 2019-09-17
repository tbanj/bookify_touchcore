
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


export function getAirlineCode() {
    return  [{ id: 1, url: 'https://www.egyptair.com', code: 'MS' }, { id: 2, url: 'https://www.aircanada.com', code: 'AC' },
    { id: 3, url: 'https://www.aircanada.com', code: 'AI' }, { id: 4, url: 'https://www.britishairways.com', code: 'BA' },
    { id: 5, url: 'https://www.qatarairways.com', code: 'QR' }, { id: 6, url: 'https://www.etihad.com', code: 'EY' },
    { id: 7, url: 'https://www.flysaa.com', code: 'SA' }, { id: 8, url: 'https://www.delta.com', code: 'DL' },
    { id: 9, url: 'https://www.aa.com', code: 'AA' }, { id: 10, url: 'https://www.virginatlantic.com', code: 'VS' },
    { id: 11, url: 'https://www.ethiopianairlines.com', code: 'ET' }, { id: 12, url: 'https://www.kenya-airways.com', code: 'KQ' }];
}





import http from './httpService.js';
import env from '../env.js';

export function axiosTest() {
    return http.get('http://localhost:3000/data/airport_typehead.json').then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response.data
    });
}


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

// export function findFlights(detail) {
//     console.log(detail)
//     fetch(`${env.airports_type_ahead_url}/v1/flight/search-flight`, detail)
//         .then(resp => { return resp })

// }

export function findFlights(detail) {
    console.log(detail)
    return http.post(`${env.airports_type_ahead_url}/v1/flight/search-flight`, detail).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response;
    });

}

function wale() {
    let d = 1000;
    let count = 0;
    for (let index = 0; index < d; index++) {
        count += index;
    }
    return count;
}


export const p1 = new Promise((resolve, reject) => {
    resolve(wale());
});


export const checkData = p1.then(value => {
    return value;
}, reason => {
    console.error(reason); // Error!
});



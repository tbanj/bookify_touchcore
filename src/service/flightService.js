
import http from './httpService.js';


export function axiosTest() {
    return http.get('http://localhost:3000/data/airport_typehead.json').then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response.data
    })
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

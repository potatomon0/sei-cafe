//ajax HTTP request: try catch async await
//SPA communicate via AJAX
import * as usersAPI from './users-api'
// import {getToken} from './users-service'


export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    // console.log('1')
    const token = await usersAPI.signUp(userData)
    // console.log('2')
    // Baby step by returning whatever is sent back by the server
    console.log(token)
    //Persist the 'token'
    localStorage.setItem('token', token)//create a key value pair object in local storage
    //this can be checked in developer tool --> Application --> LocalStorage
    return getUser()
}

// Retrieve the token from localStorage.
// If there isn't a token, set userto null.
// If there's an expired token, remove it from localStorage and set userto null.
// If the token hasn't expired, extract the userobject from the payload use set the userstate to that object.
export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null; //if no token, the function is over
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));// index 1 [1] is the payload
    //atob is the decoder for the token
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {//convert time to ms
        // Token has expired - remove it from localStorage
        localStorage.removeItem('token');
        return null;
    }
    return token;
}//this function determine whether there is a valid token

export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
    //check if token is valid with getToken then if truthy parse/decoded payload
}

export function logOut() {
    localStorage.removeItem('token')
}
export async function login(credentials) {//we need async to communicate with our backend
    console.log(credentials)
    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token)//setter function, getter function
    return getUser()
}

export async function checkToken() {
    // alert('clicked')
    // Just so that you don't forget how to use .then

    return usersAPI.checkToken().then((dateStr) => new Date(dateStr) )
    // checkToken returns a string, but let's
    // make it a Date object for more flexibility
}
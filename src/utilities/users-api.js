// users-api.js
import axios from 'axios'
// This is the base path of the Express route we'll define
const BASE_URL = '/api/users'; //"http://localhost:3001/api/users"

export async function signUp(userData) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    //   const res = await fetch(BASE_URL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     // Fetch requires data payloads to be stringified
    //     // and assigned to a body property on the options object
    //     body: JSON.stringify(userData)
    //   });
    const res = await axios.post(BASE_URL,userData,{
        headers:{
            'Content-Type':'application/json'
        }
      })
    // console.log(res)
    // Check if request was successful
    if (res.status===200) {//if(res.ok) == if res status code == 200, res.ok is not axios function
        // res.json() will resolve to the JWT
        // return res.json(); res.json() is not axios
        console.log(res.data)
        return res.data
    } else {
        throw new Error('Invalid Sign Up');
    }
}

export async function login(userData){
    const res = await axios.post(BASE_)
}
//ajax HTTP request: try catch async await
//SPA communicate via AJAX
import * as usersAPI from './users-api'

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    // console.log('1')
    const token = await usersAPI.signUp(userData)
    // console.log('2')
    // Baby step by returning whatever is sent back by the server
    return token
}

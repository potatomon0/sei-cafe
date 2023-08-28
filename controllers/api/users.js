// Add the user to the database.
// Create the JWT. We'll include a userproperty in the JWT's payload containing the user's document data.
// Send the JWT to the client using res.json()
const User = require('../../models/User')//get schema
const jwt = require('jsonwebtoken')

const create = async (req, res) => {
    // res.json({
        // console.log(req.body)
    //     user:{
    //         name:req.body.name,
    //         email: req.body.email
    //     }
    // })
    try {
        const user = await User.create(req.body)//use user model to create a new entry with the data in req.body
        console.log(user)
        //.create() is a mongoose command to create data
        const token = createJWT(user) //create a token with the function createJWT using user as the payload
        //responding with out JWT
        console.log(token)
        res.json(token)
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(err);
    }
}
function createJWT(user) {
    return jwt.sign(
        { user },//user object as payload
        process.env.SECRET,//our signature (SECRET) which is located in .env
        { expiresIn: '24h' }//this jwt expire in 24h
    )

}


module.exports = { create, }
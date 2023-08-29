// Add the user to the database.
// Create the JWT. We'll include a userproperty in the JWT's payload containing the user's document data.
// Send the JWT to the client using res.json()
const User = require('../../models/User')//get schema
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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

const login =async(req,res)=>{
    try{
        //Find the user by their email with find() (return multiple if duplicate) or findOne() (return first one that is found)
        const user =await User.findOne({email:req.body.email})
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch){
            throw new Error()
        }
        res.status(200).json(createJWT(user))
        
    }catch(err){
        res.status(400).json({msg: err.message, reason: 'Bad Credentials'}) //return error in json object containing msg and reason
    }
}

function createJWT(user) {
    return jwt.sign(
        { user },//user object as payload
        process.env.SECRET,//our signature (SECRET) which is located in .env
        { expiresIn: '24h' }//this jwt expire in 24h
    )

}

function checkToken(req,res){
    //req.user will always be there for you when a token is sent
    console.log('req.user',req.user)
    res.json(req.exp)
}

module.exports = { create, login, checkToken}
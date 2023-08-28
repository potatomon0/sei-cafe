// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const SALT_ROUNDS = 6

// const userSchema = new Schema({
//     name: { type: String, required: true },
//     email: {
//         type: String,
//         unique: true,//Although technically not a validator, unique: truecreates a unique index in the database which will trigger an error if violated.
//         trim: true,  //This transform causes Mongoose to trim spaces before and after the string before saving.
//         lowercase: true,//This transform causes Mongoose to convert the string to lowercase before saving.
//         required: true
//     },
//     password: {
//         type: String,
//         trim: true,
//         minLength: 3,
//         required: true
//     }
// }, {
//     timestamps: true,//create a timestamp to when the data was created
//     toJSON: {
//         transform: function (doc, ret) {
//             //when we create a use, we don't want to return the pw back to user.
//             delete ret.password;
//             return ret;
//         }
//     }
// });
// //we never want to store pw as plain text therefore we hash the pw anytime it has changed and store the hash instead
// //hashing is a one way process making it impossible to revert back to the clear text pw
// //we verify the user's login pw by hashing it and comparing the two hashes
// //pre-save hook is a mongoose middleware that hash the password anytime the password has changed
// userSchema.pre('save', async function(next) {
//     // 'this' is the user doc
//     if (!this.isModified('password')) return next();
//     // update the password with the computed hash
//     this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
//     //bcrypt is a library we use to hash pw
//     //SALT_ROUNDS is the method we use to hash the pw
//     return next();
//   });

// module.exports = mongoose.model('User', userSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Add the bcrypt library
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;  // 6 is a reasonable value

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            minLength: 3,
            required: true,
        },
    },
    {
        timestamps: true,
        // Even though it's hashed - don't serialize the password
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password;
                return ret;
            },
        },
    }
);

userSchema.pre("save", async function (next) {
    // 'this' is the user doc
    if (!this.isModified("password")) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

module.exports = mongoose.model("User", userSchema);
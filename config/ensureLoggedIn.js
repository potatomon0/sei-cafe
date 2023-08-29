//middleware to protect server-side routes
//make sure request is coming from a logged in user

module.exports = function (req, res, next) {
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay
    next();
};

//another way to ensure the cookie isn't saved after logout
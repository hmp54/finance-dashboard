const GoogleStrategy = require("passport-google-oauth20").Strategy; 
const passport = require("passport"); 

passport.use(
    new GoogleStrategy();
)
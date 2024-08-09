const { ExtractJwt, Strategy } = require('passport-jwt');
const passport = require("passport");
const dbConnect = require("../config/dBConfig")

const client = dbConnect();

const opts = {
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter("token"),
    secretOrKey: "secret",
};

passport.use(
    new Strategy(opts, async (payload, done) => {
        try {
            client.query('SELECT * FROM users WHERE uid = $1 ', [payload.id], (err, results) => {
                if (err) {
                    throw err
                }
                if (results.rows[0].role=="admin") return done(null, results.rows[0]);
            })
            
        } catch (error) {
            return done(error);
        }
    })
);


const passport = require('passport');

module.exports = () => {
    passport.serializeUser((user, done) => {
        return done(null,user.id);
    });
    
    passport.deserializeUser( async(id, done) => {
        try {
            const user = await db.User.findOne({
                where : { id },
            });
            return done(null, user);  //req.user 저장
        } catch (e) {
            console.error(e);
            return done(e);
        }
    })
}
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');


// done(서버쪽에러나면 1을 넣어줌, 두번째 인수는 성공했을 때, 로직상 에러 났을 떄)
module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'password'
    }, async(userId, password, done) => {
        try {
            const user = await db.User.findOne({ where : { userId }});
            if (!user) {
                return done(null, false, { reason: '존재하지 않는 사용자입니다!'});
            }
            const result = await bcrypt.compare(password, user.password); // 프론트 패스워드 , 디비에 저장된 패스워드 비교
            if (result){
                return done(null, user);
            }
            return done( null, false, {reson: '비밀번호가 틀립니다.'});
        } catch (e) {
            console.error(e);
            return done(e);
        }
    }));
}
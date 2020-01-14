const express = require('express');
const router = express.Router();
const db =require('../models');
const passport = require('passport');


// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
router.get('/', (req,res) => { // /api/user

});

router.post('/', async (req,res, next) => { // POST /api/user 회원가입
    try {
        const exUser = await db.User.findOne({
            where: {
                userId : req.body.id,
            },
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.'); // send 문자열
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12); // salt는 10 ~13 사이로 길어지면 속도가 느려짐 보안은 더좋음
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password : hashedPassword,
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch (e) {
        console.error(e);
        //에러 처리를 여기서
        return next(e);   //에러가 나면 next 많이 사용
    }
});

router.get('/:id', (req,res) => { // 남의 정보 가져오는 것 ex) /api/user/3 req.params.id로 가져올 수 있다.

});

router.post('/logout', (req,res) => {

});

router.post('/login', (req, res, next) => { // POST /api/user/login
    passport.authenticate('local', (err, user, info ) => {  //local.js의 done 인자들 3개 받는다.
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason); // local reason => 
        }
        return req.login(user, (loginErr) => {
            if (loginErr) {
                return next(loginErr);
            }
            const filteredUser =Object.assign( {}, user);
            delete filteredUser.password; // 보안상 비밀번호는 제외하고 프런트로 보낸다.
            return res.json(user); //프런트로 사용자 정보를 보낸다.
        })
    })
});

router.get('/:id/follow', (req,res) => {

});

router.post('/:id/follow', (req,res) => {

});

router.delete('/:id/follow', (req,res) => {

});

router.delete('/:id/follower', (req,res) => {

});

router.get('/:id/posts', (req,res) => {

});

module.exports = router;
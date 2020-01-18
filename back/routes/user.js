const express = require('express');
const router = express.Router();
const db =require('../models');
const passport = require('passport');
const bcrypt = require('bcrypt');


// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
router.get('/', (req,res) => { // /api/user
    if (!req.user) { // 로그인 후 새로고침 시 쿠키에 데이터 확인 
        return res.status(401).send('로그인이 필요합니다.');
    }
    const user =Object.assign( {}, req.user.toJSON());
    delete user.password;
    
    return res.json(user);
});

router.post('/', async (req,res, next) => { // POST /api/user 회원가입
    try {
        const exUser = await db.User.findOne({
            where: {
                userId : req.body.userId,
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

router.get('/:id', (req,res) => { // 남의 정보 가져오는 것 ex) /api/user/3 req.params.id로 가져올 수 있다. 동적을 변할수 있다.

});

router.post('/logout', (req,res) => { //api/user/logout
    req.logout();
    req.session.destroy();
    res.send('logout 성공');
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
        return req.login(user, async (loginErr) => { // passport.js serializeUser 실행됨
            try {
                if (loginErr) {
                    return next(loginErr);
                }
                const fullUser = await db.User.findOne({ // 로그인 후 로그인한 사용자정보를 보내주려고한다. post 개수 팔로잉 팔로워 수 include 사용함
                    where: { id: user.id },
                    include: [{
                        model: db.Post,
                        as: 'Posts',
                        attributes: ['id'], // 필터링을 할 수 있다. 
                    }, {
                        model: db.User,
                        as: 'Followings',
                        attributes: ['id'],
                    }, {
                        model: db.User,
                        as: 'Followers',
                        attributes: ['id'],
                    }],
                    attributes: ['id', 'nickname', 'userId'], //비밀번호를 제외하고 프런트로 보낸다
                });
                console.log(fullUser);
                return res.json(fullUser);
            } catch (e) {
              next(e);
            }
            // const filteredUser =Object.assign( {}, user.toJSON());  //시퀄라이저 객체 user라서 json형식으로 사용하려면 바꿔야한다.
            // delete filteredUser.password; // 보안상 비밀번호는 제외하고 프런트로 보낸다.
            // return res.json(filteredUser); //프런트로 사용자 정보를 보낸다.
        })
    })(req, res, next);
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
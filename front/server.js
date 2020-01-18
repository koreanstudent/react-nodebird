const express =require('express');
const next = require('next');
const morgan =require('morgan');
const cookieParser =require('cookie-parser');
const expressSession =require('express-session');
const dotenv = require('dotenv');

// next 서버와 express 연결 동적으로 이용하기 위해
const dev =process.env.NODE_ENV !== 'production';
const prod =process.env.NODE_ENV === 'production';

const app =next({ dev });
const handle = app.getRequestHandler();
dotenv.config();

app.prepare().then( () => {
    const server = express();

    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true})); //req.body 작동
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(expressSession({
        resave: false, // 매번 새션 강제 저장
        saveUninitialized: false, // 빈 값도 저장
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true, // 자바스크립트로 쿠키에 접근 못함
            secure: false, // https를 쓸 때 true
        },
        name: 'reactnode', // connent.id 쿠키 아이디 변경 보안을위해 변경해야함
    }));
    // 동적
    server.get('/hashtag/:tag', (req, res) => {
        return app.render(req, res, '/hashtag', { tag: req.params.tag });  // pages/hashtag 연결
      });
    
    server.get('/user/:id', (req, res) => {
    return app.render(req, res, '/user', { id: req.params.id });
    });


    // * = 모든 요청을 처리하겠다.
    server.get('*', (req, res) => {
        return handle(req,res);
    })

    server.listen(3060, () => {
        console.log('next+express running on port 3060');
    })
});
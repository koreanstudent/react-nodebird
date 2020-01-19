const express = require('express');
const morgan = require('morgan');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv =require('dotenv');
const passport =require('passport');


const passportConfig = require('./passport');
const db = require( './models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hasgtagAPIRouter = require('./routes/hashtag');

dotenv.config();
const app = express();
db.sequelize.sync(); // 알아서 테이블 생성해줌
passportConfig();
app.use(morgan('dev'));

app.use(cors({
    origin: true,
    credentials: true
})); //다른 포트번호 서버 연결가능하기 해줌 front,back , 쿠키가 서로 교환이됨

// 요청이 들어 왔을때 req.body에 넣어주는 기능
app.use(express.json());
app.use(express.urlencoded({ extended: true})); //req.body 작동
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false, // 매번 새션 강제 저장
    saveUninitialized: false, // 빈 값도 저장
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true, // 자바스크립트로 쿠키에 접근 못함
        secure: false, // https를 쓸 때 true
    },
    name: 'reactnode', // connent.id 쿠키 아이디 변경 보안을위해 변경해야함
}))
app.use(passport.initialize());
app.use(passport.session()); // expressSession 실행 후에 사용


app.use('/api/user', userAPIRouter); 
app.use('/api/post', postAPIRouter); 
app.use('/api/posts', postsAPIRouter); 
app.use('/api/hashtag', hasgtagAPIRouter); 



app.listen(3065, () => {
    console.log('server is running on localhost: 3065');
});
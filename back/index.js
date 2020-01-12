const express = require('express');
const db = require( './models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');


const app = express();
db.sequelize.sync(); // 알아서 테이블 생성해줌

app.use(express.json());
app.use(express.urlencoded({ extended: true})); //req.body 작동


app.use('/api/user', userAPIRouter); 
app.use('/api/post', postAPIRouter); 
app.use('/api/posts', postsAPIRouter); 



app.listen(8080, () => {
    console.log('server is running on localhost: 8080');
});
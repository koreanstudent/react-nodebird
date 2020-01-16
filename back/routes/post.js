const express = require('express');
const db =require('../models');

const router = express.Router();


router.post('/', async (req, res, next) => {  // api/post
    try {
        const hashtags = req.body.content.match(/#[^\s] + /g);
        const newPost = await db.Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        if (hashtags) {
            await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({ //반복문
                where: { name: tag.slice(1).toLowerCase()}, // slice(1) -> #빼는 것 , 영어는 소문자
            })));
            console.log(result);
            await newPost.addHashtags(result.map(r => r[0])); // 시퀄라이즈가 associate를 보고 자동으로 만들어준다 addhashtags
        }
        // const User =await newPost.getUser();
        // newPost.User =User;
        // res.json(newPost);
        
        const fullPost = await db.Post.findOne({
            where: { id: newPost.id},
            include: [{
                model: db.User,
            }],
        })
        res.json(fullPost);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/images', (req,res) => {

});

module.exports = router;
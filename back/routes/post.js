const express = require('express');
const db =require('../models');
const isLoggedIn = require('./middleware');

const router = express.Router();


router.post('/',isLoggedIn, async (req, res, next) => {  // api/post
    try {
        const hashtags = req.body.content.match(/#[^\s] + /g);
        const newPost = await db.Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({ //반복문
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


// 댓글 가져오기
router.get('/:id/comments', async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const comments = await db.Comment.findAll({
      where: {
        PostId: req.params.id,
      },
      order: [['createdAt', 'ASC']],
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'], // id 랑 nickname만 가져온다 비밀번호 제외
      }],
    });
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

// 댓글 작성하기
router.post('/:id/comment',isLoggedIn, async (req, res, next) => {  // POST /api/post/10000/comment
  try {
    const post = await db.Post.findOne({ where: {id: req.params.id}});
    if(!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const newComment = await db.Comment.create({
      PostId: post.id,
      UserId: req.user.id,
      content: req.body.conent,
    });

    // 시퀄라이즈 associate 연결 db저장
    await post.addComment(newComment.id);
    // db저장 값을 프론트로 보낸다.
    const comment = await db.Comment.findOne({
      where: {
        id: newComment.id
      },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
    });
    return res.json(comment);
  } catch (e) {
    console.error(e);
    next(e)
  }

});

module.exports = router;
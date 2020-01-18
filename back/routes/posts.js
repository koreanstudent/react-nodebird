const express = require('express');
const db = require('../models');

const router = express.Router();

//  게시글 여러개 가져오는 것
router.get('/', async (req, res) => {  // get /api/posts
    try {
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }],
            order: [['createdAt', 'DESC']] // 최신글부터 가져오기 
        });
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
})

module.exports = router;
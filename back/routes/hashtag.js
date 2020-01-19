const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/:tag', async (req, res, next) => {
    try{
        const posts = await db.Posts.findAll({
            include: [{
                models: db.Hashtag,
                where: {name: decodeURIComponent(req.params.name)},  // decodeURIComponent -> 한글, 특수문자는 주소를 통해서 서버로 갈때 urlcomponent로 바껴서 디코드 해서 보낸다.
            }, {
                models :  db.User,
                attributes: ['id', 'nickname'],
            }],
        });
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;
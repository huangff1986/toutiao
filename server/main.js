const Express = require('express');
const Tags = require('./models/tags');
const { responseClient } = require('./util');

const router = Express.Router();

//获取所有标签
router.get('/getAllTags', (req, res) => {
  Tags.find(null, 'title').then(data => {
    responseClient(res, 200, 0, '请求成功', data);
  }).catch(err => {
    responseClient(res);
  })
})

module.exports = router;
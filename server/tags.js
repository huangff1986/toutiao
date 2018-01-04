const Express = require('express');
const Tags = require('./models/tags');
const { responseClient } = require('./util');

const router = Express.Router();

//获取所有标签
router.get('/', (req, res) => {
  Tags.find(null, 'title static active').then(data => {
    responseClient(res, 200, 0, '请求成功', data);
  }).catch(err => {
    responseClient(res);
  })
})

// 创建一个标签
// req.body {
//   title.
//   static.
//   active.
// }
router.post('/', (req, res) => {
  const { title, static, active } = req.body;
  // 创建一条新的Tags数据
  let newTags = new Tags({
    title,
    static,
    active
  });

  newTags.save().then(data => {
    responseClient(res,200,0,'创建成功',data);
  }).cancel(err => {
    console.log(err);
    responseClient(res);
  })
})

// 更改标签为激活转台
router.put('/:title', (req, res) => {
  const { active } = req.body;
  const { title } = req.query;
  Tags.update({ title }, { active })
    .then(result => {
      responseClient(res,200,0,'更新成功',result)
    }).cancel(err => {
      responseClient(res);
    })
  responseClient(res, 200, 0, req.params.id);
})

// 删除一个标签
router.delete('/:title',  function (req, res) {
    const {title} = req.query;
    Tags.remove({title})
        .then(result => {
            if(result.result.n === 1){
                responseClient(res,200,0,'删除成功!')
            }else{
                responseClient(res,200,1,'标签不存在');
            }
        }).catch(err => {
        responseClient(res);
    });
});

module.exports = router;
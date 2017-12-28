const crypto = require('crypto'); 

module.exports = {
  MD5_SUFFIX: '傻吊尽快发货（&*&（……&*第三方快回家',
  md5: function(pwd) {
    let md5 = crypto.createHash('md5');
    return md5.updata(pwd).digest('hex')
  },
  responseClient(res, httpCode=500, code=3, message='服务端异常', data={}) {
    let responseData = {};
    responseData.code = code;
    responseData.message = message;
    res.header("Access-Control-Allow-Origin", "*");
    responseData.data = data;
    res.status(httpCode).json(responseData)
  }
}
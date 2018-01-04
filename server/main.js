const Express = require('express');
const Tags = require('./models/tags');
const { responseClient } = require('./util');

const router = Express.Router();

router.use('/tags', require('./tags'));

module.exports = router;
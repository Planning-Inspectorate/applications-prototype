const express = require("express");
const router = express.Router();

require('./routes/errors.js')(router);
require('./routes/sprint-3.js')(router);
require('./routes/sprint-4.js')(router);

module.exports = router;

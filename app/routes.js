const express = require("express");
const router = express.Router();

require('./routes/errors.js')(router);
require('./routes/sprint-3.js')(router);
require('./routes/sprint-4.js')(router);
require('./routes/sprint-5.js')(router);
require('./routes/mvp.js')(router);
require('./routes/sprint-6.js')(router);
require('./routes/sprint-8.js')(router);

  // routes for the type of party /register flow
  router.get("/reset", function (req, res) {
    req.session.destroy(function(err) {
        res.redirect("/");
    });
  });

module.exports = router;

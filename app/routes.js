const express = require("express");
const router = express.Router();

// Import routes for new versioning system
router.use("/:folder/v:version", (req, res, next) => {
  try {
    return require(`./views/${req.params.folder}/v${req.params.version}/_routes`)(req, res, next)
  } catch (e) {
    next()
  }
})

// Old versioning imports
require('./routes/errors.js')(router);
require('./routes/sprint-3.js')(router);
require('./routes/sprint-4.js')(router);
require('./routes/sprint-5.js')(router);
require('./routes/mvp.js')(router);
require('./routes/min-mvp.js')(router);
require('./routes/sprint-6.js')(router);
require('./routes/sprint-8.js')(router);
require('./routes/documents-0.js')(router);
require('./routes/decoupled.js')(router);
require('./routes/design-sprints.js')(router);
require('./routes/design-sprint-2.js')(router);
require('./routes/design-sprint-2b.js')(router);
require('./routes/design-sprint-3.js')(router);
require('./routes/design-sprint-3b.js')(router);
require('./routes/design-sprint-4.js')(router);
require('./routes/design-sprint-5.js')(router);
require('./routes/design-sprint-6.js')(router);
require('./routes/design-sprint-7.js')(router);
require('./routes/design-sprint-9.js')(router);
require('./routes/design-sprint-11.js')(router);
require('./routes/design-sprint-21.js')(router);
require('./routes/design-sprint-26.js')(router);
require('./routes/design-sprint-34.js')(router);




// routes for the type of party /register flow
router.get("/reset", function (req, res) {
  req.session.destroy(function(err) {
      res.redirect("/");
  });
});

module.exports = router;

const representations = require("../data/representations.json");

// sprint 4 routes
module.exports = function (router) {
  // routes for the representations
  router.get("/sprint-8/examination/representations", function (req, res) {
    res.render("sprint-8/examination/representations", representations);
  });

  router.get("/sprint-8/examination/representation", function (req, res) {
    res.render("sprint-8/examination/representation", representations);
  });

};

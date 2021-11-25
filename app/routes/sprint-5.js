const representations = require("../data/representations.json");

// sprint 4 routes
module.exports = function(router) {

  router.get("/sprint-5/representations", function(req, res) {
    res.render("sprint-5/representations", representations);
  });

  router.get("/sprint-5/representation", function(req, res) {
    res.render("sprint-5/representation", representations);
  });
  
}

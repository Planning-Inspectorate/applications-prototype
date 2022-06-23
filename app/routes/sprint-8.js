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


  router.post("/decoupling-examination-true", function (req, res) {
      req.session.data['examinationstage']= "true";
      res.redirect("june-22-build/decoupling-v1/index");
  });

  router.post("/decoupling-examination-false", function (req, res) {
      req.session.data['examinationstage']= "false";
      res.redirect("june-22-build/decoupling-v1/index");
  });


};

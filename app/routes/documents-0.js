const documents = require("../data/sunnica.json");
// sprint 4 routes
module.exports = function (router) {

  // routes for the representations
  router.get("/documents-0/", function (req, res) {
    res.render("documents-0/index", documents);
  });

};


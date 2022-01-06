const representations = require("../data/representations.json");

// sprint 4 routes
module.exports = function (router) {
  // routes for the representations
  router.get("/sprint-6/examination/representations", function (req, res) {
    res.render("sprint-6/examination/representations", representations);
  });

  router.get("/sprint-6/examination/representation", function (req, res) {
    res.render("sprint-6/examination/representation", representations);
  });

  // routes for the type of party /register flow
  router.post(
    "/sprint-6/pre-examination/register/type-of-party",
    function (req, res) {
      // get the type of interested party
      var sprintSixTypeOfParty =
        req.session.data["sprint-6-type-of-interested-party"];

      // if an individual, show individual flow
      if (sprintSixTypeOfParty == "myself") {
        res.redirect("myself/full-name");

        // if an organisation, show organisation flow
      } else if (
        sprintSixTypeOfParty == "organisation"
      ) {
        res.redirect("organisation/full-name");

        // if behalf, show behalf flow
      } else if (sprintSixTypeOfParty == "on-behalf") {
        res.redirect("on-behalf/full-name");

        // otherwise, show myself flow
      } else {
        res.redirect("myself/full-name");
      }
    }
  );
};

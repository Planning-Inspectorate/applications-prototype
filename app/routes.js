const express = require("express");
const router = express.Router();

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to '/type-of-party' in the register flow
// sprint 3 routes
router.post("/register/type-of-party", function(req, res) {
  // get the type of interested party
  var typeOfParty = req.session.data["type-of-interested-party"];

  // if an individual, show individual flow
  if (typeOfParty == "Myself") {
    res.redirect("/register/myself/full-name");

    // if an organisation, show organisation flow
  } else if (typeOfParty == "An organisation I work or volunteer for") {
    res.redirect("/register/organisation/full-name");

    // otherwise, show on behalf flow
  } else {
    res.redirect("/register/on-behalf/representee-full-name");
  }
});

// sprint 4 routes

router.post("/sprint-4/register/type-of-party", function(req, res) {
  // get the type of interested party
  var sprintFourTypeOfParty = req.session.data["sprint-4-type-of-interested-party"];

  // if an individual, show individual flow
  if (sprintFourTypeOfParty == "Myself") {
    res.redirect("sprint-4/register/myself/full-name");

    // if an organisation, show organisation flow
  } else if (sprintFourTypeOfParty == "An organisation I work or volunteer for") {
    res.redirect("organisation/full-name");

    // if behalf, show behalf flow
  } else if (sprintFourTypeOfParty == "On behalf of another person or organisation") {

    res.redirect("on-behalf/representee-full-name");

  // otherwise, show myself flow
  } else {
    res.redirect("myself/full-name");
  }


});

require("./routes/0-1-0/routing.js")(router);

module.exports = router;

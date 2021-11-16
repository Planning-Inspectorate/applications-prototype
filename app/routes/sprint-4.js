// sprint 4 routes
module.exports = function(router) {

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
}

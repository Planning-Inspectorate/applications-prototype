module.exports = function(router) {

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
}

// sprint 4 routes
module.exports = function (router) {
  // routes for the type of party /register flow
  router.post("/june-22-build/decoupling-v1/register/type-of-party", function (req, res) {
    // get the type of interested party
    var sprintSixTypeOfParty =
      req.session.data["mvp-type-of-interested-party"];

    // if an individual, show individual flow
    if (sprintSixTypeOfParty == "myself") {
      res.redirect("myself/full-name");

      // if an organisation, show organisation flow
    } else if (sprintSixTypeOfParty == "organisation") {
      res.redirect("organisation/full-name");

      // if behalf, show behalf flow
    } else if (sprintSixTypeOfParty == "on-behalf") {
      res.redirect("on-behalf/full-name");

      // otherwise, show myself flow
    } else {
      res.redirect("myself/full-name");
    }
  });


  // routes for the type of party /register flow
  router.post(
    "/june-22-build/decoupling-v1/register/on-behalf/representing-who",
    function (req, res) {
      // get the type of interested party
      var representingFor = req.session.data["representingFor"];
      // console.log("Here C")

      // if an individual, show individual flow
      if (representingFor == "A family group") {
        res.redirect("representee-family-name");

        // if an organisation, show organisation flow
      } else if (
        representingFor == "An organisation or charity I do not work for"
      ) {
        res.redirect("representee-org-name");

        // if behalf, show behalf flow
      } else if (representingFor == "A person") {
        res.redirect("representee-full-name");

        // otherwise, show myself flow
      } else{
        res.redirect("representing-for");
      }

    }
  );
};

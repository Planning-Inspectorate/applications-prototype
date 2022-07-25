const representations = require("../data/representations.json");

// sprint 4 routes
module.exports = function (router) {
  // routes for the representations
  router.get("/design-sprint-1/start", function (req, res) {
    req.session.data['projectname'] = "Drax Bioenergy with Carbon Capture and Storage Project" ;
  //  console.log("this is a test")
  //  console.log(req.session.data['projectname']);
        res.render("design-sprint-1/start");
  });


  router.post("/design-sprint-1/involvement-answer", function(req, res) {
    // get the type of interested party

  //   console.log("this is a test")
    var involvement = req.session.data["involvement"];
 console.log("involvement")
    // if an individual, show individual flow
    if (involvement == "applicant") {
      res.redirect("email");

      // if an organisation, show organisation flow
    } else if (involvement == "interestedparty") {
      res.redirect("ip-number");

      // otherwise, show on behalf flow
    } else {
      res.redirect("who-for");
    }
  });


  router.post("/design-sprint-1/whofor-answer", function(req, res) {
    // get the type of interested party

     console.log(req.session.data["whofor"])
    var whofor = req.session.data["whofor"];
 console.log("involvement")
    // if an individual, show individual flow
    if (whofor == "myself") {
      req.session.data["NameDesc"] = "What\'s your name";
      // otherwise, show on behalf flow
    } else {
      req.session.data["NameDesc"] = "What\'s the name of your organisation";
    }
    res.redirect("name");
  });



};

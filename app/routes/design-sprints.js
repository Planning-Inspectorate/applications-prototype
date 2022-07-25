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



  router.post("/design-sprint-1/ip-number-available-answer", function(req, res) {
    //route user to correct journey depending on entity
    if(req.session.data.entity['ipavailable']=="Yes"){
      res.redirect("ip-number");
    }
    else {
      res.redirect("applicant-yes-no");

    }
  });

  router.post("/design-sprint-1/applicant-yes-no-answer", function(req, res) {
    //If user is applicant, skip to email, elase collect as non registered party
    if(req.session.data.entity['applicant']=="Yes"){
      res.redirect("email");
    }
    else {
      res.redirect("over-18-yes-no");

    }
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


  router.post("/design-sprint-1/who-for-answer", function(req, res) {
    // get the type of interested party
    var whofor = req.session.data['entity']['whofor'];
    // if an individual, show individual flow
    if (whofor == "Myself") {
      res.redirect("individual-name");
      // otherwise, show on behalf flow
    } else {
      res.redirect("organisation-name");

    }
  });





router.post("/design-sprint-1/submission-type-routing", function(req, res) {
  // route user to upload files and/or make a text representation

  //Store checkbox values
  var submissionType =[]
  submissionType = req.session.data['submission-method'];

  // Route  user to upload or make a text representation
if (submissionType.includes("Upload files")){
  res.redirect("upload-files");
}
else {
  res.redirect("make-comment");
}


});


router.post("/design-sprint-1/upload-files-routing", function(req, res) {
  // route user to upload files and/or make a text representation

  //Store checkbox values
  var submissionType =[]
  submissionType = req.session.data['submission-method'];

  // Route  user to make a comment if they specified, otherwise route to sensitive information screens
if (submissionType.includes("Make a text representation")){
  res.redirect("make-comment");
}
else {
  res.redirect("sensitive-information");
}


});

router.post("/design-sprint-1/sensitive-information-routing", function(req, res) {
  // route user to upload files and/or make a text representation

  //Store checkbox values
  var sensitiveInformation = req.session.data['sensitive-information'];

   if (sensitiveInformation == "Yes") {
     res.redirect("sensitive-items");
   }
   else {
     res.redirect("check-answers");
   }

});



};

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
  router.post("/sprint-6/pre-examination/register/type-of-party", function (req, res) {
    // get the type of interested party
    var sprintSixTypeOfParty =
      req.session.data["sprint-6-type-of-interested-party"];

    // if an individual, show individual flow
    if (sprintSixTypeOfParty == "Myself") {
      res.redirect("myself/full-name");

      // if an organisation, show organisation flow
    } else if (
      sprintSixTypeOfParty == "An organisation I work or volunteer for"
    ) {
      res.redirect("organisation/full-name");

      // if behalf, show behalf flow
    } else if (
      sprintSixTypeOfParty ==
      "On behalf of another person, a family group or an organisation I do not work for"
    ) {
      res.redirect("on-behalf/representing-for");

      // otherwise, show myself flow
    } else {
      res.redirect("myself/full-name");
    }
  });

  // MYSELF FLOW
  // 
  // 
  // 
  // when check comments page loads

  // when the comments are submitted, add them to an array

  router.post(
    "/sprint-6/pre-examination/register/myself/check-your-comments",
    function (req, res, next) {
      // get the data submitted
      var sprintSixComment = req.session.data["myself-comment"] || "A test comment";
      var sprintSixTopic = req.session.data["myself-topic"] || "A test topic";
      // create an empty array, and add the data from the form
      const comment = {};
      comment.topic = sprintSixTopic;
      comment.rep = sprintSixComment;
      req.session.data["myself-comment-array"].push(comment)
      return res.redirect("check-your-comments");
    }
  );


  // when a user chooses to add another comment or not
  router.post(
    "/sprint-6/pre-examination/register/myself/check-your-answers",
    function (req, res) {
      // capture their response
      var sprintSixComment = req.session.data["another-myself-comment"];
      // choose which page to display
      if (sprintSixComment == "true") {
        return res.redirect("comment");
      } else {
        return res.redirect("check-your-answers");
      }
    }
  );


  // ORGANISATION FLOW
  // 
  // 
  // 
  // when check comments page loads

  // when the comments are submitted, add them to an array
  
  router.post(
    "/sprint-6/pre-examination/register/organisation/check-your-comments",
    function (req, res, next) {
      // get the data submitted
      var sprintSixComment = req.session.data["organisation-comment"] || "A test comment";
      var sprintSixTopic = req.session.data["organisation-topic"] || "A test topic";
      // create an empty array, and add the data from the form
      const comment = {};
      comment.topic = sprintSixTopic;
      comment.rep = sprintSixComment;
      req.session.data["organisation-comment-array"].push(comment)
      return res.redirect("check-your-comments");
    }
  );


  // when a user chooses to add another comment or not
  router.post(
    "/sprint-6/pre-examination/register/organisation/check-your-answers",
    function (req, res) {
      // capture their response
      var sprintSixComment = req.session.data["another-organisation-comment"];
      // choose which page to display
      if (sprintSixComment == "true") {
        return res.redirect("comment");
      } else {
        return res.redirect("check-your-answers");
      }
    }
  );



  // ON BEHALF FLOW
  // 
  // 
  // 

  router.post(
    "/sprint-6/pre-examination/register/on-behalf/check-your-comments",
    function (req, res, next) {
      // get the data submitted
      var sprintSixComment = req.session.data["behalf-comment"] || "A test comment";
      var sprintSixTopic = req.session.data["behalf-topic"] || "A test topic";
      // create an empty array, and add the data from the form
      const comment = {};
      comment.topic = sprintSixTopic;
      comment.rep = sprintSixComment;
      req.session.data["behalf-comment-array"].push(comment)
      return res.redirect("check-your-comments");
    }
  );


  // when a user chooses to add another comment or not
  router.post(
    "/sprint-6/pre-examination/register/on-behalf/full-name",
    function (req, res) {
      // capture their response
      var sprintSixComment = req.session.data["another-behalf-comment"];
      // choose which page to display
      if (sprintSixComment == "true") {
        return res.redirect("comment");
      } else {
        return res.redirect("full-name");
      }
    }
  );


};

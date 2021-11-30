const representations = require("../data/representations.json");

// sprint 4 routes
module.exports = function (router) {
  // routes for the representations
  router.get("/sprint-5/representations", function (req, res) {
    res.render("sprint-5/representations", representations);
  });

  router.get("/sprint-5/representation", function (req, res) {
    res.render("sprint-5/representation", representations);
  });

  // routes for the type of party /register flow
  router.post("/sprint-5/register/type-of-party", function (req, res) {
    // get the type of interested party
    var sprintFiveTypeOfParty =
      req.session.data["sprint-5-type-of-interested-party"];

    // if an individual, show individual flow
    if (sprintFiveTypeOfParty == "Myself") {
      res.redirect("myself/full-name");

      // if an organisation, show organisation flow
    } else if (
      sprintFiveTypeOfParty == "An organisation I work or volunteer for"
    ) {
      res.redirect("organisation/full-name");

      // if behalf, show behalf flow
    } else if (
      sprintFiveTypeOfParty ==
      "On behalf of another person or organisation, or as a family group"
    ) {
      res.redirect("on-behalf/representing-for");

      // otherwise, show myself flow
    } else {
      res.redirect("myself/full-name");
    }
  });

  // routes for the type of party /register flow
  router.post(
    "/sprint-5/register/on-behalf/representing-for",
    function (req, res) {
      // get the type of interested party
      var sprintFiveRepresentingFor =
        req.session.data["sprint-5-representing-for"];

      // if an individual, show individual flow
      if (sprintFiveRepresentingFor == "A person") {
        res.redirect("representee-full-name");

        // if an organisation, show organisation flow
      } else if (sprintFiveRepresentingFor == "An organisation or charity") {
        res.redirect("representee-org-name");

        // if behalf, show behalf flow
      } else if (sprintFiveRepresentingFor == "A family group, or couple") {
        res.redirect("representee-family-name");

        // otherwise, show myself flow
      } else {
        res.redirect("representee-full-name");
      }
    }
  );

  // create an empty array
  let comments = [];

  // when the comments are submitted, add them to an array
  router.post(
    "/sprint-5/register/on-behalf/comment",
    function (req, res, next) {
      // get the data submitted
      var sprintFiveComment = req.session.data["behalf-comment"] || "A test comment";
      var sprintFiveTopic = req.session.data["behalf-topic"] || "A test topic";

      
      // create an empty array, and add the data from the form
      const comment = {};
      comment.topic = sprintFiveTopic;
      comment.rep = sprintFiveComment;
      comments.push(comment);
      // redirect to the check your comments page
      return res.redirect("check-your-comments");
    }
  );

  // when check comments page loads
  router.get(
    "/sprint-5/register/on-behalf/check-your-comments",
    function (req, res) {
      // if there are no comments, load the comments page
      if (comments <= 0) {
        res.redirect("comment");
      } else {
        // pass in the comments variable
        res.render("sprint-5/register/on-behalf/check-your-comments", {
          comments,
        });
      }
    }
  );

  // when a user chooses to add another comment or not
  router.post(
    "/sprint-5/register/on-behalf/check-your-comments",
    function (req, res, next) {
      // capture their response
      var sprintFiveComment = req.session.data["another-comment"];
      // chose which page to display
      if (sprintFiveComment == "true") {
        return res.redirect("comment");
      } else {
        return res.redirect("check-your-answers");
      }
    }
  );

  // when check answers page loads
  router.get(
    "/sprint-5/register/on-behalf/check-your-answers",
    function (req, res) {
      // pass in the comments variable
      res.render("sprint-5/register/on-behalf/check-your-answers", {
        comments,
      });
    }
  );
};

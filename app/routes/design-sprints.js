const representations = require("../data/representations.json");

function addToList(obj, itemList, change){
  if(!itemList){
    itemList = []; // if no array exists create one
  }
  // Is the user changing an option?
  if(change) {
    // yes - find object to change and overwrite
    itemList.splice(change, 1, obj);
  } else {
    // no - add new object
    itemList.push(obj);
  }
  return itemList; // return edited array
}


// remove from list
function removeFromList(obj, itemList) {
  if(!itemList){
    itemList = []; // if no array exists create one
  }
  if(obj) {
    itemList.splice(obj, 1); // find object and remove
  }
  return itemList; // return edited array
}



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
      res.redirect("who-for");

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
    } else if (whofor=="An organisation I work for") {
      res.redirect("organisation-name");

    }
    else {
      res.redirect("other-name");
    }
  });

  router.post("/design-sprint-1/deadline-items-answer", function(req, res) {
    // if an object to create all sets of the sale details doesn't exist then create it

    let deadlineItems = req.session.data.deadline['deadlineitems']


    let numberItems = deadlineItems.length
    req.session.data.deadlineitemscount = numberItems
    console.log(req.session.data.deadlineitemscount)

    //Create loop incrementer
    req.session.data.deadlineloopnumber = 1;

    //Create a variable to store active deadline item
    req.session.data.deadline['deadlineitemname'];





      res.redirect("how-make-submission");


  });

  router.get("/design-sprint-1/how-make-submission", function (req, res) {
    req.session.data.deadlineactiveloopindex = (req.session.data.deadlineloopnumber - 1)
    var i = req.session.data.deadlineactiveloopindex
    req.session.data.deadline['deadlinename'] = req.session.data.deadline.deadlineitems[i]
    console.log(req.session.data.deadline['deadlinename'])

    res.render("design-sprint-1/how-make-submission");
  });



router.post("/design-sprint-1/submission-type-routing", function(req, res) {
  // route user to upload files and/or make a text representation

  //Identify name of active deadline item

  //Store checkbox values
  var submissionType =[]
  submissionType = req.session.data.deadlineitem['submissionmethod'];

  // Route  user to upload or make a text representation
if (submissionType.includes("Upload files")){
  if (submissionType.includes("Write a comment")){
    req.session.data.deadlineitem['submissiontext']= "Both"
    res.redirect("upload-files");
  }
  else {
    req.session.data.deadlineitem['submissiontext']= "Files"
      res.redirect("upload-files");
  }
}
else {
    req.session.data.deadlineitem['submissiontext']= "Comment"
  req.session.data.deadlineitem['commentsavailable'] = true;
  req.session.data.deadlineitem['uploadedfilesavailable'] = false;

  res.redirect("make-comment");
}


});


router.post("/design-sprint-1/upload-files-routing", function(req, res) {
  // route user to upload files and/or make a text representation
  console.log(req.session.data['deadlineitemuploadedfiles']);
  //Create variable to say contains uploaded files
  req.session.data.deadlineitem['uploadedfilesavailable'] = true;
  //Store checkbox values
  var submissionType =[]
  submissionType = req.session.data.deadlineitem['submissionmethod'];

  // Route  user to make a comment if they specified, otherwise route to sensitive information screens
if (submissionType.includes("Write a comment")){
  //Create variable to say contains uploaded files
  req.session.data.deadlineitem['commentsavailable'] = true;
  res.redirect("make-comment");
}
else {
  req.session.data.deadlineitem['commentsavailable'] = false;
  res.redirect("sensitive-information");
}


});

router.post("/design-sprint-1/sensitive-information-routing", function(req, res) {
  // route user to upload files and/or make a text representation

  //Store checkbox values
  var sensitiveInformation = req.session.data.deadlineitem['sensitiveinformation'];

   if (sensitiveInformation == "Yes") {
     res.redirect("sensitive-items");
   }
   else {
     //Decrement count by 1
     req.session.data.deadlineloopnumber++;

     req.session.data['deadlineitem']['deadlinename'] = req.session.data.deadline['deadlinename']

          //Redirect user to add next deadline item info if another was selected
     if (req.session.data.deadlineloopnumber <= req.session.data.deadlineitemscount) {

       // if an array to store all the sets of correction values doesn't exist create it
       if(!req.session.data['submissiondata']) {
       req.session.data['submissiondata'] = []
       }

       // set corrections array as a variable
       let submissionData = req.session.data['submissiondata']

       // access the set of sales details the user has just entered
       let choice = req.session.data['deadlineitem']



       // call the function to add the latest correction to the corrections
       addToList(choice, submissionData)

       console.log(req.session.data['submissiondata'])
       res.redirect("how-make-submission");
     }
     else {
       //Add deadline item to deadlineItems

       // if an array to store all the sets of correction values doesn't exist create it
       if(!req.session.data['submissiondata']) {
       req.session.data['submissiondata'] = []
       }

       // set corrections array as a variable
       let submissionData = req.session.data['submissiondata']

       // access the set of sales details the user has just entered
       let choice = req.session.data['deadlineitem']



       // call the function to add the latest correction to the corrections
       addToList(choice, submissionData)

       console.log(req.session.data['submissiondata'])
       res.redirect("check-answers");

     }
   }

});

router.post("/design-sprint-1/sensitive-items-routing", function(req, res) {


  //Decrement count by 1
  req.session.data.deadlineloopnumber++;

  req.session.data['deadlineitem']['deadlinename'] = req.session.data.deadline['deadlinename']

       //Redirect user to add next deadline item info if another was selected
  if (req.session.data.deadlineloopnumber <= req.session.data.deadlineitemscount) {

    // if an array to store all the sets of correction values doesn't exist create it
    if(!req.session.data['submissiondata']) {
    req.session.data['submissiondata'] = []
    }

    // set corrections array as a variable
    let submissionData = req.session.data['submissiondata']

    // access the set of sales details the user has just entered
    let choice = req.session.data['deadlineitem']



    // call the function to add the latest correction to the corrections
    addToList(choice, submissionData)

    console.log(req.session.data['submissiondata'])
    res.redirect("how-make-submission");
  }
  else {
    //Add deadline item to deadlineItems

    // if an array to store all the sets of correction values doesn't exist create it
    if(!req.session.data['submissiondata']) {
    req.session.data['submissiondata'] = []
    }

    // set corrections array as a variable
    let submissionData = req.session.data['submissiondata']

    // access the set of sales details the user has just entered
    let choice = req.session.data['deadlineitem']



    // call the function to add the latest correction to the corrections
    addToList(choice, submissionData)

    console.log(req.session.data['submissiondata'])
    res.redirect("check-answers");

  }


});

router.post(`/design-sprint-1/delete-item-answer`, function (req, res) {

        let confirmRemove = req.session.data['confirm-remove']
        let removeObj = req.session.data['remove']
        let submissionData = req.session.data['submissiondata']


        if(confirmRemove === 'Yes') {
        removeFromList( removeObj, submissionData)
        }

        res.redirect(`check-answers`)




});




};

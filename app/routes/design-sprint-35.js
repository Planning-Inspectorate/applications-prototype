const representations = require("../data/representations.json");

//const projectList  = require("../data/project-list.json");

const fs = require('fs');

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

function loadDeadlineData(){

          let deadlineItems = [];
        deadlineItems.push({id : 'Deadline 1', name : 'Comments on RRs'});
        deadlineItems.push({id : 'Deadline 1', name : 'Comments on updated application documents'});
            deadlineItems.push({id : 'Deadline 1', name : 'Notification by Statutory Parties of their wish to be considered as an Interested Party (IP) by the ExA'});
        deadlineItems.push({id : 'Deadline 1', name : 'Notification of wish to speak at an Open Floor Hearing (OFH'});
            deadlineItems.push({id : 'Deadline 1', name : 'Notification of wish to speak at a Compulsory Acquisition Hearing (CAH)'});
        deadlineItems.push({id : 'Deadline 1', name : 'Request to receive future correspondence by email'});
            deadlineItems.push({id : 'Deadline 1', name : 'Request to receive future correspondence by email'});



        deadlineItems.push({id : 'Deadline 2', name : 'Responses to ExQ1'});
      deadlineItems.push({id : 'Deadline 2', name : 'Written Representations (WR) and summaries of any WR exceeding 1500 words'});
    deadlineItems.push({id : 'Deadline 2', name : 'Responses to ExQ1'});
      deadlineItems.push({id : 'Deadline 2', name : 'Comments on the Applicant’s proposed ASI itinerary'});

    deadlineItems.push({id : 'Deadline 2', name : 'Comments on any submissions received by D1'});
      deadlineItems.push({id : 'Deadline 2', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});



            deadlineItems.push({id : 'Deadline 3', name : 'Comments on responses to the ExQ1'});
      deadlineItems.push({id : 'Deadline 3', name : 'Written Representations (WR) and summaries of any WR exceeding 1500 words'});
    deadlineItems.push({id : 'Deadline 3', name : 'Responses to comments made on RRs'});
      deadlineItems.push({id : 'Deadline 3', name : 'Comments on LIRs'});
      deadlineItems.push({id : 'Deadline 3', name : 'Comments on any submissions received by D2'});
    deadlineItems.push({id : 'Deadline 3', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});
      deadlineItems.push({id : 'Deadline 3', name : 'Comments on WRs'});

    deadlineItems.push({id : 'Procedural Deadline B', name : 'Registration for ISH2, ISH3, ISH4 and CAH'});



    deadlineItems.push({id : 'Deadline 4', name : 'Post Hearing submissions including written submissions of oral case'});
      deadlineItems.push({id : 'Deadline 4', name : 'Progressed SoCG and SCSoCG'});
      deadlineItems.push({id : 'Deadline 4', name : 'An updated CAS in clean and tracked versions'});
        deadlineItems.push({id : 'Deadline 4', name : 'Updated Guide to the Application'});

                deadlineItems.push({id : 'Deadline 3', name : 'Responses to ExQ1'});



      deadlineItems.push({id : 'Deadline 5', name : 'Progressed SoCG and SCSoCG'});
    deadlineItems.push({id : 'Deadline 5', name : 'An updated version of the dDCO in clean and tracked versions and a schedule of changes'});
      deadlineItems.push({id : 'Deadline 5', name : 'Schedule of changes to the BoR'});
          deadlineItems.push({id : 'Deadline 5', name : 'Written Representations (WR) and summaries of any WR exceeding 1500 words'});

     -
     -


    deadlineItems.push({id : 'Deadline 6', name : 'Comments on any submissions received by D1'});
      deadlineItems.push({id : 'Deadline 6', name : 'Comments on any submissions received by D5'});
    deadlineItems.push({id : 'Deadline 6', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});



    deadlineItems.push({id : 'Deadline 7', name : '  Draft SoCGs between the Applicant and Cambridgeshire County Council'});
      deadlineItems.push({id : 'Deadline 7', name : 'Draft SoCGs between the Applicant and  Natural England'});
        deadlineItems.push({id : 'Deadline 7', name : 'Draft SoCGs between the Applicant and Western Power (East Midlands) Plc'});
          deadlineItems.push({id : 'Deadline 7', name : 'Draft SoCGs between the Applicant and  Anglian Water Limited'});

  -

    deadlineItems.push({id : 'Deadline 8', name : 'Comments on the RIES (if required)'});
      deadlineItems.push({id : 'Deadline 8', name : 'Responses to the ExAs Additional Questions (ExQ3)'});
    deadlineItems.push({id : 'Deadline 8', name : 'Comments on any submissions received by D7'});
    deadlineItems.push({id : 'Deadline 8', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});

              deadlineItems.push({id : 'Deadline 5', name : 'Written Representations (WR) and summaries of any WR exceeding 1500 words'});


              deadlineItems.push({id : 'Deadline 9', name : 'Comments on any submissions received by Deadline 8'});
                deadlineItems.push({id : 'Deadline 9', name : 'Any further information requested by the Examining Authority under Rule 17 of the Examination Rules'});
                  deadlineItems.push({id : 'Deadline 9', name : 'Final Statements of Common Ground (SoCG) and Statement of Commonality of the Statements of Common Ground (SCSoCG)'});
                  deadlineItems.push({id : 'Deadline 9', name : 'Final draft Development Consent Order in MS Word clean and tracked versions'});
                  deadlineItems.push({id : 'Deadline 9', name : 'Final Schedule of changes to the draft Development Consent Order'});
                  deadlineItems.push({id : 'Deadline 9', name : 'Final Compulsory Acquisition Schedule, in clean and tracked versions'});
                        deadlineItems.push({id : 'Deadline 9', name : 'Final updated Guide to the Application'});
                        deadlineItems.push({id : 'Deadline 9', name : 'Other'});


             -

    deadlineItems.push({id : 'Deadline 10', name : 'Comments on any submissions received by D9'});
      deadlineItems.push({id : 'Deadline 10', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});
      deadlineItems.push({id : 'Deadline 10', name : 'Other'});



          return deadlineItems;
}


// sprint 4 routes
module.exports = function (router) {
  // routes for the representations
  router.post("/design-sprint-35/choose-deadline-answer", function(req, res) {
    //route user to correct journey depending on entity
    console.log("deadline item list")
    console.log(req.session.data['deadlineitemlist'])
      res.redirect("deadline-items");

  });


  router.post("/design-sprint-35/ip-number-available-answer", function(req, res) {
    //route user to correct journey depending on entity

    if(req.session.data.entity['ipavailable']=="Yes"){
      res.redirect("ip-number");
    }
    else {
      res.redirect("applicant-yes-no");

    }
  });

  router.post("/design-sprint-35/applicant-yes-no-answer", function(req, res) {
    //If user is applicant, skip to email, elase collect as non registered party
    if(req.session.data.entity['applicant']=="Yes"){
      res.redirect("email");
    }
    else {
      res.redirect("who-for");

    }
  });

  router.post("/design-sprint-35/involvement-answer", function(req, res) {
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


  router.post("/design-sprint-35/who-for-answer", function(req, res) {
    // get the type of interested party
    var whofor = req.session.data['entity']['whofor'];
    // if an individual, show individual flow
    console.log(whofor);
    if (whofor == "Myself") {
      res.redirect("individual-name");
      // otherwise, show on behalf flow
    } else if (whofor=="My household") {
      res.redirect("household-name");

    }
    else if (whofor=="On behalf of an individual") {
      res.redirect("other-person");
    }
    else {
      res.redirect("other-name");
    }
  });

  router.post("/design-sprint-35/add-deadline-item-answer", function(req, res) {
    if (req.session.data.addAnother == "Yes"){
      res.redirect("deadline-items");
    }
    else {
      res.redirect("check-answers");
    }


  });

  router.post("/design-sprint-35/choose-deadline-single-answer", function(req, res) {
    if (req.session.data['single-deadline'] == "Yes"){
      res.redirect("deadline-items");
    }
    else {
      res.redirect("choose-deadline-single-no");
    }


  });

  router.post("/design-sprint-35/deadline-items-answer", function(req, res) {
    // if an object to create all sets of the sale details doesn't exist then create it


      res.redirect("how-make-submission");


  });





router.post("/design-sprint-35/submission-type-routing", function(req, res) {
  // route user to upload files and/or make a text representation

  //Identify name of active deadline item

  //Store checkbox values
  var submissionType;
  submissionType = req.session.data.deadlineitem['submissionmethod'];

  // Route  user to upload or make a text representation
if (submissionType == "Upload files"){
    req.session.data.deadlineitem['submissiontext']= "Files"
    req.session.data.deadlineitem['commentsavailable'] = false;
    req.session.data.deadlineitem['uploadedfilesavailable'] = true;
    res.redirect("upload-files");
  }
  else if (submissionType == "Make a comment"){
      req.session.data.deadlineitem['submissiontext']= "Comment"
        req.session.data.deadlineitem['commentsavailable'] = true;
        req.session.data.deadlineitem['uploadedfilesavailable'] = false;
      res.redirect("make-comment");
    }
  else {
    req.session.data.deadlineitem['submissiontext']= "Both"
    req.session.data.deadlineitem['commentsavailable'] = true;
    req.session.data.deadlineitem['uploadedfilesavailable'] = true;
      res.redirect("make-comment");
  }


});

router.post("/design-sprint-35/make-comment-routing", function(req, res) {
  if (req.session.data.deadlineitem['submissionmethod'] == "Both"){
    res.redirect("upload-files");
  }
  else {
    res.redirect("sensitive-information");
  }


});

router.post("/design-sprint-35/upload-files-routing", function(req, res) {
  // route user to upload files and/or make a text representation
  console.log(req.session.data['deadlineitemuploadedfiles']);
  //Create variable to say contains uploaded files
  req.session.data.deadlineitem['uploadedfilesavailable'] = true;
  //Store checkbox values
  res.redirect("sensitive-information");

});

router.post("/design-sprint-35/sensitive-information-routing", function(req, res) {
  // route user to upload files and/or make a text representation

  //Store checkbox values
  var sensitiveInformation = req.session.data.deadlineitem['sensitiveinformation'];

   if (sensitiveInformation == "Yes") {
     res.redirect("sensitive-items");
   }
   else {

       res.redirect("check-deadline-item");
     }


});

router.post("/design-sprint-35/sensitive-items-routing", function(req, res) {


    res.redirect("check-deadline-item");


});

router.post("/design-sprint-35/check-deadline-item-answer", function(req, res) {


    // if an array to store all the sets of correction values doesn't exist create it
    if(!req.session.data['submissiondata']) {
    req.session.data['submissiondata'] = []
    }

    // set corrections array as a variable
    let submissionData = req.session.data['submissiondata']

    // access the set of sales details the user has just entered
    let choice = req.session.data['deadlineitem']


    // check if the user is changing some details already entered
    let change = req.session.data['change-deadline-items-position']

    // call the function to add the latest correction to the corrections
    addToList(choice, submissionData, change)


            delete req.session.data['change-deadline-items-position']


    console.log(req.session.data['submissiondata'])
    res.redirect("deadline-item-summary");


});

router.post("/design-sprint-35/change-deadline-items-form-answer", function(req, res) {

  if( req.session.data['change-deadline-items-position'] ){

  let choice = req.session.data['change-deadline-items-position']
  req.session.data['deadlineitem'] = req.session.data['submissiondata'][choice];
  console.log(req.session.data['deadlineitem']);
  }


    res.redirect("check-deadline-item");


});

router.post(`/design-sprint-35/delete-item-answer`, function (req, res) {

        let confirmRemove = req.session.data['confirm-remove']
        let removeObj = req.session.data['remove']
        let submissionData = req.session.data['submissiondata']


        if(confirmRemove === 'Yes') {
        removeFromList( removeObj, submissionData)
        }

        res.redirect(`deadline-item-summary`)




});

//Show hide doc lib filters
router.post("/design-sprint-35/show-hide-filters", function(req, res) {
  if(req.session.data['showfilters']=="true"){
    req.session.data['showfilters']="false"
    res.redirect("document-library");
  }
  else {
    req.session.data['showfilters']="true"
    res.redirect("document-library");

  }
});

//Show hide doc lib filters
router.post("/design-sprint-35/show-hide-filters-2", function(req, res) {
  if(req.session.data['showfilters']=="true"){
    req.session.data['showfilters']="false"
    res.redirect("/design-sprint-35/document-library/index-2");
  }
  else {
    req.session.data['showfilters']="true"
    res.redirect("/design-sprint-35/document-library/index-2");

  }
});

//Show hide doc lib filters
router.post("/design-sprint-35/show-hide-filters-3", function(req, res) {
  if(req.session.data['showfilters']=="true"){
    req.session.data['showfilters']="false"
    res.redirect("/design-sprint-35/document-library/index-3");
  }
  else {
    req.session.data['showfilters']="true"
    res.redirect("/design-sprint-35/document-library/index-3");

  }
});

router.post("/design-sprint-35/show-hide-filters-v1", function(req, res) {
  if(req.session.data['showfilters']=="true"){
    req.session.data['showfilters']="false"
    res.redirect("/design-sprint-35/document-library/index-v1");
  }
  else {
    req.session.data['showfilters']="true"
    res.redirect("/design-sprint-35/document-library/index-v1");

  }
});

router.post("/design-sprint-35/show-hide-filters-v2", function(req, res) {
  if(req.session.data['showfilters']=="true"){
    req.session.data['showfilters']="false"
    res.redirect("/design-sprint-35/document-library/index-v2");
  }
  else {
    req.session.data['showfilters']="true"
    res.redirect("/design-sprint-35/document-library/index-v2");

  }
});

router.post("/design-sprint-35/show-hide-filters-v3", function(req, res) {
  if(req.session.data['showfilters']=="true"){
    req.session.data['showfilters']="false"
    res.redirect("/design-sprint-35/document-library/index-v3");
  }
  else {
    req.session.data['showfilters']="true"
    res.redirect("/design-sprint-35/document-library/index-v3");

  }
});

//Show hide doc lib filters
router.post("/design-sprint-35/clear-filters", function(req, res) {
  req.session.data['filtersapplied'] = "false"
    res.redirect("document-library");
});

//Apply doc lib filters
router.post("/design-sprint-35/apply-filters", function(req, res) {
  req.session.data['filtersapplied'] = "true"
    res.redirect("document-library");


});

//Apply doc lib filters
router.post("/design-sprint-35/apply-filters-2", function(req, res) {
  req.session.data['filtersapplied'] = "true"
  req.session.data['showfilters'] = "false"
  req.session.data['results'] = "true"
    res.redirect("/design-sprint-35/document-library/index-2");


});
//Apply doc lib filters
router.post("/design-sprint-35/apply-filters-3", function(req, res) {
  req.session.data['filtersapplied'] = "true"
  req.session.data['showfilters'] = "false"
  req.session.data['results'] = "true"
    res.redirect("/design-sprint-35/document-library/index-3");


});


//Apply doc lib filters
router.post("/design-sprint-35/apply-filters-v1", function(req, res) {
  req.session.data['filtersapplied'] = "true"
  req.session.data['showfilters'] = "false"
  req.session.data['results'] = "true"
    res.redirect("/design-sprint-35/document-library/index-v1");


});

router.post("/design-sprint-35/apply-filters-v2", function(req, res) {
  req.session.data['filtersapplied'] = "true"
  req.session.data['showfilters'] = "false"
  req.session.data['results'] = "true"
    res.redirect("/design-sprint-35/document-library/index-v2");


});

router.post("/design-sprint-35/apply-filters-v3", function(req, res) {
  req.session.data['filtersapplied'] = "true"
  req.session.data['showfilters'] = "false"
  req.session.data['results'] = "true"
    res.redirect("/design-sprint-35/document-library/index-v3");


});

/// representations filtersapplied
router.post("/design-sprint-35/reps-show-hide-filters", function(req, res) {
  if(req.session.data['showrepfilters']=="true"){
    req.session.data['showrepfilters']="false" ;
    req.session.data['repfilterlabel']="Show" ;
    res.redirect("relevant-representations/index");
  }
  else {
    req.session.data['showrepfilters']="true" ;
    req.session.data['repfiltersapplied'] = ""
    req.session.data['doccount'] = ""
    req.session.data['repfilterlabel']="Hide" ;
    res.redirect("relevant-representations/index");

  }
});


//Apply rep filters
router.post("/design-sprint-35/apply-rep-filters", function(req, res) {
  req.session.data['repfiltersapplied'] = "Yes"
  req.session.data['doccount'] = "3"
  req.session.data['showrepfilters'] = "false"
  req.session.data['repfilterlabel']="Show" ;
  req.session.data['results'] = "true"
    res.redirect("relevant-representations/index");


});

router.get("/design-sprint-35/rep-filter-start", function(req, res) {
req.session.data['showrepfilters']="true" ;
req.session.data['repfilterlabel']="Hide" ;
  res.redirect("relevant-representations/index");

  });

/// Timetable data stuff

//
router.get("/design-sprint-35/accordion", function(req, res) {
  req.session.data['accordion-default-content-1'] = true;
  req.session.data['accordion-default-content-2'] = "false";
    console.log (req.session.data['accordion-default-content-1']);
    console.log (req.session.data['accordion-default-content-2']);
    res.redirect("/design-sprint-35/timetable/timetable-upcoming-first-accordion");


});


router.get('/design-sprint-35/start', function (req, res) {

req.session.data['projectname'] = "Drax Bioenergy with Carbon Capture and Storage Project" ;
req.session.data['deadline'] = "Deadline 9"
let storedDeadlines = loadDeadlineData();
req.session.data['error']= false;
req.session.data['deadlineitemlist'];
req.session.data['deadlineitemlist']= storedDeadlines;
console.log (req.session.data['deadlineitemlist']);

res.render("design-sprint-35/start");
})



router.get('/design-sprint-35/timetable/timetableload', function (req, res) {
console.log("The get is running");



  req.session.data['Timetable-data'] = [
  	{
  		"title" : "Procedural Deadline A",
  		"description" : "Procedural Deadline A\r\n\r\nDeadline for receipt by the ExA of: Written submissions on Examination procedure, including draft timetable\r\n* Requests to speak at the Preliminary Meeting Part 1\r\n* Requests to speak at Issue Specific Hearing 1 on the draft Development Consent Order",
  		"date_of_event" : "08 March 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Preliminary Meeting",
  		"description" : "The purpose of the Preliminary Meeting is to consider how the application will be examined.",
  		"date_of_event" : "12 March 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Preliminary Meeting",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Issue Specific Hearing 1 (ISH1)",
  		"description" : "Issue Specific Hearing 1 (ISH1)\r\n\r\nDraft Development Consent Order",
  		"date_of_event" : "13 March 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Issue Specific Hearing",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Deadline 1",
  		"description" : [
              {"model":"Sentra",
              "model":"Maxima",
              "model":"Skyline"}
          ],
  		"date_of_event" : "29 March 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Deadline 2",
  		"description" : "Deadline 2 (D2)\r\n\r\nDeadline for:\r\n* Responses to ExQ1\r\n* Written Representations (WR) and summaries of any WR exceeding 1500 words\r\n* Local Impact Reports (LIR) from local authorities\r\n* Comments on the Applicant’s proposed ASI itinerary\r\n* Comments on any submissions received by D1\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules",
  		"date_of_event" : "16 April 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Deadline 3",
  		"description" : "Deadline 3 (D3)\r\n\r\nDeadline for:\r\n* Comments on responses to the ExQ1\r\n* Comments on WRs\r\n* Responses to comments made on RRs\r\n* Comments on LIRs\r\n* Comments on any submissions received by D2\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules\r\n\r\nRequested from the Applicant only:\r\n* Progressed Statements of Common Ground (SoCG) and Statement of Commonality of the Statements of Common Ground (SCSoCG)\r\n* An updated version of the dDCO in clean and tracked versions and a schedule of changes\r\n* An updated Compulsory Acquisition Schedule (CAS) in clean and tracked versions\r\n* Schedule of changes to the Book of Reference (BoR)\r\n* Updated Guide to the Application",
  		"date_of_event" : "30 April 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Procedural Deadline B",
  		"description" : "Procedural Deadline B\r\n\r\nDeadline for:\r\n* Registration for ISH2, ISH3, ISH4 and CAH",
  		"date_of_event" : "08 May 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Issue Specific Hearing 2 (ISH2)",
  		"description" : "Issue Specific Hearing on Environmental Matters",
  		"date_of_event" : "14 May 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Issue Specific Hearing",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Issue Specific Hearing 3 (ISH3)",
  		"description" : "Issue Specific Hearing on Traffic, Transport and Socio-Economic Matters",
  		"date_of_event" : "15 May 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Issue Specific Hearing",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Compulsory Acquisition Hearing (CAH)",
  		"description" : ".",
  		"date_of_event" : "16 May 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Compulsory Acquisition Hearing",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Issue Specific Hearing 4 (ISH4)",
  		"description" : "Issue Specific Hearing on draft Development Consent Order",
  		"date_of_event" : "16 May 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Issue Specific Hearing",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Deadline 4",
  		"description" : "Deadline 4 (D4)\r\n\r\nDeadline for:\r\n* Post Hearing submissions including written submissions of oral case\r\n* Comments on any submissions received by D3\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules\r\n\r\nRequested from the Applicant only:\r\n* Progressed SoCG and SCSoCG\r\n* An updated version of the dDCO in clean and tracked versions and a schedule of changes\r\n* An updated CAS in clean and tracked versions\r\n* Updated Guide to the Application",
  		"date_of_event" : "23 May 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Unaccompanied Site Inspection",
  		"description" : "If Required",
  		"date_of_event" : "28 May 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Site Visit (Unaccompanied)",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Publication by the ExA of",
  		"description" : "The ExA’s further Written Questions (ExQ2), if required",
  		"date_of_event" : "04 June 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Procedural Decision",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Deadline 5",
  		"description" : "Deadline 5 (D5)\r\n\r\nDeadline for:\r\n* Responses to ExQ2 if required\r\n* Comments on any submissions received by D4\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules\r\n\r\nRequested from the Applicant only:\r\n* Progressed SoCG and SCSoCG\r\n* An updated version of the dDCO in clean and tracked versions and a schedule of changes\r\n* An updated CAS in clean and tracked versions\r\n* Updated Guide to the Application\r\n* Schedule of changes to the BoR",
  		"date_of_event" : "19 June 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Deadline 6",
  		"description" : "Deadline 6 (D6)\r\n\r\nDeadline for:\r\n* Comments on responses to ExQ2, if required\r\n* Comments on any submissions received by D5\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules",
  		"date_of_event" : "02 July 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Deadline 7",
  		"description" : "Deadline 7 (D7)\r\n\r\nDeadline for:\r\n* Post Hearing submissions including written submissions of oral case, if required\r\n* Comments on any submissions received by D6\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules\r\n\r\nRequested from the Applicant only:\r\n* Progressed SoCG and SCSoCG\r\n* An updated version of the dDCO in clean and tracked versions and a schedule of changes\r\n* An updated CAS in clean and tracked versions\r\n* Updated Guide to the Application",
  		"date_of_event" : "19 July 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Publication by the ExA of",
  		"description" : "Report on the Implications for European Sites\r\n(RIES) (if required)",
  		"date_of_event" : "23 July 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Procedural Decision",
  		"Status" : "Closed"
  	},
    {
  		"title" : "Issue Specific Hearing 5 (ISH5)",
  		"description" : "Issue Specific Hearing on draft Development Consent Order",
  		"date_of_event" : "12 August 2022",
  		"timetable_type" : "Events",
  		"type_of_event" : "Issue Specific Hearing",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Deadline 8",
  		"description" : "Deadline 8 (D8)\r\n\r\nDeadline for:\r\n* Comments on the RIES (if required)\r\n* Comments on the ExA’s proposed changes to the draft DCO\r\n* Responses to the ExA’s Additional Questions (ExQ3)\r\n* Comments on any submissions received by D7\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules\r\n\r\nRequested from the Applicant only:\r\n* Progressed SoCG and SCSoCG\r\n* An updated version of the dDCO in clean and tracked versions and a schedule of changes\r\n* An updated CAS in clean and tracked versions\r\n* Updated Guide to the Application\r\n* Schedule of changes to the BoR",
  		"date_of_event" : "13 August 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Closed"
  	},
  	{
  		"title" : "Deadline 9",
  		"description" : "Deadline 9 (D9)\r\n\r\nDeadline for:\r\n* Comments on any submissions received by D8\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules\r\n\r\nRequested from the Applicant only:\r\n* Final SoCG and SCSoCG\r\n* Final dDCO in MS Word clean and tracked versions\r\n* Final Schedule of changes to the dDCO\r\n* SI template validation report\r\n* Final Book of Reference, and schedule of changes\r\n* Final Compulsory Acquisition Schedule, in clean and tracked versions\r\n* Final updated Guide to the Application",
  		"date_of_event" : "27 August 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Open"
  	},
  	{
  		"title" : "Deadline 10",
  		"description" : "Deadline 10 (D10)\r\n\r\nDeadline for:\r\n* Comments on any submissions received by D9\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules",
  		"date_of_event" : "03 September 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Open"
  	}
  ]



          var deadlineItems = [];
        deadlineItems.push({id : 'Deadline 1', name : 'Comments on RRs'});
        deadlineItems.push({id : 'Deadline 1', name : 'Comments on updated application documents'});
            deadlineItems.push({id : 'Deadline 1', name : 'Notification by Statutory Parties of their wish to be considered as an Interested Party (IP) by the ExA'});
        deadlineItems.push({id : 'Deadline 1', name : 'Notification of wish to speak at an Open Floor Hearing (OFH'});
            deadlineItems.push({id : 'Deadline 1', name : 'Notification of wish to speak at a Compulsory Acquisition Hearing (CAH)'});
        deadlineItems.push({id : 'Deadline 1', name : 'Request to receive future correspondence by email'});
            deadlineItems.push({id : 'Deadline 1', name : 'Request to receive future correspondence by email'});



        deadlineItems.push({id : 'Deadline 2', name : 'Responses to ExQ1'});
      deadlineItems.push({id : 'Deadline 2', name : 'Written Representations (WR) and summaries of any WR exceeding 1500 words'});
    deadlineItems.push({id : 'Deadline 2', name : 'Responses to ExQ1'});
      deadlineItems.push({id : 'Deadline 2', name : 'Comments on the Applicant’s proposed ASI itinerary'});

    deadlineItems.push({id : 'Deadline 2', name : 'Comments on any submissions received by D1'});
      deadlineItems.push({id : 'Deadline 2', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});



            deadlineItems.push({id : 'Deadline 3', name : 'Comments on responses to the ExQ1'});
      deadlineItems.push({id : 'Deadline 3', name : 'Written Representations (WR) and summaries of any WR exceeding 1500 words'});
    deadlineItems.push({id : 'Deadline 3', name : 'Responses to comments made on RRs'});
      deadlineItems.push({id : 'Deadline 3', name : 'Comments on LIRs'});
      deadlineItems.push({id : 'Deadline 3', name : 'Comments on any submissions received by D2'});
    deadlineItems.push({id : 'Deadline 3', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});
      deadlineItems.push({id : 'Deadline 3', name : 'Comments on WRs'});

    deadlineItems.push({id : 'Procedural Deadline B', name : 'Registration for ISH2, ISH3, ISH4 and CAH'});



    deadlineItems.push({id : 'Deadline 4', name : 'Post Hearing submissions including written submissions of oral case'});
      deadlineItems.push({id : 'Deadline 4', name : 'Progressed SoCG and SCSoCG'});
      deadlineItems.push({id : 'Deadline 4', name : 'An updated CAS in clean and tracked versions'});
        deadlineItems.push({id : 'Deadline 4', name : 'Updated Guide to the Application'});

                deadlineItems.push({id : 'Deadline 3', name : 'Responses to ExQ1'});



      deadlineItems.push({id : 'Deadline 5', name : 'Progressed SoCG and SCSoCG'});
    deadlineItems.push({id : 'Deadline 5', name : 'An updated version of the dDCO in clean and tracked versions and a schedule of changes'});
      deadlineItems.push({id : 'Deadline 5', name : 'Schedule of changes to the BoR'});
          deadlineItems.push({id : 'Deadline 5', name : 'Written Representations (WR) and summaries of any WR exceeding 1500 words'});

     -
     -


    deadlineItems.push({id : 'Deadline 6', name : 'Comments on any submissions received by D1'});
      deadlineItems.push({id : 'Deadline 6', name : 'Comments on any submissions received by D5'});
    deadlineItems.push({id : 'Deadline 6', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});



    deadlineItems.push({id : 'Deadline 7', name : '  Draft SoCGs between the Applicant and Cambridgeshire County Council'});
      deadlineItems.push({id : 'Deadline 7', name : 'Draft SoCGs between the Applicant and  Natural England'});
        deadlineItems.push({id : 'Deadline 7', name : 'Draft SoCGs between the Applicant and Western Power (East Midlands) Plc'});
          deadlineItems.push({id : 'Deadline 7', name : 'Draft SoCGs between the Applicant and  Anglian Water Limited'});

  -

    deadlineItems.push({id : 'Deadline 8', name : 'Comments on the RIES (if required)'});
      deadlineItems.push({id : 'Deadline 8', name : 'Responses to the ExAs Additional Questions (ExQ3)'});
    deadlineItems.push({id : 'Deadline 8', name : 'Comments on any submissions received by D7'});
    deadlineItems.push({id : 'Deadline 8', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});

              deadlineItems.push({id : 'Deadline 5', name : 'Written Representations (WR) and summaries of any WR exceeding 1500 words'});


    deadlineItems.push({id : 'Deadline 9', name : 'Comments on any submissions received by Deadline 8'});
      deadlineItems.push({id : 'Deadline 9', name : 'Any further information requested by the Examining Authority under Rule 17 of the Examination Rules'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final Statements of Common Ground (SoCG) and Statement of Commonality of the Statements of Common Ground (SCSoCG)'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final draft Development Consent Order in MS Word clean and tracked versions'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final Schedule of changes to the draft Development Consent Order'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final Compulsory Acquisition Schedule, in clean and tracked versions'});
              deadlineItems.push({id : 'Deadline 9', name : 'Final updated Guide to the Application'});
              deadlineItems.push({id : 'Deadline 9', name : 'Other'});



             -

    deadlineItems.push({id : 'Deadline 10', name : 'Comments on any submissions received by D9'});
      deadlineItems.push({id : 'Deadline 10', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});
      deadlineItems.push({id : 'Deadline 10', name : 'Other'});



          req.session.data['deadlineItems'] = deadlineItems;
res.redirect('/design-sprint-35/timetable/timetable');
})
// end of timetable data stuff


// reg form
router.post("/design-sprint-35/register/type-of-party", function (req, res) {
  // get the type of interested party
  var sprintSixTypeOfParty =
    req.session.data["mvp-type-of-interested-party"];

  // if an individual, show individual flow
  if (sprintSixTypeOfParty == "myself") {
    res.redirect("myself/full-name");

    // if an organisation, show organisation flow
  } else if (sprintSixTypeOfParty == "my-household") {
    res.redirect("organisation/full-name");

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
  "/design-sprint-35/register/on-behalf/representing-who",
  function (req, res) {
    // get the type of interested party
    var representingFor = req.session.data["representingFor"];
    // console.log("Here C")

    // if an individual, show individual flow
    if (representingFor == "A household") {
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

router.get("/design-sprint-35/get-updates/unsubscribe-answer",
  function (req, res) {
    var unsubscribeChange = req.session.data["type-of-updates"];
    console.log(unsubscribeChange);
    if (unsubscribeChange == "unsubscribe"){
      res.redirect("unsubscribe-confirm");
    }
    else if (unsubscribeChange == "change-address")
    {
      res.redirect("email-change");

    }
    else if (unsubscribeChange == "change-frequency")
    {
      res.redirect("type-of-updates-change");
    }

  }
);



router.post("/design-sprint-35/projects/view-case-form-answer", function(req, res) {

  if( req.session.data['view-case-position'] ){

  let choice = req.session.data['view-case-position']
  choice  = 0;
    console.log("Here CB")
    console.log(req.session.data['view-case-position'])
  //console.log(req.session.data['newProjectList'])
  console.log(req.session.data['newProjectList'][choice])
  req.session.data['newProjectList'][choice];
  req.session.data['case'] = req.session.data['newProjectList'][choice];
  //console.log(req.session.data['representation']);
  }


  //  res.redirect("/design-sprint-35/project-overview/index-dynamic-data");
  res.redirect("/design-sprint-35/project-overview/index-dynamic-data-v2");

});



router.get("/design-sprint-35/projects/projects-load", function (req, res) {
    console.log(req.query.with);
      req.session.data['drax'] = "false" ;
const  filelistcb = require('../data/project-list-play.json')

console.log(filelistcb[0].projectname);
    req.session.data['filtersapplied'] = "false"
req.session.data['Mefilylist'] = filelistcb ;

//
//var myProjectList = [projectList] ;

//console.log(myProjectList.projectname)

fs.readFile('app/data/project-list.json', 'utf8', (error, data) => {
     if(error){
        console.log(error);
        return;
     }
     //console.log(JSON.parse(data));
    // console.log(JSON.parse(data));
     let filelistcb = JSON.parse(data) ;
     //console.log(filelistcb);
})



  //req.session.data['FileProjectList'] = myProjectList;
//   console.log(req.session.data['FileProjectList']);


stages = new Array();
stages[0] = "Pre-application";
stages[1] ="Acceptance"; ;
stages[2] = "Pre-examination";
stages[3] = "Examination";
stages[4] ="Recommendation";
stages[5] = "Decision";
stages[6] = "Post decision";
stages[7] = "Withdrawn";

req.session.data['stages'] = stages;
//console.log("write");
//console.log(req.session.data['stages']);


subtypes = new Array();
subtypes[0] = "An Industrial Process or Processes";
subtypes[1] = "Leisure";
subtypes[2] = "Generating Station";
subtypes[3] = "Electric line";
subtypes[4] = "Underground Gas Storage Facility";
subtypes[5] = "Gas Transporter Pipe-line";
subtypes[6] = "Other Pipe-line";
subtypes[7] = "Electric line";
subtypes[8] = "Highways";
subtypes[9] = "Airports";
subtypes[10] = "Harbour Facilities";
subtypes[11] = "Railways";
subtypes[12] = "Rail Freight Interchanges";
subtypes[13] = "Transfer of Water Resources";
subtypes[14] = "Hazardous Waste Facilities";
subtypes[15] = "Waste Water treatment Plants";

req.session.data['subtypes'] = subtypes;



types = new Array();
types[0] = "Business and commercial";
types[1] ="Energy";
types[2] = "Transport";
types[3] = "Water";
types[4] ="Waste";
types[5] = "Waste water";

req.session.data['types'] = types;

outcome = new Array();
outcome[0] = "Consent granted";
outcome[1] ="Consent refused";
outcome[2] = "withdrawn";
outcome[3] = "Not decided";


req.session.data['outcome'] = outcome;





location = new Array();
// location[0] = "East Midlands";
// location[1] = "Eastern";
// location[2] ="North East";
// location[3] = "North West";
// location[4] = "South East";
// location[5] ="South West";
// location[6] = "Wales";
// location[7] ="West Midlands";
// location[8] = "Yorkshire and the Humber";
// location[8] = "London";


location[0] = "North West";
location[1] = "North East";
location[2] ="Yorkshire and the Humber";
location[3] = "West Midlands";
location[4] = "East Midlands";
location[5] = "Eastern";
location[6] = "South West";
location[7] ="South East";
location[8] = "London";
location[9] = "Wales";




req.session.data['location'] = location;

say = new Array();
say[0] = "Register to have your say";
say[1] = "Have your say";
req.session.data['say'] = say;

req.session.data['stagesSecond'] = [
    {
      1 : "pre-application",
      "projectname" : "The London Resort",
      "stage" : "Withdrawn",
      "promotername" : "London Resort Company Holdings"
    },
    {
      2 : "EN060001",
      "projectname" : "Willington C Gas Pipeline",
      "stage" : "Decision",
      "promotername" : "RWE npower"
    }
]

  req.session.data['newProjectList'] = [

    {
      "casereference" : "EN010120",
      "projectname" : "Drax Bioenergy with Carbon Capture and Storage Project",
      "proposal" : "EN01 - Energy",
      "projectlocation" : "Swanscombe Peninsula and land adjacent to Ebbsfleet Station",
      "stage" : "Acceptance",
      "promotername" : "London Resort Company Holdings",
      "webaddress" : "",
      "summary" : "Leisure and entertainment resort including a theme park, hotels, bars, restaurants, business space, training academy, monorail and associated infrastructure works. The application is anticipated to be submitted to the Planning Inspectorate in 2020.",
      "projectemailaddress" : "LondonResort@planninginspectorate.gov.uk"
    },
	{
		"casereference" : "EN010120",
		"projectname" : "The London Resorties",
		"proposal" : "BC08 - Leisure",
		"projectlocation" : "Swanscombe Peninsula and land adjacent to Ebbsfleet Station",
		"stage" : "Acceptance",
		"promotername" : "London Resort Company Holdings",
		"webaddress" : "",
		"summary" : "Leisure and entertainment resort including a theme park, hotels, bars, restaurants, business space, training academy, monorail and associated infrastructure works. The application is anticipated to be submitted to the Planning Inspectorate in 2020.",
		"projectemailaddress" : "LondonResort@planninginspectorate.gov.uk"
	},
	{
		"casereference" : "EN060001",
		"projectname" : "Willington C Gas Pipeline",
		"proposal" : "EN06 - Gas Transporter Pipe-lines",
		"projectlocation" : "Near Burton on Trent",
		"stage" : "Pre-application",
		"promotername" : "RWE npower",
		"webaddress" : "http://www.rwe.com/web/cms/en/368514/rwe-npower/about-us/our-businesses/new-power-stations",
		"summary" : "The application is for gas pipeline approximately 27km in length, buried for its entire length, with an above ground installation at the start point. The proposed pipeline will start near Yoxall in Staffordshire, where a connection will be made into the national transmission system, and the pipeline will terminate at a block valve within the site of the new Willington C Power Station in Derbyshire. The construction of the pipeline will be carried out within a temporary construction corridor, nominally 30m in width, but widening where additional working area is required. Three temporary construction compounds are required. One permanent access is required at the above ground installation.",
		"projectemailaddress" : "nienquiries@planninginspectorate.gov.uk"
	},
	{
		"casereference" : "TR010014",
		"projectname" : "A30 Temple to Higher Carblake Improvement",
		"proposal" : "TR01 - Highways",
		"projectlocation" : "Approximately 3 miles north east of Bodmin",
		"stage" : "Pre-application",
		"promotername" : "Cornwall Council",
		"webaddress" : "http://www.cornwall.gov.uk/default.aspx?page=33044",
		"summary" : "The scheme involves the upgrading of the existing 4.5km stretch of single carriageway road to a dual carriageway standard, with the provision of 3 new grade separated junctions with over bridges. The existing side road traffic movements will be rationalised and new public highway will be constructed to link the side roads with the 3 new junctions.",
		"projectemailaddress" : "nienquiries@planninginspectorate.gov.uk"
	},
	{
		"casereference" : "TR010007",
		"projectname" : "A160 - A180 Port of Immingham Improvement",
		"proposal" : "TR01 - Highways",
		"projectlocation" : "Between Brocklesby Interchange and the Port of Immingham, North and North East Lincolnshire",
		"stage" : "Acceptance",
		"promotername" : "Highways Agency",
		"webaddress" : "http://www.highways.gov.uk/roads/road-projects/a160a180-improvements-immingham/",
		"summary" : "Works to the A160 between the junction with the A180 at Brocklesby Interchange and the Port of Immingham. The project would widen the existing single carriageway section of the A160 to dual carriageway, with associated works to junctions along the length of the route.",
		"projectemailaddress" : "nienquiries@planninginspectorate.gov.uk"
	}
]




      //req.session.data['newProjectList'] = ""

  //  let showlist = req.session.data['newProjectList'] ;
  console.log("Yes here");
  if (req.query.with == "filter")  {
      res.redirect("index-with-more-filters");
      }
      else {
    res.redirect("index");
    }
}
);


router.post("/design-sprint-35/project-filter-answer",
  function (req, res) {
    //var unsubscribeChange = req.session.data["type-of-updates"];
    let  mylocation = req.session.data['chk-location'];
    console.log(mylocation);
    if (mylocation)
    {
      console.log(mylocation.length);
      req.session.data['tag-location-show']= "true" ;
    }

    //req.session.data["mvp-type-of-interested-party"];
   //console.log(mylocation.length);
    req.session.data['filtersapplied'] = "true" ;
  req.session.data['drax'] = "false" ;
  let filelistall = require('../data/project-list-play.json')
  req.session.data['Mefilylist'] = filelistall ;

      res.redirect("/design-sprint-35/projects/index");


});


router.post("/design-sprint-35/project-filterv2-answer",
  function (req, res) {
    //var unsubscribeChange = req.session.data["type-of-updates"];
    let  mylocation = req.session.data['chk-location'];
    console.log(mylocation);
    if (mylocation)
    {
      console.log(mylocation.length);
      req.session.data['tag-location-show']= "true" ;
    }

    //req.session.data["mvp-type-of-interested-party"];
   //console.log(mylocation.length);
    req.session.data['filtersapplied'] = "true" ;
  req.session.data['drax'] = "false" ;
  let filelistall = require('../data/project-list-play.json')
  req.session.data['Mefilylist'] = filelistall ;

      res.redirect("/design-sprint-35/projects/index-with-more-filters");


});



router.post("/design-sprint-35/reps-filter-answer",
  function (req, res) {
    //var unsubscribeChange = req.session.data["type-of-updates"];
    let  mylocation = req.session.data['chk-location'];
    console.log(mylocation);
    if (mylocation)
    {
      console.log(mylocation.length);
      req.session.data['tag-location-show'] = "true" ;
    }

      req.session.data['filtersapplied'] = "true" ;
      res.redirect("/design-sprint-35/wide-nav/relevant-reps");


});





router.post("/design-sprints-34/form-drax",
  function (req, res) {
    //var unsubscribeChange = req.session.data["type-of-updates"];
    req.session.data['drax'] = "true" ;

  req.session.data['Mefilylist'] =   [{
      "casereference" : "EN010120",
      "projectname" : "Drax Bioenergy with Carbon Capture and Storage Project",
      "proposal" : "EN01 - Generating Stations",
      "projectlocation" : "Immedtiately to the East of Dogger Bank C Wind Farm, in the North Sea.",
      "stage" : 4,
      "promotername" : "Gatroben Developments 2 Limited",
      "webaddress" : "https://www.sserenewables.com/",
      "summary" : "Dogger Bank D (DBD) Wind Farm encompass a circa 1300MW offshore wind farm, offshore and onshore high voltage transmission infrastructure connecting into the National Grid or another offtake solution",
      "projectemailaddress" : "doggerbankd@planninginspectorate.gov.uk",
      "DateofAcceptance" : "0000-00-00",
      "DateofApplication" : "0000-00-00"
    }
  ]

  //Medrax = req.session.data['drax'] = filelistcb ;

    //req.session.data["mvp-type-of-interested-party"];
   console.log(req.session.data['drax']);
     req.session.data['filtersapplied'] = "false" ;


      res.redirect("/design-sprint-35/projects/index-2");


});


};

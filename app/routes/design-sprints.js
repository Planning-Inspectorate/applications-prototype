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


    deadlineItems.push({id : 'Deadline 9', name : 'Comments on any submissions received by D8'});
      deadlineItems.push({id : 'Deadline 9', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final SoCG and SCSoCG'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final dDCO in MS Word clean and tracked versions'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final Schedule of changes to the dDCO'});
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



/// Timetable data stuff

router.get('/design-sprint-1/start', function (req, res) {



req.session.data['projectname'] = "Drax Bioenergy with Carbon Capture and Storage Project" ;
let storedDeadlines = loadDeadlineData();
req.session.data['deadlineitemlist'];
req.session.data['deadlineitemlist']= storedDeadlines;
console.log (req.session.data['deadlineitemlist']);

res.render("design-sprint-1/start");
})



router.get('/design-sprint-1/timetable/timetableload', function (req, res) {
console.log("The get is running")
console.log (req.query.form)

let examForm = req.query.form
console.log (examForm)
  req.session.data['Timetable-data'] = [
  	{
  		"title" : "Procedural Deadline A",
  		"description" : "Procedural Deadline A\r\n\r\nDeadline for receipt by the ExA of: Written submissions on Examination procedure, including draft timetable\r\n* Requests to speak at the Preliminary Meeting Part 1\r\n* Requests to speak at Issue Specific Hearing 1 on the draft Development Consent Order",
  		"date_of_event" : "8 March 2022",
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
  		"date_of_event" : "8 May 2022",
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
  		"date_of_event" : "4 June 2022",
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
  		"date_of_event" : "2 July 2022",
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
  		"Status" : ""
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
  		"date_of_event" : "3 September 2022",
  		"timetable_type" : "Exams",
  		"type_of_event" : "Deadline",
  		"Status" : "Open"
  	}
  ]

    req.session.data['Timetable-data-short'] = [

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
    		"Status" : "Open"
    	},
      	{
    		"title" : "Issue Specific Hearing 2 (ISH2)",
    		"description" : "Issue Specific Hearing on Environmental Matters",
    		"date_of_event" : "14 May 2022",
    		"timetable_type" : "Events",
    		"type_of_event" : "Issue Specific Hearing",
    		"Status" : ""
    	},
    	{
    		"title" : "Deadline 3",
    		"description" : "Deadline 3 (D10)\r\n\r\nDeadline for:\r\n* Comments on any submissions received by D9\r\n* Any further information requested by the ExA under Rule 17 of the Examination Rules",
    		"date_of_event" : "3 June 2022",
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


    deadlineItems.push({id : 'Deadline 9', name : 'Comments on any submissions received by D8'});
      deadlineItems.push({id : 'Deadline 9', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final SoCG and SCSoCG'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final dDCO in MS Word clean and tracked versions'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final Schedule of changes to the dDCO'});
        deadlineItems.push({id : 'Deadline 9', name : 'Final Compulsory Acquisition Schedule, in clean and tracked versions'});
              deadlineItems.push({id : 'Deadline 9', name : 'Final updated Guide to the Application'});
              deadlineItems.push({id : 'Deadline 9', name : 'Other'});



             -

    deadlineItems.push({id : 'Deadline 10', name : 'Comments on any submissions received by D9'});
      deadlineItems.push({id : 'Deadline 10', name : 'Any further information requested by the ExA under Rule 17 of the Examination Rules'});
      deadlineItems.push({id : 'Deadline 10', name : 'Other'});



          req.session.data['deadlineItems'] = deadlineItems;
if (examForm == "short")
{
res.redirect('/design-sprint-1/timetable/timetable-basic-data');
}
else {
  res.redirect('/design-sprint-1/timetable/timetable');
}

})
// end of timetable data stuff




};

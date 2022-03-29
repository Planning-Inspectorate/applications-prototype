/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  // show/hide filters in the doc library
  $("#toggleFilters").click(function() {
    // change the show/hide text on the button
    $(this).text(function(i, text){
      return text === "Show search and filters" ? "Hide search and filters" : "Show search and filters";
    })
    // toggle the filter section
    $("#expandingFilterSection").toggle();
  })

  // show/hide filters when user clicks apply
  $("#closeFilters").click(function() {
    // change the show/hide text on the button
    $("#toggleFilters").text(function(i, text){
      return text === "Show search and filters" ? "Hide search and filters" : "Show search and filters";
    })
    // toggle the filter section
    $("#expandingFilterSection").toggle();
  })

  $('#stages').on('change', function(){
    let selectedStage = $('#stages').find(":selected").text()
    if(selectedStage == "All stages"){
      $("article").show();
    } else {
      $("article[data-stage='" + selectedStage + "']").show();
      $("article:not([data-stage='" + selectedStage + "'])").hide();
    }
  })
 
  $('#submittedBy').on('change', function(){
    let selectedSubmittedBy = $('#submittedBy').find(":selected").text()
    if(selectedSubmittedBy == "Anyone"){
      $("article").show();
    } else {
      $("article[data-submittedBy='" + selectedSubmittedBy + "']").show();
      $("article:not([data-submittedBy='" + selectedSubmittedBy + "'])").hide();
    }
  })

  $('#type').on('change', function(){
    let selectedTypes = $('#type').find(":selected").text()
    if(selectedTypes == "All types"){
      $("article").show();
      $(".category").show();
    } else {
      $(".category[data-type='" + selectedTypes + "']").show();
      $("article[data-type='" + selectedTypes + "']").show();

      $("article:not([data-type='" + selectedTypes + "'])").hide();
      $(".category:not([data-type='" + selectedTypes + "'])").hide();
    }
  })

  // get the 3 lists
  let type = $("#groupbytype");
  let date = $("#groupbydate");
  let stage = $("#groupbystage");

  // hide stage and date by default
  stage.hide()
  date.hide()

  // when the group by radio is changed
  $('#groupby').on('change', function(e){

    // capture the current value of the radios
    let currentGroup = e.target.value;

    // show/hide sections based on selection
    switch(currentGroup) {
      case "dates":
        date.show()
        type.hide()
        stage.hide()
        break;
      case "type":
        type.show()
        stage.hide()
        date.hide()
        break;
      case "stage":
        stage.show()
        type.hide()
        date.hide()
        break;  
      default:
        type.show()
        stage.hide()
        date.hide()
    }
  })

  $("#keyword").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#documents article").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.app-back-to-top').addClass("app-back-to-top--fixed");
    } else {
      $('.app-back-to-top').removeClass("app-back-to-top--fixed");
    }
  });

})

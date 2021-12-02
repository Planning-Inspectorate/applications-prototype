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

})

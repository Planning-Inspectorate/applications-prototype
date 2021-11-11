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
      return text === "Show filters" ? "Hide filters" : "Show filters";
    })
    // toggle the filter section
    $("#expandingFilterSection").toggle();
  })

})

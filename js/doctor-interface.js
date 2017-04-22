var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function (doctors) {

  doctors.forEach(function(doctor){

    $("#doctor-search-results").append("<h3>" + doctor.firstName +
          " " + doctor.lastName + ", " + doctor.title + "</h3");
    $("#doctor-search-results").append("<img src='" + doctor.image + "' + alt='Doctor Image'>");
    $("#doctor-search-results").append("<p>" + doctor.bio + "</p>");
    $("#doctor-search-results").append("<br>");
    
    // $("doctor-search-results").append("<div class=doctor>" +
    //   "<div class='well'"> +
    //     "<ul class='nav nav-tabs'" +
    //       "<li role='presentation' class='active'>" +
    //         "<span id='#overview'>Overview</span>" +
    //       "</li>" +
    //       "<li role='presentation'" +
    //         "<span id='#bio'>Bio</span>" +
    //       "</li>" +
    //       "<li role='presentation' class='active'>" +
    //         "<span='Contact'>Contact</span>" +
    //       "</li>" +
    //     "</ul>" +
    //   "</div>" +
    // "</div>" +
    // "<br>");

    // $("#doctor-search-results").append("<div class='doctor'>" +
    //   "<div class='media'>" +
    //     "<div class='media-left media-middle'>" +
    //       "<img class='media-object' src='" +
    //         doctor.image + "' alt='Doctor Thumbnail'>" +
    //       "</div>" +
    //       "<div class='media-body'>" +
    //         "<h3 class='media-heading'>" +
    //           doctor.firstName + " " + doctor.lastName +
    //           ", " + doctor.title +
    //         "</h3>" +
    //       "</div>" +
    //     "</div>" +
    //   "</div>" +
    //   "<p>" + doctor.bio + "</p>" +
    // "</div>" +
    // "<br>");

  });
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();

  $("#doctor-search").click(function() {
    $("#doctor-search-results").empty();
    var symptom = $("#symptom").val();
    currentDoctorObject.getDoctors(symptom, displayDoctors);
    $("#symptom").val("");
  });
});

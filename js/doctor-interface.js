var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function (doctors) {

  doctors.forEach(function(doctor){
    $("#doctor-search-results").append("<h3>" + doctor.firstName +
      " " + doctor.lastName + ", " + doctor.title + "</h3");
    $("#doctor-search-results").append("<img src='" + doctor.image + "' + alt='Doctor Image'>");
    $("#doctor-search-results").append("<p>" + doctor.bio + "</p>");
    $("#doctor-search-results").append("<br>");
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

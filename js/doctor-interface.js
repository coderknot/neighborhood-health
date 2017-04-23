var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function (doctors) {
  doctors.forEach(function(doctor) {
    $("#doctor-search-results").append('<div class="doctor">' +
      '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
          '<h3 class="panel-title">' + doctor.firstName +
            ' ' + doctor.lastName + ', ' + doctor.title +
          '</h3>' +
        '</div>' +
        '<div class="panel-body">' +
          '<div class="overview">' +
            '<img src="' + doctor.image + '" alt="Doctor Image">' +
            '<h4>Practice: ' + doctor.practice + '</h4>' +
          '</div>' +
          '<div class="summary">' +
            '<h4>Biography:</h4>' +
            '<p>' + doctor.bio + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>');
  });
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();

  $("#doctor-search").click(function() {
    $("#doctor-search-results").empty();
    var symptom = $("#symptom").val();
    currentDoctorObject.getDoctors(symptom, displayDoctors);
    $("#symptom").val('');
  });
});

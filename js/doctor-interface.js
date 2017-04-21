var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();

  $("#doctor-search").click(function() {
    var medicalIssue = $("#medical-issue").val();
    console.log(medicalIssue);
    currentDoctorObject.getDoctors(medicalIssue);
    // $("medical-issue").val("");
  });
});

var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(symptom, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' +
    symptom +
    '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey)
    .then(function(response) {
      var doctors = [];

      response.data.forEach(function(doctor, displayDoctors) {
        var singleDoctor = {};
        singleDoctor.firstName = doctor.profile.first_name;
        singleDoctor.lastName = doctor.profile.last_name;
        singleDoctor.title = doctor.profile.title;
        singleDoctor.bio = doctor.profile.bio;
        if (doctor.profile.image_url === null) {
          singleDoctor.image = "./../img/default.jpg";
        } else {
          singleDoctor.image = doctor.profile.image_url;
        }
        doctors.push(singleDoctor);
      });

      displayDoctors(doctors);
    }).fail(function(error){
        console.log(error);
  });
};

exports.doctorModule = Doctor;

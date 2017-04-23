var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(symptom, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
      var doctors = [];

      response.data.forEach(function(doctor) {
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
        singleDoctor.practice = doctor.practices[0].name;

        doctors.push(singleDoctor);
      });

      displayDoctors(doctors);
    }).fail(function(error){
        console.log(error);
  });
};

exports.doctorModule = Doctor;

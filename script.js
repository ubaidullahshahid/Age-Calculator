function calculateAge(dob) {
  var currentDate = new Date();
  var dobDate = new Date(dob);

  var age = currentDate.getFullYear() - dobDate.getFullYear();
  var monthDiff = currentDate.getMonth() - dobDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < dobDate.getDate())
  ) {
    age--;
  }

  return age; 
}

var dob = prompt("Please enter your date of birth (YYYY-MM-DD):");
var age = calculateAge(dob);
alert("Your age is: " + age);

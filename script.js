//your JS code here. If required.
function showAlert(){
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;

  alert(
    "First Name: " + firstName + " " +
    "Last Name: " + lastName + " " +
    "Phone Number: " + phone + " " +
    "Email ID: " + email
  );
}
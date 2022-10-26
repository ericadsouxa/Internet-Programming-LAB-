document.addEventListener("DOMContentLoaded", init);

function init(event) {

    regForm = document.forms["registration"];

  regForm["register"].onclick = validateForm;
}

function validateForm(event) {

  if (!regForm["name"].value) {
    alert("* Please enter Name");
  }

  if (!regForm["department"].value) {
    alert("* Please select your department");
  }

  if (!regForm["position"].value) {
    alert("* Please select your position");
  }

  if (!regForm["gender"].value) {
    alert("* Please select your gender");
  }

  if (!regForm["email"].value) {
    alert("* Please enter Email");
  }
  if (!regForm["desc"].value) {
    alert("* Please enter Description");
  }
}
class validate {
  constructor(nameinput, emailinput, numberinput, message, addressinput) {
    if (
      nameinput == "" ||
      emailinput == "" ||
      numberinput == "" ||
      message == "" ||
      addressinput == ""
    ) {
      alert("Please fill all the fields");
      return false;
    } else if (nameinput && !nameinput.match(/^[A-z\s]+$/i)) {
      alert("Name can only contain letters and spaces");
      return false;
    } else if (!emailinput.match(/[A-z0-9]+[@]+[a-z]{5}[.]+[a-z]{3}/)) {
      alert("Please enter a valid email address");
      return false;
    } else if (!numberinput.match(/[+92][0-9]{12}/)) {
      alert(
        "Please enter a pakistani mobile number (+920000000000) without spaces"
      );
      return false;
    } else if (!addressinput.match(/[A-z0-9\W]/)) {
      alert("Please enter a Valid Address");
      return false;
    } else if (!addressinput.match(/[A-z]/)) {
      alert("Please write a message using Alphabets Only");
      return false;
    } else {
      alert("Feedback Submitted");
      window.location.reload();
      return true;
    }
  }
}

document.querySelector(".submitbtn").addEventListener("click", (e) => {
  e.preventDefault();
  let nameinput = document.querySelector(".nameinput").value;
  let emailinput = document.querySelector(".emailinput").value;
  let numberinput = document.querySelector(".numberinput").value;
  let message = document.querySelector(".messageinput").value;
  let addressinput = document.querySelector(".addressinput").value;
  let obj = new validate(
    nameinput,
    emailinput,
    numberinput,
    message,
    addressinput
  );
});

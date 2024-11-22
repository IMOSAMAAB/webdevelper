// Form validation script
document.querySelector("form").addEventListener("submit", function (event) {
  var name = document.querySelector('input[type="text"]').value;
  var email = document.querySelector('input[type="email"]').value;
  var message = document.querySelector("textarea").value;

  if (!name || !email || !message) {
    alert("All fields must be filled out!");
    event.preventDefault();
  }
});

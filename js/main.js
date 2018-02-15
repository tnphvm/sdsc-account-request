(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
         console.log("Executed");
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function showSubmitter() {
   var checkBox = document.getElementById("submitterInfo");
   var submitterModule = document.getElementById("submitter-module");

   if (checkBox.checked == true) {
      $("#submitter-module").slideDown();
   }
   else {
      $("#submitter-module").slideUp();
   }
}


function setInfiniteDate() {
   var checkBox = document.getElementById("infiniteEndDate");

   if (checkBox.checked == true) {
      document.getElementById("inputEndDate").value = "9999-01-01";
   }
   else {
      document.getElementById("inputEndDate").value = "";
   }
}
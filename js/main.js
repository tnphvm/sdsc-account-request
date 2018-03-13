/* Event listener for form submit. Validation checks will occur and will stop
* default submit actions if invalid entries are found. Otherwise, data is retrieved
* and the page will be redirected to the success page.
*/
$('#formRequest').submit(function(event) {
   // event.preventDefault();
   // console.log(event.defaultPrevented);

   // window.location.replace("http://stackoverflow.com");
   console.log("Submit function");

   let forms = document.getElementsByClassName('needs-validation');
   let allValid = true;

    let validation = Array.prototype.filter.call(forms, function(form) {
      console.log("Executed");

      if (form.checkValidity() === false) {
         // console.log("Bad input");
         allValid = false;
         event.preventDefault();
         event.stopPropagation();
      }

      form.classList.add('was-validated');
      console.log("Post-validation");

      if (allValid) {
         event.preventDefault();
         retrieveData(); nb 
         window.location.replace("/success-page.html");
      }
      else
         return false;
   });
});


/* Event listener to apply validation attributes when there is not at least
*  one checkbox for account types is not selected.
*/
$('[name="gridRadios"]').click(function() {
   let accountTypes = document.getElementsByName("gridRadios");
   let atLeastOne = false;

   let checkForOne = Array.prototype.filter.call(accountTypes, function(box) {
      if (box.checked )
         atLeastOne = true;
   });

   let applyAttr = Array.prototype.filter.call(accountTypes, function(box) {
      if (atLeastOne)
         box.removeAttribute("required");
      else
         box.setAttribute("required", "true");
   });
});


/* Event listener to toggle the view of the submitter module.
*/
$('#submitterInfo').click(function() {
   $('#submitter-module').slideToggle();
});


/* Event listener for when sponser info is different from submitter info;
*  Event will toggle submitter inputs to be required and fillable when shown.
*  Otherwise, submitter module is hidden and inputs are disabled.
*/
$('#submitterInfo').click(function() {
   $('#inputSubmitterName').prop('disabled', function(i, v) { return !v; });
   $('#inputSubmitterName').prop('required', function(i, v) { return !v; });

   $('#inputSubmitterEmail').prop('disabled', function(i, v) { return !v; });
   $('#inputSubmitterEmail').prop('required', function(i, v) { return !v; });


   $('#inputSubmitterPhone').prop('disabled', function(i, v) { return !v; });
   $('#inputSubmitterPhone').prop('required', function(i, v) { return !v; });
});


/* Event listener for when user checks "Unsure/Indefinite" for account end date.
*  When checked, form will fill in a date long into the future with the year '9999'.
*  Otherwise, user can choose the account end date.
*/
$('#infiniteEndDate').click(function() {
   let $endDateInput = $("#inputEndDate");

   if ($('#infiniteEndDate').prop('checked')) {
      $endDateInput.val("9999-01-01");
      $endDateInput.attr("disabled", "");
   }
   else {
      $endDateInput.val("");
      $endDateInput.removeAttr("disabled");
   }
      
});


/* Function to help retrieve all form data and organize the information
*  into a readable block.
*/
function retrieveData() {
   'use strict';
   // TODO: Before appending everything, remember to attach a "brief description" for the ticket
   // e.g. "SDSC ITSS Account Request". Double check with Ryan for specific desc.

   // console.log(document.getElementsByClassName("form-control"));
   // console.log($('.form-control:visible'));
   var input = $('.form-control:visible');
   var label = $('label:visible').not(".form-check-label");

   if (input.length != label.length) {
      console.log("Lengths are different.");
      return;
   }

   for (let i = 0; i < input.length; i++) {
      console.log(label[i].textContent + ": " + input[i].value);
   }

   // TODO: Gather checkbox info & append to info block
}
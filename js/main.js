// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     let forms = document.getElementsByClassName('needs-validation');

//     let validation = Array.prototype.filter.call(forms, function(form) {
//          form.addEventListener('submit', function(event) {
//          console.log("Executed");

//          if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//          }

//          form.classList.add('was-validated');

//          console.log("Post-validation");
//          console.log(event.defaultPrevented);

//          // if (!event.defaultPrevented) {
//          //    console.log("Inside statement");
//          //    window.location.replace("http://stackoverflow.com");
//          //    // $('#formRequest').submit(function(e) {
//          //    //    console.log("I am valid");
//          //    // });
//          // }

//       }, false);  // End of submit listener
//     });

//   }, false);   // End of load listener
// })();


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
         retrieveData();
         window.location.replace("/success-page.html");
      }
      else
         return false;
   });
});


$('#submitterInfo').click(function() {
   $('#submitter-module').slideToggle();
});


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

// JavaScript way
// function setInfiniteDate() {
//    var checkBox = document.getElementById("infiniteEndDate");
//    var endDateInput = document.getElementById("inputEndDate");

//    if (checkBox.checked == true) {
//       endDateInput.value = "9999-01-01";
//       endDateInput.setAttribute("disabled", "");
//    }
//    else {
//       endDateInput.value = "";
//       endDateInput.removeAttribute("disabled");
//    }
// }


function retrieveData() {
   'use strict';

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
}

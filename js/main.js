$("#submitter-module").hide();

function showSubmitter() {
   var checkBox = document.getElementById("submitterInfo");
   var submitterModule = document.getElementById("submitter-module");

   if (checkBox.checked == true) {
      $("#submitter-module").show();
   }
   else {
      $("#submitter-module").hide();
   }
}
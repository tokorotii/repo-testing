function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
$(document).ready(function () {
  $(".select2").select2();
  $('b[role="presentation"]').hide();
  $(".select2-selection__arrow").append('<i class="fa fa-angle-down"></i>');

  $("#destination_rjm").on("change", function () {
    let destination_rjm = $("#destination_rjm option:selected").val();

    if (destination_rjm == "SINGAPORE" || destination_rjm == "HONG KONG" || destination_rjm == "United States of America") {
      $("#city_name").prop("disabled", true);
      $("#post_code").prop("disabled", true);
    } else {
      $("#city_name").prop("disabled", false);
      $("#post_code").prop("disabled", false);
    }
  });
});

$(document).ready(function () {
  $("#destination").on("keyup", function () {
    var service = $("#service option:selected").val();
    $("#destination").autocomplete({
      source: "simulation_dom_auto.php?service=" + service,
      minLength: 4,
    });
  });
});

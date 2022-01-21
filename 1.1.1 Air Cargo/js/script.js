$(document).ready(function () {
  $("#air-cargo-country").on("change", function () {
    let country = $("#air-cargo-country option:selected").val();
    $.ajax({
      url: "simulation_air_cargo_selection.php?m=selectAirport",
      type: "post",
      cache: false,
      data: { country: country },
      success: function (response) {
        $("#air-cargo-airport").html(response);
        $("#air-cargo-flight").html('<option value="" selected disabled>Select Flight</option>');
        $("#info").html("");
      },
    });
  });
  $("#air-cargo-airport").on("change", function () {
    let country = $("#air-cargo-country option:selected").val();
    let airport = $("#air-cargo-airport option:selected").val();
    $.ajax({
      url: "simulation_air_cargo_selection.php?m=selectFlight",
      type: "post",
      cache: false,
      data: { country: country, airport: airport },
      success: function (response) {
        $("#air-cargo-flight").html(response);
      },
    });
  });
  $("#air-cargo-flight").on("change", function () {
    let directVia = $("#air-cargo-flight option:selected").data("direct-via");
    let route = $("#air-cargo-flight option:selected").data("route");
    let etd = $("#air-cargo-flight option:selected").data("etd");
    $("#info").html(directVia + ", " + route + ", " + etd);
  });
});

$(document).ready(function () {
  $(".show-ps-corporate").click(function () {
    $("#hide-sm").hide();
    $("#hide-st").hide();
    $("#hide-bs").hide();
    $("#hide-ps-corporate").show();
    $("#hide-ps-domestik").hide();
    $("#hide-ps-aircargo").hide();
  });
  // $("#show-sm").click(function () {
  //   $("#hide-sm").show();
  //   $("#hide-st").hide();
  //   $("#hide-bs").hide();
  //   $("#hide-ps-corporate").hide();
  //   $("#hide-ps-domestik").hide();
  //   $("#hide-ps-aircargo").hide();
  // });
  $("#show-st").click(function () {
    $("#hide-sm").hide();
    $("#hide-st").show();
    $("#hide-bs").hide();
    $("#hide-ps-corporate").hide();
    $("#hide-ps-domestik").hide();
    $("#hide-ps-aircargo").hide();
  });
  $("#show-bs").click(function () {
    $("#hide-sm").hide();
    $("#hide-st").hide();
    $("#hide-bs").show();
    $("#hide-ps-corporate").hide();
    $("#hide-ps-domestik").hide();
    $("#hide-ps-aircargo").hide();
  });
  // dropdown
  $("#show-ps-domestik").click(function () {
    $("#hide-sm").hide();
    $("#hide-st").hide();
    $("#hide-bs").hide();
    $("#hide-ps-corporate").hide();
    $("#hide-ps-domestik").show();
    $("#hide-ps-aircargo").hide();
  });
  $("#show-ps-aircargo").click(function () {
    $("#hide-sm").hide();
    $("#hide-st").hide();
    $("#hide-bs").hide();
    $("#hide-ps-corporate").hide();
    $("#hide-ps-domestik").hide();
    $("#hide-ps-aircargo").show();
  });

  $("#service_type").on("change", function () {
    let service_type = $("#service_type option:selected").val();

    if (service_type == "RJM") {
      $("#ps_rjm").show();
    }
    // else {
    //   $(".ps_rjm").hide();
    // }
  });
  $("#service_type").on("change", function () {
    let service_type = $("#service_type option:selected").val();

    if (service_type == "JFCC") {
      $(".tampil-jfcc").show();
      $(".tampil-rjm").hide();
    } else {
      $(".tampil-jfcc").hide();
      $(".tampil-rjm").show();
      $(".flight").hide();
    }
  });
});

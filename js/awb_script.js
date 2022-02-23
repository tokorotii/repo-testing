$(document).ready(function () {
  $("#service_type").on("change", function () {
    let serviceType = $("#service_type option:selected").val();
    $.ajax({
      url: "awb_ajax.php?m=serviceType",
      data: { serviceType: serviceType },
      method: "post",
      cache: false,
      success: function (hasil) {
        $("#country").html(hasil);
      },
    });
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $("#pil_special_vehicle").on("change", function () {
    let pil_special_vehicle = $("#pil_special_vehicle option:selected").val();

    if (pil_special_vehicle == "yes") {
      $(".tampil-satu").show();
    } else {
      $(".tampil-satu").hide();
    }
  });

  $("#insured_shipper").on("change", function () {
    let insured_shipper = $("#insured_shipper option:selected").val();

    if (insured_shipper != "Yes by Shipper") {
      $("#append_insurance").hide();
    } else {
      $("#append_insurance").show();
    }
  });

  $("#insured_shipper").on("change", function () {
    let insured_shipper = $("#insured_shipper option:selected").val();

    if (insured_shipper != "Yes by Rayspeed") {
      $(".tampil-tiga").hide();
    } else {
      $(".tampil-tiga").show();
    }
  });

  // $("#insured_shipper").change(function () {
  //   $("#insurance").prop("disabled", $(this).val() == "no");
  //   // $("#hide").hide();
  // });

  $("#other_additional4").on("change", function () {
    let other_additional4 = $("#other_additional4 option:selected").val();

    if (other_additional4 != "yes") {
      $(".tampil-empat").hide();
    } else {
      $(".tampil-empat").show();
    }
  });

  $("#inv_gen").click(function () {
    $("#ibs").show();
  });
  $("#hide_show").on("click", function (e) {
    $("#inv_form").toggle();
  });

  history.scrollRestoration = "manual";

  $("#service_type").on("change", function () {
    let service_type = $("#service_type option:selected").val();
    if (service_type == "JFCC") {
      $("#service-jfcc").show();
      $("#city").hide();
      $("#city_jfcc").show();
      $(".jfcc").show();
      $(".njfcc").hide();
    } else {
      $("#service-jfcc").hide();
      $("#city").show();
      $("#city_jfcc").hide();
      $(".flight").hide();
      $(".jfcc").hide();
      $(".njfcc").show();
    }
  });

  // $(".angka").on("keyup", function () {
  //   let angka = $(this).val();
  //   $(this).val(angka.replace(/[^0-9.]/g, ""));
  // });
});

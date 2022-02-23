$(document).ready(function () {
  let dtd = [
    "Aichi",
    "Nagoya",
    "Akita",
    "Aomori",
    "Chiba",
    "Fukui",
    "Fukushima",
    "Gifu",
    "Gunma",
    "Hyogo",
    "Ibaraki",
    "Ishikawa",
    "Iwate",
    "Kanagawa",
    "Kyoto",
    "Mie",
    "Miyagi",
    "Nagano",
    "Nara",
    "Osaka",
    "Saitama",
    "Shiga",
    "Shizuoka",
    "Tokyo ",
    "Toyama",
    "Wakayama",
    "Yamagata",
    "Yamanashi",
    "Ehime",
    "Fukuoka",
    "Hiroshima",
    "Kagawa",
    "Kagoshima",
    "Kouchi",
    "Kumamoto",
    "Miyazaki",
    "Nagasaki",
    "Oita",
    "Okayama",
    "Saga",
    "Shimane",
    "Tokushima",
    "Tottori",
    "Yamaguchi",
    "Okinawa",
    "Other Islands",
  ];
  dtd.sort();
  let dtp = ["Narita", "Osaka", "Nagoya", "Haneda"];
  dtp.sort();
  $("#jfcc_type").on("change", function () {
    let service = $("#jfcc_type option:selected").val();
    let options = "<option selected disabled>Select Destination</option>";
    if (service == "Door to Door") {
      $(".flight").hide();
      for (let i = 0; i < dtd.length; i++) {
        options += '<option value="' + dtd[i] + '">' + dtd[i] + "</option>";
      }
    } else {
      $(".flight").show();
      for (let i = 0; i < dtp.length; i++) {
        options += '<option value="' + dtp[i] + '">' + dtp[i] + "</option>";
      }
    }
    $("#destination_jfcc").html(options);
  });
  $("#destination_jfcc").on("change", function () {
    let dest = $("#destination_jfcc option:selected").val();
    let options = '<option value="" selected disabled>Select Flight</option>';
    if (dest == "Haneda") {
      options += '<option value="Garuda Airlways">Garuda Airlways</option>';
    } else if (dest == "Nagoya") {
      options += '<option value="Singapore Airlines">Singapore Airlines</option>';
    } else if (dest == "Narita") {
      options += '<option value="Garuda Airlways">Garuda Airlways</option><option value="Singapore Airlines">Singapore Airlines</option>';
    } else if (dest == "Osaka") {
      options += '<option value="Singapore Airlines">Singapore Airlines</option>';
    }
    $("#flight").html(options);
  });
});

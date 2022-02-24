$(document).ready(function () {
  $("#destination").autocomplete({
    minLength: 4,
    source: "simulation_domestic_destination.php",
  });

  $("#form-simulation-dom").on("submit", function (e) {
    e.preventDefault();
    let data = $("#form-simulation-dom").serialize();
    $.ajax({
      url: "simulation_domestic_ajax.php",
      data: data,
      method: "get",
      cache: false,
      dataType: "json",
      success: function (hasil) {
        if (hasil.sukses === true) {
          console.log(hasil);
          $("#tp_dom").text(hasil.tp_dom);
          $("#cw_dom").text(hasil.cw_dom);
          $("#fc_dom").text(hasil.fc_dom);
          $("#ess_dom").text(hasil.ess_dom);
          $("#os_dom").text(hasil.os_dom);
          $("#ra_dom").text(hasil.ra_dom);
          $("#fs_dom_persen").text(hasil.fs_dhl);
          $("#fs_dom").text(hasil.fs_dom);
          $("#tbv_dom").text(hasil.tbv_dom);
          $("#tav_dom").text(hasil.tav_dom);
        } else {
        }
      },
    });
  });
});

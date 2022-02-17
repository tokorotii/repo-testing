$(document).ready(function () {
  $("body").on("click", ".tambah", function () {
    var html = "";
    html += '<div class="col-lg-3 col-md-6 g-0 dihapus">';
    html += '<div class="card my-1 mx-1" style="border-radius: 20px; border-top: none; box-shadow: 0 8px 8px 0px rgba(0, 0, 0, 0.45)">';
    html += '<div class="card-body">';
    html += '<div class="row pb-2">';
    html += '<div class="col"><h5 class="card-title fw-bold pb-3">Package</h5></div>';
    html += '<div class="col text-end">';
    html +=
      '<button type="button" class="btn btn-white hapus"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.562 4.8125L3.43701 4.8125" stroke="#EA1616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M8.9375 8.9375V14.4375" stroke="#EA1616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.0625 8.9375V14.4375" stroke="#EA1616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M17.1875 4.8125V17.875C17.1875 18.0573 17.1151 18.2322 16.9861 18.3611C16.8572 18.4901 16.6823 18.5625 16.5 18.5625H5.5C5.31766 18.5625 5.1428 18.4901 5.01386 18.3611C4.88493 18.2322 4.8125 18.0573 4.8125 17.875V4.8125" stroke="#EA1616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.4375 4.8125V3.4375C14.4375 3.07283 14.2926 2.72309 14.0348 2.46523C13.7769 2.20737 13.4272 2.0625 13.0625 2.0625H8.9375C8.57283 2.0625 8.22309 2.20737 7.96523 2.46523C7.70737 2.72309 7.5625 3.07283 7.5625 3.4375V4.8125" stroke="#EA1616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
    html += "</div>";
    html += "</div>";
    html += '<div class="row">';
    html += '<div class="col pb-3"><input class="form-control" type="text" placeholder="Berat (Kg)" name="berat[]" /></div>';
    html += '<div class="col"><input class="form-control" type="text" placeholder="Panjang (Cm)" name="panjang[]" /></div>';
    html += "</div>";
    html += '<div class="row">';
    html += '<div class="col pb-3"><input class="form-control" type="text" placeholder="Tinggi (Cm)" name="tinggi[]" /></div>';
    html += '<div class="col"><input class="form-control" type="text" placeholder="Lebar (Cm)" name="lebar[]" /></div>';
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    $(".disini").append(html);
  });
  $("body").on("click", ".hapus", function () {
    let x = confirm("Do you really want to delete?");
    if (x === true) {
      $(this).parents("div .dihapus").remove();
    } else {
      return false;
    }
  });
});

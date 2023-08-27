$(function () {
  var total_cap = function () {
    var sumCap = 0;
    var qtyCap = parseFloat($(".jenisCap").val().replace(",", "")); // Menggunakan parseFloat untuk mengonversi nilai ke angka

    $(".palletCap").each(function () {
      var numCap = parseFloat($(this).val().replace(",", ""));
      if (!isNaN(numCap)) {
        // Memeriksa apakah numCap adalah angka yang valid
        if (qtyCap == 3600) {
          sumCap += numCap * 72000;
        } else {
          sumCap += numCap * 43000;
        }
      }
    });

    $(".box").each(function () {
      var numCap = parseFloat($(this).val().replace(",", ""));
      if (!isNaN(numCap)) {
        // Memeriksa apakah numCap adalah angka yang valid
        if (qtyCap == 3600) {
          sumCap += numCap * 3600;
        } else {
          sumCap += numCap * 2150;
        }
      }
    });

    if (!isNaN(sumCap)) {
      // Memeriksa apakah sumCap adalah angka yang valid sebelum menampilkan
      $("#totalCap").text(sumCap.toLocaleString("en-US"));
    } else {
      $("#totalCap").text("Invalid input");
    }
  };

  $("#saveCap").on("click", function () {
    total_cap();
  });
});

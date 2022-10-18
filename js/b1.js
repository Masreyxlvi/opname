$(function () {
  var total_KartonBl = function () {
    var sum = 0;
    var nama = $(".namaKartonBl").val();
    // var option = $('#option').val()

    $(".palletKartonBl").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num) * 800;
      }
    });
    $(".lbrKartonBl").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num);
      }
    });
    $("#totalKartonBl").text(sum.toLocaleString("en-US"));
    $("#namaKartonBl").text("Karton " + nama + " (Bl)");
  };

  $("#saveKartonBl").on("click", function () {
    total_KartonBl();
  });
});

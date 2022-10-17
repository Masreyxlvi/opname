$(function () {
  var total_Karton = function () {
    var sum = 0;
    var nama = $(".namaKarton").val();
    // var option = $('#option').val()

    $(".palletKarton").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num) * 800;
      }
    });
    $(".lbrKarton").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num);
      }
    });
    $("#totalKarton").text(sum.toLocaleString("en-US"));
    $("#namaKarton").text("Karton " + nama);
  };

  $("#saveKarton").on("click", function () {
    total_Karton();
  });
});

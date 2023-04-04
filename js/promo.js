$(function () {
  var total_Promo = function () {
    var sum = 0;
    var nama = $(".namaPromo").val();
    // var option = $('#option').val()

    $(".palletPromo").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num) * 800;
      }
    });
    $(".lbrPromo").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num);
      }
    });
    $("#totalPromo").text(sum.toLocaleString("en-US"));
  };

  $("#savePromo").on("click", function () {
    total_Promo();
  });
});

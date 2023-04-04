$(function () {
  var total_Reguler = function () {
    var sum = 0;
    var nama = $(".namaReguler").val();
    // var option = $('#option').val()

    $(".palletReguler").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num) * 800;
      }
    });
    $(".lbrReguler").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num);
      }
    });
    $("#totalReguler").text(sum.toLocaleString("en-US"));
  };

  $("#saveReguler").on("click", function () {
    total_Reguler();
  });
});

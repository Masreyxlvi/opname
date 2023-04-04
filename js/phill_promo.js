$(function () {
  var total_phillPromo = function () {
    var sum = 0;
    var nama = $(".namaphillPromo").val();
    // var option = $('#option').val()

    $(".palletphillPromo").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num) * 800;
      }
    });
    $(".lbrphillPromo").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num);
      }
    });
    $("#totalphillPromo").text(sum.toLocaleString("en-US"));
  };

  $("#savephillPromo").on("click", function () {
    total_phillPromo();
  });
});

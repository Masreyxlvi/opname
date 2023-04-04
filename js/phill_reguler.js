$(function () {
  var total_phillReguler = function () {
    var sum = 0;
    var nama = $(".namaphillReguler").val();
    // var option = $('#option').val()

    $(".palletphillReguler").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num) * 800;
      }
    });
    $(".lbrphillReguler").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num);
      }
    });
    $("#totalphillReguler").text(sum.toLocaleString("en-US"));
  };

  $("#savephillReguler").on("click", function () {
    total_phillReguler();
  });
});

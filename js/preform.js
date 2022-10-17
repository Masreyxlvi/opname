$(function () {
  var total_prefrom = function () {
    var sum = 0;
    // var option = $('#option').val()

    $(".keranjang").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num) * 9216;
      }
      // alert(option)
    });
    $(".pcs").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num);
      }
      // alert(option)
    });
    $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#check").on("click", function () {
    total_prefrom();
  });
});

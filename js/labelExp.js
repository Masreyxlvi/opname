$(function () {
  var total_labelExp = function () {
    var sum = 0;
    // var option = $('#option').val()

    $(".boxLabelExp").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num) * 3;
      }
      // alert(option)
    });
    $(".rollLabelExp").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num);
      }
      // alert(option)
    });
    $("#totalLabelExp").text(sum.toLocaleString("en-US"));
  };

  $("#savelabelExp").on("click", function () {
    total_labelExp();
  });
});

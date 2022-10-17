$(function () {
  var total_labelReg = function () {
    var sum = 0;
    // var option = $('#option').val()

    $(".boxLabel").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num) * 2;
      }
      // alert(option)
    });
    $(".rollLabel").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num);
      }
      // alert(option)
    });
    $("#totalLabelReg").text(sum.toLocaleString("en-US"));
  };

  $("#savelabelReg").on("click", function () {
    total_labelReg();
  });
});

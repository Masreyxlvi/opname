$(function () {
  var total_labelReg = function () {
    var sum = 0;
    var jenisLabel = $(".jenisLabel").val();

    $(".boxLabel").each(function () {
      var num = $(this).val().replace(",", "");
      if (jenisLabel == "2") {
        sum += parseFloat(num) * 2;
      } else if (jenisLabel == "3") {
        sum += parseFloat(num) * 3;
      } else if (jenisLabel == "4") {
        sum += parseFloat(num) * 4;
      } else {
        sum += parseFloat(num) * 6;
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

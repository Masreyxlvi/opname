$(function () {
  var total_labelReg = function () {
    var sum = 0;
    var jenisLabel = $(".jenisLabel").val();

    $(".boxLabel").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0 && jenisLabel == "Reguler") {
        sum += parseFloat(num) * 2;
      } else {
        sum += parseFloat(num) * 3;
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
    $("#namaLabelReg").text("Label " + jenisLabel);
  };

  $("#savelabelReg").on("click", function () {
    total_labelReg();
  });
});

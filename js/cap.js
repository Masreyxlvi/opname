$(function () {
  var total_cap = function () {
    var sumCap = 0;
    var qtyCap = $(".jenisCap").val();

    $(".palletCap").each(function () {
      var numCap = $(this).val().replace(",", "");
      if (qtyCap == "3600") {
        sumCap += parseFloat(numCap) * 72000;
      } else {
        sumCap += parseFloat(numCap) * 43000;
      }
    });
    $(".box").each(function () {
      var numCap = $(this).val().replace(",", "");
      if (qtyCap == "3600") {
        sumCap += parseFloat(numCap) * 3600;
      } else {
        sumCap += parseFloat(numCap) * 2150;
      }
      // alert(option)
    });
    $("#totalCap").text(sumCap.toLocaleString("en-US"));
  };

  $("#saveCap").on("click", function () {
    total_cap();
  });
});

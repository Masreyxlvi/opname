$(function () {
  var total_cap = function () {
    var sumCap = 0;

    $(".palletCap").each(function () {
      var numCap = $(this).val().replace(",", "");
      // alert(option)
      if (numCap != 0) {
        sumCap += parseFloat(numCap) * 72000;
      }
      // alert(sumCap);
    });
    $(".box").each(function () {
      var numCap = $(this).val().replace(",", "");
      // alert(option)
      if (numCap != 0) {
        sumCap += parseFloat(numCap) * 3600;
      }
      // alert(option)
    });
    $("#totalCap").text(sumCap.toLocaleString("en-US"));
  };

  $("#saveCap").on("click", function () {
    total_cap();
  });
});

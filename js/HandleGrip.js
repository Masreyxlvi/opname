$(function () {
  var total_HandleGrip = function () {
    var sumHandleGrip = 0;

    $(".palletHandleGrip").each(function () {
      var numHandleGrip = $(this).val().replace(",", "");

      if (numHandleGrip != 0) {
        sumHandleGrip += parseFloat(numHandleGrip) * 17280;
      }
    });
    $(".boxHandleGrip").each(function () {
      var numHandleGrip = $(this).val().replace(",", "");
      if (numHandleGrip != 0) {
        sumHandleGrip += parseFloat(numHandleGrip) * 1440;
      }
      // alert(option)
    });
    $("#totalHandleGrip").text(sumHandleGrip.toLocaleString("en-US"));
  };

  $("#saveHandleGrip").on("click", function () {
    total_HandleGrip();
  });
});

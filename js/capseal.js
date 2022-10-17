$(function () {
  var total_Capseal = function () {
    var sum = 0;
    // var option = $('#option').val()

    $(".boxCapseal").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num) * 3;
      }
      // alert(option)
    });
    $(".rollCapseal").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num);
      }
      // alert(option)
    });
    $("#totalCapseal").text(sum.toLocaleString("en-US"));
  };

  $("#saveCapseal").on("click", function () {
    total_Capseal();
  });
});

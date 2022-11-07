$(function () {
  var total_lemAdtek = function () {
    var sum = 0;
    // var option = $('#option').val()

    $(".saklemAdtek").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num) * 25;
      }
      // alert(option)
    });
    $(".kglemAdtek").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num);
      }
      // alert(option)
    });
    $("#totallemAdtek").text(sum.toLocaleString("en-US"));
  };

  $("#savelemAdtek").on("click", function () {
    total_lemAdtek();
  });
});

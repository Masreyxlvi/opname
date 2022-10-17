$(function () {
  var total_LemAMDK = function () {
    var sum = 0;

    $(".boxLemAMDK").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num) * 20;
      }
    });
    $(".kg").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num);
      }
      // alert(option)
    });
    $("#totalLemAMDK").text(sum.toLocaleString("en-US"));
  };

  $("#saveLemAMDK").on("click", function () {
    total_LemAMDK();
  });
});

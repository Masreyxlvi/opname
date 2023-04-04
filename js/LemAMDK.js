$(function () {
  var total_LemAMDK = function () {
    var sum = 0;
    var qtyLem = $(".jumlahLemAmdk").val();

    $(".boxLemAMDK").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (qtyLem == "12") {
        sum += parseFloat(num) * 12;
      } else {
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

$(function () {
  var total_PackingTape = function () {
    var sum = 0;
    var option = $(".option").val();

    $(".boxPackingTape").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option);
      if (num != 0 && option == "dua_belas") {
        sum += parseFloat(num) * 12;
      } else {
        sum += parseFloat(num) * 20;
      }
      // alert(option)
    });
    $(".rollPackingTape").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num);
      }
      // alert(option)
    });
    $("#totalPackingTape").text(sum.toLocaleString("en-US"));
  };

  $("#savePackingTape").on("click", function () {
    total_PackingTape();
  });
});

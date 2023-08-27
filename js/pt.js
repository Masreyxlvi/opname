$(function () {
  var total_PackingTape = function () {
    var sum = 0;
    var option = $(".option").val();

    $(".boxPackingTape").each(function () {
      var num = $(this).val().replace(",", "");
      if (option == "dua_belas") {
        sum += parseFloat(num) * 12;
      } else {
        sum += parseFloat(num) * 20;
      }
    });
    $(".rollPT").each(function () {
      var num = $(this).val().replace(",", "");
      if (num != 0) {
        sum += parseFloat(num);
      }
    });
    $("#totalPackingTape").text(sum.toLocaleString("en-US"));
  };

  $("#savePackingTape").on("click", function () {
    total_PackingTape();
  });
});

$(function () {
  var total_prefrom = function () {
    var sum = 0;
    var jenis = $("#jenis_preform").val();

    $(".keranjang").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0 && jenis == "330ml") {
        sum += parseFloat(num) * 12960;
      } else if (jenis == "600ml") {
        sum += parseFloat(num) * 9216;
      } else if (jenis == "1500ml") {
        sum += parseFloat(num) * 5976;
      } else {
        sum += parseFloat(num) * 3080;
      }
      // alert(option)
    });
    $(".pcs").each(function () {
      var num = $(this).val().replace(",", "");
      // alert(option)
      if (num != 0) {
        sum += parseFloat(num);
      }
      // alert(option)
    });
    $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#check").on("click", function () {
    total_prefrom();
  });
});

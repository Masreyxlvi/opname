$(function () {
  var total_PackingTape = function () {
    var totalBoxPT = 0; // Variabel untuk menghitung total dari .boxPackingTape
    var totalRollPT = 0; // Variabel untuk menghitung total dari .rollPT
    var option = $(".option").val();

    $(".boxPackingTape").each(function () {
      var numPT = $(this).val().replace(",", "");
      if (!isNaN(numPT)) {
        if (option == "dua_belas") {
          totalBoxPT += parseFloat(numPT) * 12;
        } else {
          totalBoxPT += parseFloat(numPT) * 20;
        }
      } else {
        // Tangani jika input dalam .boxPackingTape bukan angka atau kosong di sini
      }
    });

    $(".rollPT").each(function () {
      var numPT = $(this).val();
      alert(numPT);
      if (!isNaN(numPT)) {
        if (numPT !== 0) {
          totalRollPT += parseFloat(numPT);
        }
      } else {
        // Tangani jika input dalam .rollPT bukan angka atau kosong di sini
      }
    });

    var sumPT = totalBoxPT + totalRollPT; // Menggabungkan total dari .boxPackingTape dan .rollPT

    alert(sumPT);

    if (!isNaN(sumPT)) {
      $("#totalPackingTape").text(sumPT.toLocaleString("en-US"));
    } else {
      $("#totalPackingTape").text("Invalid input");
    }
  };

  $("#savePackingTape").on("click", function () {
    total_PackingTape();
  });
});

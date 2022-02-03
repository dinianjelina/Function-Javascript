// menampilkan peraturan game pada popup box
alert('Selamat datang di game tebak angka!');
alert('Kamu diminta untuk menebak angka 1-3. \ndan kamu akan bermain dalam 5 ronde. \nPlayer yang berhasil mengumpulkan tebakan terbanyak akan menang. \nSELAMAT BERMAIN!!!');

var pointsNumber1 = 0;
var pointsNumber2 = 0;

var i = 1;
while (i <= 5) {
  alert('Ronde ' + i);
  // membangkitkan angka random
  var angka = Math.floor(Math.random() * 3) + 1;

  // menangkap pilihan players
  var p1 = prompt('Player 1: masukkan angka dari 1-3.');
  var p2 = prompt('Player 2: masukkan angka dari 1-3.');

  var numbers = /^[0-9]+$/;
  if (p1.match(numbers) && p2.match(numbers)) {
    //alert('Your Registration number has accepted....');
    //return true;
  } else {
    alert('Please input numeric characters only!');
    alert('Ulangi?');
    continue;

    // return;
    // break;
    // continue;
  }

  // menentukan rules

  if (p1 < 1 || p1 > 3 || p2 < 1 || p2 > 3) {
    alert('Angka yang dimasukkan tidak sesuai! \nHANYA pilih angka dari 1-3.');
    alert('Ulangi?');
    continue;
  } else if (p1 == p2) {
    alert('Tebakan angka tidak boleh sama!!!');
    alert('Ulangi?');
    continue;
  } else if (p1 == angka) {
    pointsNumber1 += 1;
    // var pointsNumber = +document.getElementById('points-number').innerHTML;
    var result = +document.getElementById('points-number');
    result.innerHTML = pointsNumber1;
    alert('Player 1 win');
    alert('Angka yang dicari adalah : ' + angka + '\n--------------------------- \nPlayer 1: ' + pointsNumber1 + '\nPlayer 2: ' + pointsNumber2);
  } else if (p2 == angka) {
    pointsNumber2 += 1;
    // var pointsNumber2 = +document.getElementById('points-number').innerHTML;
    var result = +document.getElementById('points-number');
    result.innerHTML = pointsNumber2;
    alert('Player 2 win');
    alert('Angka yang dicari adalah : ' + angka + '\n--------------------------- \nPlayer 1: ' + pointsNumber1 + '\nPlayer 2: ' + pointsNumber2);
  } else {
    alert('Tidak ada yang benar. Hasil SERI!');
    alert('Angka yang dicari adalah : ' + angka + '\n--------------------------- \nPlayer 1: ' + pointsNumber1 + '\nPlayer 2: ' + pointsNumber2);
  }

  i++;
}

// peraturan score
if (pointsNumber1 > pointsNumber2) {
  alert('Score player 1 UNGGUL! \n-------------------------------- \nGood Job Player 1');
} else if (pointsNumber1 < pointsNumber2) {
  alert('Score player 2 UNGGUL! \n-------------------------------- \nGood Job Player 2');
} else {
  alert('Score kedua player SERI!');
}

alert('Terima kasih sudah bermain.');

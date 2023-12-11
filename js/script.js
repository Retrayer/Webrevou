var isThreeSidesMode = true;

function switchMode() {
  isThreeSidesMode = !isThreeSidesMode;
  var kelilingMode = document.getElementById('kelilingMode');
  var luasMode = document.getElementById('luasMode');
  var side3Input = document.getElementById('side3Input');

  // Tambahkan kondisi untuk mengatur display pada saat mode pertama kali terbuka
  if (isThreeSidesMode) {
      luasMode.style.display = 'none';
      kelilingMode.style.display = 'block';
      side3Input.style.display = 'block';
  } else {
      luasMode.style.display = 'block';
      kelilingMode.style.display = 'none';
      side3Input.style.display = 'none';
  }
}

// Panggil fungsi switchMode saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', function() {
  switchMode();
});

function calculatePerimeter() {
  var side1 = parseFloat(document.getElementById('side1').value);
  var side2 = parseFloat(document.getElementById('side2').value);
  var side3 = isThreeSidesMode ? parseFloat(document.getElementById('side3').value) : null;

  if (!isNaN(side1) && !isNaN(side2) && (!isThreeSidesMode || !isNaN(side3))) {
    var perimeter = side1 + side2 + (isThreeSidesMode ? side3 : 0);
    var formula = isThreeSidesMode ? side1 + ' + ' + side2 + ' + ' + side3 : 'side1 + side2';

    document.getElementById('perimeterResult').innerText = 'Result: Perimeter = ' + perimeter.toFixed(2);
    document.getElementById('perimeterFormula').innerText = 'Formula: Perimeter = ' + formula;
  } else {
    document.getElementById('perimeterResult').innerText = 'Please enter valid numbers for all sides.';
    document.getElementById('perimeterFormula').innerText = '';
  }
}

function calculateArea() {
  var base = parseFloat(document.getElementById('base').value);
  var height = parseFloat(document.getElementById('height').value);

  if (!isNaN(base) && !isNaN(height)) {
    var area = 0.5 * base * height;
    var formula = '0.5 * ' + base + ' * ' + height;

    document.getElementById('areaResult').innerText = 'Result: Area = ' + area.toFixed(2);
    document.getElementById('areaFormula').innerText = 'Formula: Area = ' + formula;
  } else {
    document.getElementById('areaResult').innerText = 'Please enter valid numbers for base and height.';
    document.getElementById('areaFormula').innerText = '';
  }
}

function reset() {
  document.getElementById('side1').value = '';
  document.getElementById('side2').value = '';
  document.getElementById('side3').value = '';
  document.getElementById('base').value = '';
  document.getElementById('height').value = '';
  document.getElementById('perimeterResult').innerText = '';
  document.getElementById('perimeterFormula').innerText = '';
  document.getElementById('areaResult').innerText = '';
  document.getElementById('areaFormula').innerText = '';
}

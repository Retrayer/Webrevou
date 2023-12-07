function hitungayam() {
    var Alpha = parseFloat(document.getElementById("Alpha").value);
    var Beta = parseFloat(document.getElementById("Beta").value);
    var Charlie = parseFloat(document.getElementById("Charlie").value);
    var kel =  Alpha + Beta + Charlie ;
    document.getElementById("keliling").value = kel;
}

function hitungluas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var luas = (alas * tinggi) * 0.5;
    document.getElementById("luas").value = luas;
}

function resetluas() {
    var alas = document.getElementById("alas").value="";
    var tinggi = document.getElementById("tinggi").value="";
    var luas = document.getElementById("luas").value="";
}

function resetkeliling() {
    var Alpha = document.getElementById("Alpha").value="";
    var Beta = document.getElementById("Beta").value="";
    var Charlie = document.getElementById("Charlie").value="";
    var keliling = document.getElementById("keliling").value="";
}
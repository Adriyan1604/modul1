function hitung() {

    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Masukkan angka yang valid!';
        return;
    }

    var hasil = num1 + num2;

    document.getElementById('result').textContent = hasil;
}

function reset() {

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';

    
    document.getElementById('result').textContent = '';
}
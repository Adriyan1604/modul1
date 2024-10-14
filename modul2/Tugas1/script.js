function clearScreen() {
    document.getElementById("result").value = "";
}

function insert(value) {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current + value;
}

function calculate() {
    let expression = document.getElementById("result").value;

    // Ganti operator pangkat '^' dengan '**' agar valid di JavaScript
    expression = expression.replace('^', '**');

    try {
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

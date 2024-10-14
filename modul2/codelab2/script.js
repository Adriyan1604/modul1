function validateForm() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    
    if (name === "" || email === "" || phone === "") {
        alert("Semua kolom harus diisi!");
        return false;
    }

    
    alert("Form berhasil terkirim ✔️");
    return true;
}

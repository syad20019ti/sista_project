function cekvalid(){
    let username = document.forms['my-form']['username'].value;
    let password = document.forms['my-form']['password'].value;
    if (username == 'user' && password == '12345') {
      alert("Username atau password yang Anda masukan Benar");
      window.location.href = "indexUser.html";
  
      // tambahin return false aja biar method dri formnya ga kepakai
      return false
    } else if (username == "admin" && password == "12345") {
      window.location.href = "IndexAdmin.html";
  
      // tambahin return false aja biar method dri formnya ga kepakai
      return false
    } else {
      alert("Username atau password yang Anda masukan Tidak ada");
    }
  }

 function validasi() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var prodi = document.getElementById("prodi").value;
    var hp = document.getElementById("hp").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    if (nama != "" && nim !="" && prodi != "" && hp != "" && email != "" && alamat != "") {
        return true;
    } else {
        alert('Harap Isi Data Dengan Lengkap!');
    }
}
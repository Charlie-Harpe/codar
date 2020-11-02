function validatedata() {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let passwd = document.getElementById("passwd");
    let cpasswd = document.getElementById("cpasswd");


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://52.91.139.190/fsapi/users/auth/register-jwt", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            alert('Usuário ' + json.user.name + ' Cadastrado');
        }

    };
    xhttp.send(JSON.stringify({
        "name": name.value,
        "email": email.value,
        "password": passwd.value,
        "confirma_password": cpasswd.value,
    }));
    event.preventDefault()
}

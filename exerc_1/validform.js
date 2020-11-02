function validform() {

    let nome = document.getElementById("nome").value;
    if (nome == "" || nome.length < 3) {
        alert("Preencha campo NOME corretamente!");
    }

    let ponto = document.getElementById("ponto").value;
    if (ponto == "" || ponto < 0 || ponto > 10) {
        alert("Preencha campo PONTOS corretamente!")
    }

    let nota = document.getElementById("nota").value;
    if (nota == "" || nota < 0 || nota > 10) {
        alert("Preencha o campo NOTA corretamente!")
    }

    let email = document.getElementById("email").value;
    if (email == "") {
        alert("Preencha o campo E-mail corretamente!")
    }

    let empresa = document.getElementById("empresa").value;
    if (empresa == "" || empresa.lenght < 3) {
        alert("Preencha o campo EMPRESA corretamente!")
    }


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var teste = JSON.parse(this.responseText)
            document.getElementById("front").innerHTML = 'User ' + teste.user.name + ' cadastrado!';


        }

        if (this.readyState == 4 && this.status == 422) {
            var teste = JSON.parse(this.responseText);
            document.getElementsById("front").innerHTML = teste.user.name;
        }

    };

    xhttp.open("POST", "http://52.91.139.190/fsapi/users/auth/register-jwt", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({
        "name": nome.value,
        "ponto": ponto.value,
        "nota": nota.value,
        "email": email.value,
        "empresa": empresa.value,
    }));

    event.preventDefault();

}

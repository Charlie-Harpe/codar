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

    let empresa = document.getElementById("empresa").value;
    if (empresa == "" || empresa.lenght < 3) {
        alert("Preencha o campo EMPRESA corretamente!")
    }


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", " http://45.55.144.89/fsapi/users/auth/register-jwt", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var teste = JSON.parse(this.responseText)
            document.getElementById("teste").innerHTML = 'User '+ teste.user.name + ' cadastrado!';


        }


    };

    xhttp.send(JSON.stringify({
        "nome": nome.value,
        "ponto": ponto.value,
        "nota": nota.value,
        "empresa": empresa.value,
    }));

    event.preventDefault();

}
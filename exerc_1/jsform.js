
function requestxml() {

	let email = document.getElementById("email");
	let password = document.getElementById("password");


	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://52.91.139.190/fsapi/users/login", true);
	xhttp.setRequestHeader("Content-type", "application/json");

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			var teste = JSON.parse(this.responseText)
			document.getElementById("formulario").innerHTML = `Bem vindo ${teste.user.name}`

			/*alert("Bem vindo"+teste.user.name)*/

		}


	};

	xhttp.send(JSON.stringify({
		"email": email.value, "password": password.value,
	}));

	event.preventDefault();
}



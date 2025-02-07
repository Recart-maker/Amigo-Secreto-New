let friends = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        alert("Por favor, inserte un nombre");
    }

    else {
        friends.push(amigo);
        document.getElementById("amigo").value="";
        crearLista(friends);

    }
}
    
function crearLista(friends) {

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML =  "";
    for (let index = 0; index < friends.length; index++) {
        let elemento = document.createElement("li");
        elemento.innerHTML = friends[index];
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    if (friends == "") {
        alert("añade un amigo antes del sorteo")
    }
    else {
        let indiceAleatorio = Math.floor(Math.random() * friends.lrngth);
        let amigoAleatorio = friends[indiceAleatorio];
        console.log(amigoAleatorio);

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        let elemento = document.createElement("li");
        elemento.innerHTML = amigoAleatorio;
        resultado.appendChild(elemento);

    }

}


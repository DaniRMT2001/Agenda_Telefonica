let contactos = [];

function agregar() {
    let Nombre = document.getElementById("Nombre").value;
    let Telefono = document.getElementById("Telefono").value;
    let alerta = document.getElementById("alerta");

    if (existe(Nombre)) {
        alerta.classList.remove("d-none");
        return;
    };

    alerta.classList.add("d-none")

    let NuevoContacto = {
        "Nombre": Nombre,
        "Telefono": Telefono,
    };
    contactos.push(NuevoContacto);
    list(contactos);

}

function list(lista) {

    listar = document.getElementById("listar");
    listar.innerHTML = " ";
    for (let x of lista) {
        listar.innerHTML += `<li class="list-group-item">${x.Nombre} - ${x.Telefono} <button class="btn btn-danger float-end fa fa-trash" onclick="eliminar('${x.Nombre}')"><i class=""></i></button></li>`
    }
}

function eliminar(Nombre) {
    contactos = contactos.filter(function (x) {
        return x.Nombre != Nombre
    });

    list(contactos)
}

function buscar(palabra) {
    let buscar = contactos.filter(function (x) {
        return x.Nombre.toLowerCase().includes(palabra.toLowerCase())
    });
    list(buscar)
}
function existe(palabra) {
    let respuesta = contactos.some(function (x) {
        return x.Nombre == palabra
    });
    return respuesta
}
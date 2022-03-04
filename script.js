let contactos = [];
let contactoEditar = {};

function agregar() {
    let Nombre = document.getElementById("Nombre").value;
    let Telefono = document.getElementById("Telefono").value;
    let alerta = document.getElementById("alerta");

    if (existe(Nombre)) {
        alerta.classList.remove("d-none");
        return;
    };
    limpiar();
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
        listar.innerHTML += `<li class="list-group-item gap-3 ">${x.Nombre} - ${x.Telefono} 
        <button class="btn btn-danger float-end fa fa-trash " onclick="eliminar('${x.Nombre}')"></button>
        <button class="btn btn-primary float-end fa fa-edit me-1 " onclick="Datos_Edit('${x.Nombre}')" ></button></li>`
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

function Datos_Edit(Nombre) {
    let contacto = contactos.find(c => c.Nombre == Nombre);
    contactoEditar = contacto;


    document.getElementById("Nombre").value = contacto.Nombre;
    document.getElementById("Telefono").value = contacto.Telefono;

    document.getElementById("btn-edit").classList.remove("d-none")

}

function limpiar() {
    document.getElementById("Nombre").value = " ";
    document.getElementById("Telefono").value = " ";
}

function Editar() {
    let nom = document.getElementById("Nombre").value;
    let tel = document.getElementById("Telefono").value;

    contactos.map(c => {
        if (c.Nombre == contactoEditar.Nombre) {
            c.Nombre = nom;
            c.Telefono = tel;
        }

    })
    list(contactos)
    limpiar()

    document.getElementById("btn-edit").classList.add("d-none")


}

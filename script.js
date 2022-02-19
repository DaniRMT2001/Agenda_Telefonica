let contactos = [];

function agregar() {
    let Nombre = document.getElementById("Nombre").value;
    let Telefono = document.getElementById("Telefono").value;

    let NuevoContacto = {
        "Nombre": Nombre,
        "Telefono": Telefono,
    };
    contactos.push(NuevoContacto);
    list(contactos);
    
}

function list(lista){
    listar=document.getElementById("listar");
    listar.innerHTML=" ";
    for(let x of lista){
        listar.innerHTML+=`<li class="list-group-item">${x.Nombre} - ${x.Telefono}</li>`
    }
}
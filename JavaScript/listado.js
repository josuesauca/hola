
window.addEventListener("load", async () => {
    await cargarPromesa();
});

var cargarPromesa = () =>{
    return new Promise((request,response)=>{
        try {
            setTimeout(() => {
                request(cargarListado());
            }, 3000);
        } catch (error) {
            response(error.message);
        }
    });
}


function cargarListado() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/alumnos.xml", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cargarXML(xhr);
        }
    };
    xhr.send();
}

function cargarXML(xml) {
    var docXML = xml.responseXML;
    var tabla = `<tr>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Celular</th>
                </tr>`;
    var alumnos = docXML.getElementsByTagName("estudiante");
    for (let i = 0; i < alumnos.length; i++) {
        tabla +='<tr><td>';
        tabla += alumnos[i].getElementsByTagName("cedula")[0].textContent;
        tabla +='</td><td>';
        tabla+= alumnos[i].getElementsByTagName("nombre")[0].textContent;
        tabla +='</td><td>';
        tabla += alumnos[i].getElementsByTagName("apellido")[0].textContent;
        tabla +='</td><td>';
        tabla += alumnos[i].getElementsByTagName("celular")[0].textContent;
        tabla +='</td></tr>';
    }
    document.getElementById("tablaAlumnos").innerHTML = tabla;
}
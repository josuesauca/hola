
window.addEventListener("load", async () => {
    await cargarPromesa();
});

var cargarPromesa = () =>{
    return new Promise((request,response)=>{
        try {
            setTimeout(() => {
                request(cargarListado());
            },2000);
        } catch (error) {
            response(error.message);
        }
    });
}

function cargarListado() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/materias.xml", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cargarXML(xhr);
        }
    };
    xhr.send();
}

function cargarXML(xml) {
    var docXML = xml.responseXML;
   var tabla = "";
    var dias = docXML.getElementsByTagName("dia");
    var horas = docXML.getElementsByTagName("horario");

    console.log(dias[0].getAttribute("nombre") );
    

    for (let i = 0; i < horas.length; i++) {
        tabla += "<tr>";
        tabla += "<td>"+horas[0].getAttribute("nombre")+"</td>";
        for (let j = 0; j < dias.length; j++) {
           tabla += "<td>"+dias[j].getAttribute("nombre")+"</td>";
        }
        tabla += "</tr>";
    }

    for (let i = 0; i < horas[0].children.length; i++) {
        tabla += "<tr>";
        tabla += "<td>"+horas[0].getElementsByTagName("horas")[i].textContent+"</td>";
        for (let j = 0; j < dias.length; j++) {
           tabla += "<td>"+dias[j].getElementsByTagName("nombreMateria")[i].textContent+"</td>";
        }
        tabla += "</tr>";
    }
    document.getElementById("listaHorario").innerHTML = tabla;
}
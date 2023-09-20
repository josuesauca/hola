
document.getElementById("btnIngresar").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";
});

document.getElementById("btn-close").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
});

document.getElementsByName("formulario")[0].addEventListener("submit", (e) => {
    
    function cargarUsuarios(callback) {
        var xhr = new XMLHttpRequest();
        var ruta = "../data/users.json";
        xhr.open("GET",ruta, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if(typeof callback === "function"){
                    callback.apply(xhr);
                }
            }
        };
        xhr.send();
    } 

    e.preventDefault();

    cargarUsuarios(function (){

        var datos = JSON.parse(this.responseText);
        let user = document.getElementsByName("formulario")[0].username.value;
        let pass = document.getElementsByName("formulario")[0].password.value;
        let bandera = false;
        let contador = 0;
        while (!bandera && contador < Object.keys(datos.usuarios).length) {
            let username = new String(datos.usuarios[contador].username);
            let password = new String(datos.usuarios[contador].password);
            if(user.localeCompare(username) === 0 && pass.localeCompare(password) === 0 ){
                bandera = true;
            }
            contador++;
        }
        
        if (bandera) {
            alert("Bienvenido");
            window.location.href = "../HTML/menu.html";
        } else {
            alert("Error al ingresar");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }
    });
}); 




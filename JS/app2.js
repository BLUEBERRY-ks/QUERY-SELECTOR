const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");


// Guardar datos del formulario
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const datos = new FormData(formulario);

    let mascota = {};

    // Validar y construir objeto
    for (let [campo, valor] of datos.entries()) {

        if (valor.trim() === "") {
            alert(`El campo ${campo} está vacío`);
            return;
        }

        mascota[campo] = valor;
    }

    // Guardar en localStorage
    localStorage.setItem("mascota", JSON.stringify(mascota));

    // Mostrar información actualizada
    mostrarDatos();

});

// Función para mostrar los datos guardados
function mostrarDatos() {

    let mascota = JSON.parse(localStorage.getItem("mascota"));

    resultado.innerHTML = "";

    if (mascota) {

        for (let campo in mascota) {

            resultado.innerHTML += `
                <tr>
                    <td>${campo}</td>
                    <td>${mascota[campo]}</td>
                </tr>
            `;
        }
    }
}

// Mostrar datos al cargar la página
mostrarDatos();
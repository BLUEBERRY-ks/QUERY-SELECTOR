const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const datos = new FormData(formulario);
    const aprendiz = {};

    // Recorre los pares nombre/valor recibidos del formulario.
    for (const [campo, valor] of datos.entries()) {

        if (valor.trim() === "") {
            alert(`El campo ${campo} está vacío`);
            return;
        }
        aprendiz[campo] = valor;
    }

    // FormData solo incluye una casilla si está marcada.
    aprendiz.acepta = datos.has("acepta") ? "Sí" : "No";

    // localStorage guarda texto; JSON permite guardar y recuperar objetos.
    localStorage.setItem("aprendiz", JSON.stringify(aprendiz));

    mostrarAprendiz(aprendiz);
});

function mostrarAprendiz(aprendiz) {
    resultado.innerHTML = "";

    for (const campo in aprendiz) {
        resultado.innerHTML += `<p>${campo}: ${aprendiz[campo]}</p>`;
    }
}

// Al abrir o actualizar la página, muestra el último registro guardado.
const aprendizGuardado = localStorage.getItem("aprendiz");

if (aprendizGuardado) {
    mostrarAprendiz(JSON.parse(aprendizGuardado));
}
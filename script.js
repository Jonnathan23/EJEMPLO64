document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("personal-info-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores de los campos del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;

        // Construir el mensaje a mostrar
        const message = `Nombre: ${name}<br>
                         Correo electrónico: ${email}<br>
                         Edad: ${age}<br>
                         Género: ${gender}`;

        // Mostrar los datos en el elemento resultDiv
        resultDiv.innerHTML = message;
    });
});
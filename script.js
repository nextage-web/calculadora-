
function calcularMedia() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);

    const media = (nota1 + nota2) / 2;

    if (media >= 7) {
        document.getElementById("resultado").innerText =
            "Aprovado! Média: " + media;
    } else {
        document.getElementById("resultado").innerText =
            "Recuperação! Média: " + media;
    }
}

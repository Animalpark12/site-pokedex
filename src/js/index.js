const alterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemAlterarTema = document.querySelector(".imagem-botao");

alterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro")

    //Adiciona e remove a class "modo-escuro"
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemAlterarTema.setAttribute("src", "./src/images/sun.png");
    } else {
        imagemAlterarTema.setAttribute("src", "./src/images/moon.png");
    }
});
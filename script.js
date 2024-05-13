// alert("Hello GamificaAI")
 
// let menu = document.getElementById("#menu")

let menu = document.getElementById("menu")

let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

    function abrirFecharMenu(){
    // se o menu esta fechado 
    if(menu.classList.contains("menu-fechado")) {
        // abrir menu
        menu.classList.remove("menu-fechado")

        // mostrar iconex
        iconeX.style.display = "inline"

        // esconde barras
        iconeBarras.style.display = "none"
    } else {
        // fechar menu
        menu.classList.add("menu-fechado")

        
        // esconder iconex
        iconeX.style.display = "none"

        // mostrar barra
        iconeBarras.style.display = "inline"
    }
}
// assim que a janela mudar de tamanho
window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"

}
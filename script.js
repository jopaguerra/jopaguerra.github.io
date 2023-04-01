function abrirMenu (){
    let menuAberto = document.getElementById('menu-lateral');

    if(menuAberto.style.width == "0px"){
        menuAberto.style.width = "180px";
        menuAberto.style.display = "block"
    } else {
        menuAberto.style.width = "0px";
        menuAberto.style.display= "none";
    }
}
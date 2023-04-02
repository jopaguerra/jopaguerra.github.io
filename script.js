function abrirMenu (){
    let menuAberto = document.getElementById('menu-lateral');

    if(menuAberto.style.display == "none"){
        menuAberto.style.width = "180px";
        menuAberto.style.display = "block";
        menuAberto.style.height = "auto";
    } else {
        menuAberto.style.height = "0px";
        menuAberto.style.width = "0px";
        menuAberto.style.display= "none";
    }
}
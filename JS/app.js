const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    // On peut vérifier grâce à la console qu'au click sur le bouton ça nous récupère bien le menu
    //console.log(menu)

    //Pour changer le style du bouton/menu on peut le faire directement par JS ->
    // menu.style.display = "flex"
    // Mais le mieux reste de créer directement une classe dans le CSS
    menu.classList.toggle("active");
    // On utilise toggle ici pour éviter de faire un add et remove.
    if(menu.classList.contains("active")){
        document.querySelector("header .material-icons").innerHTML = "close"
    } else {
        document.querySelector("header .material-icons").innerHTML = "menu"
    }
}
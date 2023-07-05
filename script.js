
let menu_icon = document.getElementById("x_btn");
menu_icon.addEventListener("click", menubar);

function menubar() {
    let menulinks = document.getElementById("menu_links");
    let menuicon = document.getElementById("x_btn");

    if (menulinks.style.display == "none") {
        menulinks.style.display = "flex";
        menuicon.classList = "fa-solid fa-xmark";
        menuicon.style.color = "#000";
        
      } else {
        menulinks.style.display = "none";
        menuicon.classList = "fa-solid fa-bars";
        menuicon.style.color = "#fff";
      }

}






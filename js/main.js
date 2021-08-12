 let menu = document.querySelector(".menu");
 let openMenu = document.querySelector(".open-menu");
 let cloesMenu = document.querySelector(".close-meu");

 openMenu.addEventListener('click', function(){
     menu.style.display = "flex";
     cloesMenu.style.display = "inline-block";
     openMenu.style.display = "none";

     
 });
 cloesMenu.addEventListener('click', function(){
    menu.style.display = "none";
    cloesMenu.style.display = "none";
    openMenu.style.display = "inline-block";

 })
const menuBtn =  document.getElementById("menuBtn");
const menuBtnAdd =  document.getElementById("menuBtnAdd");

const menuNav =  document.getElementById("menuNav");
const menu =  document.getElementById("menu");

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('verticalMenu');
    menuNav.classList.toggle('verticalNav');
});

menuBtnAdd.addEventListener('click', function () {
    menu.innerHTML += "<li>Truc</li>";
});
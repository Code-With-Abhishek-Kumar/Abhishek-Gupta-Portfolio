// let nav_li = document.querySelectorAll('nav_li');
let nav = document.querySelector('nav');
/*  use id to perform operation becouse id select single element  */
// let nav_btn = document.querySelector('#nav-btn');
let nav_btn = document.getElementById('nav-btn');
// let nav_li = document.getElementsByClassName("nav_li");
let nav_li = document.getElementById("nav_li");

//   .nav_li{
//     display: none;
// }


console.log(nav_li);
console.log(nav);
console.log(nav_btn)


var menu = 0;
{/* <i class="fa-solid fa-xmark"></i>  */ }

nav_btn.addEventListener('click', () => {
    if (menu == 0) {
        nav.style.height = "100%"
        nav_li.style.display = "flex";
        nav_btn.classList.remove("fa-bars");
        nav_btn.classList.add("fa-xmark");

        menu++;


    } else {
        nav.style.height = "auto"
        nav_li.style.display = "none";

        menu--;
        nav_btn.classList.add("fa-bars");
        nav_btn.classList.remove("fa-xmark");

    }





})
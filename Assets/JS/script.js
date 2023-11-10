let nav = document.querySelector("nav");


let nav_li = document.getElementById("nav_li");

//   .nav_li{
//     display: none;
// }

// console.log(nav_li);
// console.log(nav);
// console.log(nav_btn);

var menu = 0;


let nav_btn = document.getElementById("nav-btn");
console.log(nav_btn);


nav_btn.addEventListener("click", () => {
    if (menu == 0) {
        nav.style.height = "100%";
        nav_li.style.display = "flex";
        nav_btn.classList.remove("fa-bars");
        nav_btn.classList.add("fa-xmark");

        menu++;
    } else {
        nav.style.height = "auto";
        nav_li.style.display = "none";

        menu--;
        nav_btn.classList.add("fa-bars");
        nav_btn.classList.remove("fa-xmark");
    }
});
  
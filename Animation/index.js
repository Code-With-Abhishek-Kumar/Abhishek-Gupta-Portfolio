// nav start 

let nav = gsap.timeline();

nav.to(".Container_logo , Container_li, li", {

    y: -20,
    duration: 2,
    opacity: 0.8,
    stagger: 0.2,





});







let hero = gsap.timeline();


// hero sec Animation  start 


hero.from(".Main_Container_img", {

    x: -280,
    rotate: 5,
    opacity: 0,
    duration: 1,
    scale: 0,
    delay: 1,





});


hero.from(".Main_Container_text , #Main_Container_text1, #Main_Container_text2, #Main_Container_text3, #Main_Container_text4 , .btn_red ", {


    duration: 1,

    opacity: 0,
    x: -50,
    stagger: 0.2,
    rotate: 20,

});


// hero sec Animation  end


// learn scrole tragar 



let service = gsap.timeline();



service.from(" .box img", {

    x: -50,
    opacity: 0,


    stagger: 0.8,


});



gsap.from(".Service .box ", {
    scrollTrigger: {
        trigger: ".h-primary  ",
        markers: true,
        scrollar: "body",


        start: "top 60%",
    },

    y: 75,
    duration: 2,
    opacity: 0,

    smoth: 0.5,


});

gsap.to(".box img", {

    scrollTrigger: {
        trigger: ".box ",
        markers: true,
        scrollar: "body",
        start: "top 60%"


    },

    stagger: 0.3,

    x: 75,
    duration: 1,
    smoth: 0.2,


})



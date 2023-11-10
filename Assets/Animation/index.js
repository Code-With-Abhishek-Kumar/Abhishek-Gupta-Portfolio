// nav start 

var nav1 = gsap.timeline();  

nav1.to(".Container_logo , Container_li, li", {

    y: -20,
    duration: 2,
    opacity: 0.8,
    stagger: 0.2,





});







let hero = gsap.timeline();


// hero sec Animation  start 


// hero.from(".Main_Container_img", {

//     x: -280,
//     rotate: 5,
//     opacity: 0,
//     duration: 1,
//     scale: 0,
//     delay: 1,





// });

hero.from(".sec1 .Main_Container_img ", {
    x: -280,
    opacity: 0,
    duration: 1,
    scale: 1,
    delay: 1,


    // marker: true,

    scrollTrigger: {
        trigger: "sec1 ",
        scroller: "body",
        // markers: true,
        start: "top 2%",
        end: "top -200%",
        scrub: 0.5,
        pin: true,

    }

})


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

service.to(".Service .box ", {
    y: -200,
    opacity: 1,
    // backgroundColor: "rgb(240,240,218)",
    // border:"2px solid black",




    scrollTrigger: {
        trigger: "Service",
        // markers: true,
        // markers: true,
        scroller: "body",
        scrub: 0.5,
        pin: true,
        start: "top 20%",
        end: "top -100%",






    },




});




gsap.to(".box .h-primary", {
    color: "purple",
    fontStyle: "italic",
    fontWeight: 100,


    scrollTrigger: {
        trigger: ".h-primary ",
        scrollar: "box",
        // markers: true, 
        start: "top 0%",
        scrub: 0.005,
        end: "top 0%",


    },




})



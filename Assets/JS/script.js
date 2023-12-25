let cursor = document.getElementById("cursor");


document.querySelector('main').addEventListener('mousemove', function (dets) {



    gsap.to(cursor, {
        left: dets.x + "px",
        top: dets.y + "px",


    })


})




function Locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}

Locomotive();



// let images = document.querySelectorAll('.img-container');


// images.forEach(function (val) {

//     val.addEventListener('mousemove', function (dets) {
//         val.childNodes[3].style.left = dets.x + "px";
//         // gsap.to(cursor, {
//         //     display: "none",
//         // })

//         // gsap.to("#blur", {
//         //     display: "none",
//         // })


//     });
//     val.addEventListener('mouseenter', function (dets) {
//         // val.childNodes[3].style.opacity = 1;
//         // cursor.style.opacity = 0;
//         val.style.backgroundColor = "white";
//         val.style.border = "2px solid black";


//     });

//     val.addEventListener('mouseout', function (dets) {

//         val.childNodes[3].style.left = "0px";
//         val.style.backgroundColor = "black";

//         val.style.border = "2px solid white";




//     })
// })







function page1Anim() {

    document.querySelector('#page1 .first-layer h2').addEventListener('mousemove', function (dets) {

        // alert("Ffff")
        gsap.to('#blur', {


            // mixBlendMode: "normal",
            // opacity: 1,


            left: dets.x + "px",
            top: dets.y + "px",






        })


    })


    document.querySelector('#page1 .first-layer h2').addEventListener('mouseenter', function (d) {

        // alert("Ffff")
        gsap.to('#blur', {


            // mixBlendMode: "normal",
            // opacity: 1,
            display: "block",

            // left: dets.x + "px",
            // top: dets.y + "px",
            // transition: "all ease-in 0.1",




        })

        gsap.to(cursor, {



            display: "none",
            backgroundColor: "transparent",





        })


    })



    document.querySelector('#page1 .first-layer h2').addEventListener('mouseout', function () {

        // alert("Ffff")
        gsap.to('#blur', {
            display: "none",






        })

        gsap.to(cursor, {

            // display: "block",
            backgroundColor: "rgb(7, 240, 7)",


        })






    })

    document.querySelector('#page1').addEventListener('mouseenter', function (d) {

        gsap.to(cursor, {
            display: "none",



        })


    })
}


page1Anim();


function page2Anim() {


    document.querySelector('#page2').addEventListener('mouseenter', function (d) {



        gsap.to(cursor, {



            display: "block",






        })


    })

}


page2Anim()



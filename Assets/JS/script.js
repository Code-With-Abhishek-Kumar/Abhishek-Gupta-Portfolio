let cursor = document.getElementById("cursor");


document.querySelector('main').addEventListener('mousemove', function (dets) {



    gsap.to(cursor, {
        left: dets.x + "px",
        top: dets.y + "px",


    })

    gsap.to("#blur", {
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


let img = [
    {
        img: "./Assets/Image/Img1.png",

    },
    {
        img: "./Assets/Image/Img2.png",

    },
    {
        img: "./Assets/Image/Img3.png",

    }

]

function image() {

    let clutter = "";


    img.forEach(function (dets, a) {


        clutter += `
    <div class="img-container">
                    <h3>Image</h3>
                    <img id=${a} src=${dets.img} alt srcset >

                </div>
                `



    })

    document.getElementById('page3').innerHTML = clutter;



    let images = document.querySelectorAll('.img-container');


    images.forEach(function (val) {

        val.addEventListener('mousemove', function (dets) {
            val.childNodes[3].style.left = dets.x + "px";
            // gsap.to(cursor, {
            //     display: "none",
            // })

            // gsap.to("#blur", {
            //     display: "none",
            // })

        });
        val.addEventListener('mousein', function (dets) {
            // val.childNodes[3].style.opacity = 1;
            // cursor.style.opacity = 0;
            val.style.backgroundColor = "red";


        });

        val.addEventListener('mouseout', function (dets) {

            val.style.backgroundColor = "black";
            val.childNodes[3].style.left = "0px";



        })
    })



}

image();


let cursor = document.getElementById("cursor");


document.querySelector('main').addEventListener('mousemove', function (dets) {



    gsap.to(cursor, {
        left: dets.x + "px",
        top: dets.y + "px",


    })


})

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



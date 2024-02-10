

var typed = new Typed('#typed', {
    strings: ['Abhishek Gupta', 'Web Developer', 'UI/UX Designer', 'Ethical Hacker'],
    typeSpeed: 80,
    smartBackspace: true,
    backSpeed: 50,
   
    loop:true,
});


let cursor = document.getElementById("cursor");


document.querySelector('main').addEventListener('mousemove', function (dets) {



    gsap.to(cursor, {
        left: dets.x + "px",
        top: dets.y + "px",


    })


    gsap.to(blue, {
        left: dets.x + "px",
        top: dets.y + "px",
  


    })

})





function page2Anim() {


    document.querySelector('#page2').addEventListener('mouseenter', function (d) {



        gsap.to(cursor, {



            display: "block",






        })

      


    })

}


page2Anim()




let Elmyachivement = document.querySelectorAll('.myachivement');
let img_div = document.getElementById('image');

Elmyachivement.forEach(function(dets){

 
   

    let data_img =  dets.getAttribute('data-img');

    dets.addEventListener('mouseenter' , function(){
      
        console.log(dets);
        img_div.style.display = "block";
        img_div.style.backgroundImage = `url(${data_img})`
    })


    dets.addEventListener('mouseleave' , function(){
        img_div.style.display = "none";
    })
    // console.log(dets)
})



// document.addEventListener('contextmenu' , function(dets){
//     dets.preventDefault()
// })

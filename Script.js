/*==toggle icon==*/
let menuIcon = document.querySelector('#menu-icon');
let nvbar = document.querySelector('.nvbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    nvbar.classList.toggle('active');
};



/*==scroll section active link==*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll=()=>{
    section.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id')

        if(top>=offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });

        };
     });
/*==sticky navbar==*/
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY >100);

/*==toggle icon remove==*/
menuIcon.classList.remove('bx-x');
nvbar.classList.remove('active');


};

/*==scroll reveal==*/
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200

});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact',
 { origin: 'bottom' 
});
ScrollReveal().reveal('.home-content h1, .about-image',
 { origin: 'Left' 
});
ScrollReveal().reveal('.home-content p, .about-content',
 { origin: 'right' 
});


/*==styped js==*/

const typed = new Typed('.multiple-text',{
strings: ['Senior Analyst'],
typeSpeed:100,
backSpeed:100,
bcakDelay:1000,
loop:true


});




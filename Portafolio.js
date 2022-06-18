window.addEventListener("scroll", function() {
    const header = document.querySelector('header');

    header.classList.toggle("header__abajo",window.scrollY>0);

});

window.sr = ScrollReveal();
sr.reveal('.title_developer',{
    duration:1400,
    origin: 'left',
    distance:'300px',

});
sr.reveal('.information',{
    duration:1000,
    // opacity: 1,
    scale: 0.85,
    delay: 100
});
sr.reveal('.perfil',{
    duration:3500,
    // origin: 'right',
    // distance:'200px',
    // opacity: 1,
    // scale: 0.85,
    delay: 100
});
sr.reveal('.html',{
    duration:1600,
    // opacity:1,
    scale: 1.45,
    delay: 400
});
sr.reveal('.css',{
    duration:1400,
    // opacity: 1.5,
    scale: 1.45,
    delay: 400

});
sr.reveal('.js',{
    duration:1200,
    // opacity: 1.8,
    scale: 1.45,
    delay: 400
});
sr.reveal('.react',{
    duration:1500,
    // opacity: 2.5,
    scale: 1.45,
    delay: 300
});
sr.reveal('.laravel',{
    duration:1400,
    // opacity: 5,
    scale: 1.90,
    delay: 100
});
sr.reveal('.database',{
    duration:1200,
    // opacity: 2,
    scale: 1.65,
    delay: 100

});
sr.reveal('.title_me',{
    duration:2000,
    // origin: 'right',
    // distance:'200px',
    scale: 0.85,
    delay: 100
});
sr.reveal('.me',{
    duration:1500,
    // origin: 'right',
    // distance:'200px',
    scale: 0.85,
    delay: 100
});



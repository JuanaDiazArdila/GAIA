/*menu*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*remove menu mobile*/
const navLink = document.querySelectorAll('.navLink')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*swiper new slider*/

let newSwiper = new Swiper(".new-swiper", {
    centeredslides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
})


/*scroll up*/


function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 460) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*Animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300
})

sr.reveal(`.home-swiper, .new-swiper, .newslc`)
sr.reveal(`.categorydata, .footercontent`, { interval: 100 })
sr.reveal(`.aboutdata, .discountimg`, { origin: 'left' })
sr.reveal(`.aboutimg, .discountdata`, { origin: 'left' })

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function () {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform 1s";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function () {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 1500)
    }
}
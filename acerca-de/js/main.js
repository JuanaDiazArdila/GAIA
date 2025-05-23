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

navLink.forEach(n=> n.addEventListener('click', linkAction))

/*swiper nuevos slider*/

let newSwiper = new Swiper (".new-swiper", {
    centeredslides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
})


/*scroll up*/


function scrollUp() {
    const scrollUp = document.getElementById ('scroll-up');
    if(this.scrollY >= 460 ) scrollUp.classList.add('show-scroll');
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
sr.reveal(`.categorydata, .footercontent`, {interval: 100})
sr.reveal(`.aboutdata, .discountimg`, {origin: 'left'})
sr.reveal(`.aboutimg, .discountdata`, {origin: 'left'})
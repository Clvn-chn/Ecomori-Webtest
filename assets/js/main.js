/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'), 
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*============== MENU SHOW ================*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*============== navbar =====================*/
// Ambil elemen navbar
const navbar = document.getElementById('header');
const navLogo = document.querySelector('.nav__logo');
const navLinks = document.querySelectorAll('.nav__link');
const navTooglemenu = document.querySelector('.nav__toggle');
const logoText = document.querySelector('.logo-text');
const logomaintext = document.querySelector('.logo-main');
const logosubtext = document.querySelector('.logo-sub');

window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    navbar.style.backgroundColor = '#ffffff';
    navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    navLogo.style.color = 'hsl(140, 40%, 48%)';
    logoText.style.color = 'black';
    logomaintext.style.color = 'black'
    logosubtext.style.color = 'black'
    logosubtext.style.opacity = 0.7
    navLinks.forEach(link => {
        link.style.color = '#000000';
    });
    navTooglemenu.style.color = '#000000';

  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.boxShadow = 'none';
    navLogo.style.color = '#ffffff';
    logoText.style.color = '#ffffff';
    logomaintext.style.color = '#e7d5b9'
    logosubtext.style.color = 'white'
    logosubtext.style.opacity = 0.7
    navLinks.forEach(link => {
        link.style.color = '#ffffff';
    });
    navTooglemenu.style.color = '#ffffff';
  }
});

const header = document.getElementById("header")

window.addEventListener("scroll", function(){

   if(window.scrollY >= 50){
      header.classList.add("scroll-header")
   } else {
      header.classList.remove("scroll-header")
   }

})

/*============== MENU HIDDEN ================*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
    const shadowHeader = () =>{
        const header = document.getElementById('header')
        this.scrollY >= 50 ? header.classList.add('shadow-header')
                           : header.classList.remove('shadow-header')
    }
window.addEventListener('scroll', shadowHeader)

/*=============== CHOOSE FAQ ===============*/ 
const faqItems = document.querySelectorAll('.choose__faq-item')

faqItems.forEach((item) =>{
    const faqHeader = item.querySelector('.choose__faq-header')

    faqHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.faq-open')
        toggleItem(item)

        if(openItem && openItem != item){  
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const faqContent = item.querySelector('.choose__faq-content')

    if(item.classList.contains('faq-open')){
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    }else{
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }


}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop &&  scrollDown <= sectionTop+ sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }        
    } )
}
window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr.reveal(`.about__image`, {origin: 'right'})
sr.reveal(`.enjoy__card, .product__card`, {interval: 100})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__img`, {origin: 'left'})
sr.reveal(`.contact__container`, {origin: 'right'})
sr.reveal(`.contact__form`, {interval: 100})
sr.reveal(`.choose__image`, {origin: 'left'})
sr.reveal(`.choose__content`, {origin: 'right'})




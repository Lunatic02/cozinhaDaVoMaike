function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');


function activeAccordion(){
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item)=>{
    item.addEventListener('click', activeAccordion);
})
}

initAccordion();

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

    }

linksInternos.forEach((link)=>{
    link.addEventListener('click', scrollToSection);
})
};
initScrollSuave();

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');

if(sections.length){

const windowMetade = window.innerHeight * 0.6;

function animaScroll(){ 
    sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if(sectionTop<0){
            section.classList.add('ativo')
        }
    })
}
animaScroll();


window.addEventListener('scroll', animaScroll)
}
}

initAnimacaoScroll();


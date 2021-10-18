burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click' , ()=>{
 
    navlist.classList.toggle('v-bar-js');
    rightnav.classList.toggle('v-bar-js');
    navbar.classList.toggle('h-nav-js');
})
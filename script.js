const menuIcon = document.querySelector('.hamburgerMenu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})
window.onload = () => {
    if (window.innerWidth > 680) {
        container.classList.add('noCollapse');
        container.classList.remove('collapse');
        navbar.classList.remove('change');
    } else {
        container.classList.add('collapse');
        container.classList.remove('noCollapse');
    }
}
const container = document.querySelector('.container');
window.addEventListener('resize', () => {
    if (window.innerWidth > 680){
    container.classList.add('noCollapse');
        container.classList.remove('collapse');
        navbar.classList.remove('change');
}else {
    container.classList.add('collapse');
    container.classList.remove('noCollapse');
    }
})

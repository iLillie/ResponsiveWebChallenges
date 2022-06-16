let mobileNavBg = document.getElementById('mobile-nav-bg');
let mobileNavList = document.getElementById('nav-list');

let openMenu = () => {
    mobileNavBg.classList.toggle('menu-closed-bg');
    mobileNavList.classList.toggle('menu-open');
}

let mobileNavBg = document.getElementById('mobile-nav-bg');
let mobileNavList = document.getElementById('main-menu');

let openMenu = (element) => {
    ariaExpand(element);
    mobileNavBg.classList.toggle('menu-closed-bg');
    mobileNavList.classList.toggle('menu-open');
}

let ariaExpand = (element) => {
    var ariaExpandedValue = element.getAttribute("aria-expanded") === 'true' ? true : false;
    element.setAttribute('aria-expanded', !ariaExpandedValue)
}

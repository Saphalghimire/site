
      
function toggleMenu() {
    const menu = document.getElementById('menuList');
    menu.classList.toggle('show');
}


window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
};

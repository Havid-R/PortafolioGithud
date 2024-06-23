//Menu
window.addEventListener("scroll", function() {
    var header = document.getElementById('Menu');
    var headerHeight = header.offsetHeight;
    var navList = header.querySelector('ul');
    if (window.pageYOffset > headerHeight) {
        header.style.position = 'fixed';
        header.style.zIndex = '99999999999';
        header.style.width = '550px';
        header.style.borderRadius = '0 0 20px 0';
        navList.style.transform = 'translateX(0)';
    } else {
        header.style.position = '';
        header.style.zIndex = '';
        header.style.width = '';
        header.style.borderRadius = '';
        navList.style.transform = '';
    }
});
//welcome
window.onload = function() {
    setTimeout(function() {
        document.getElementById('welcomeDiv').classList.add('hide');
        document.getElementById('Home').classList.remove('hide');
    }, 1500);
}
//lista hover
document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.proyectLista li');
    var image = document.querySelector('.subproyectVista img');
    listItems.forEach(function(listItem) {
        listItem.addEventListener('mouseover', function() {
            var link = this.querySelector('a');
            if (link.href.includes('Taller/Taller1.html')) {
                image.src = '/Taller/fotosT.png';
            } else if (link.href.includes('/Img/P1..png')) {
                image.src = '/Img/P1..png';
            } else if (link.href.includes('/Img/P2.png')) {
                image.src = '/Img/P2.png';
            } else if (link.href.includes('/Img/P3.png')) {
                image.src = '/Img/P3.png';
            } else if (link.href.includes('/Img/P4.png')) {
                image.src = '/Img/P4.png';
            }
        });
        listItem.addEventListener('mouseout', function() {
            image.src = '/Img/P4.png';
        });
    });
});


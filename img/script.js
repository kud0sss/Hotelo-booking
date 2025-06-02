document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    let isMenuClick = false;

    if (!menuBtn || !mobileMenu || !closeMenuBtn) {
        console.error('Ошибка: Один из элементов не найден в DOM!');
        return;
    }

    menuBtn.addEventListener('click', function () {
        isMenuClick = true;
        mobileMenu.classList.toggle('active');
        setTimeout(function () {
            isMenuClick = false;
        }, 100);
    });

    closeMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
        if (!isMenuClick && !mobileMenu.contains(event.target) && event.target !== menuBtn) {
            mobileMenu.classList.remove('active');
        }
    });
});
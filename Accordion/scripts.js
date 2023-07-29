const accordions = document.getElementsByClassName('container');

Array.from(accordions).forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
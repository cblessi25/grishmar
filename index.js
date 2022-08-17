const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.link__item');

navToggle.addEventListener('click', toggle);
// navToggle.addEventListener('click', () => {
//     document.body.classList.add('nav-open');
// });


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');

    });
});


function toggle() {
    if (document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
    } else {
        document.body.classList.add('nav-open');
    }
}
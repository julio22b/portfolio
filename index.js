const hero = document.querySelector('#hero');
const sections = document.querySelectorAll('section');
const selector = document.querySelector('.selector');
const links = document.querySelectorAll('a');
const navBar = document.querySelector('nav');
const black = '#393d3f';
const white = '#ebebeb';

const observerOpts = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        const li = document.querySelector(`[data-section=${entry.target.id}]`);
        const link = document.querySelector(`[data-section=${entry.target.id}] a`);
        const dimensions = li.getBoundingClientRect();
        if (entry.isIntersecting) {
            links.forEach((link) => link.classList.remove('black-text'));
            selector.style.width = `${dimensions.width + 10}px`;
            selector.style.height = `${dimensions.height}px`;
            selector.style.top = `${dimensions.top}px`;
            selector.style.left = `${dimensions.left}px`;
            link.classList.add('black-text');
        }
    });
}, observerOpts);

sections.forEach((section) => {
    observer.observe(section);
});

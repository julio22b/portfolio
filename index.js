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

const heroSection = document.querySelector('#hero');
const confetti = document.querySelector('.confetti');
const goToProjects = document.querySelector('.to-projects');
const heroObserverOpts = { threshold: 0.25 };

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            confetti.classList.add('show');
            goToProjects.classList.add('show');
        } else {
            confetti.classList.remove('show');
            goToProjects.classList.remove('show');
        }
    });
}, heroObserverOpts);

heroObserver.observe(heroSection);

const projectsSection = document.querySelector('#facebook');
goToProjects.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

const videoModal = document.querySelector('.video-modal');
const videoModalVideo = document.querySelector('.video-modal video');
const videoModalSource = document.querySelector('.video-modal source');
const videoModalDesc = document.querySelector('.video-modal p');
const videos = document.querySelectorAll('.images figure video');
videos.forEach((video) => {
    video.addEventListener('click', (e) => {
        const src = e.target.children[0].getAttribute('src');
        videoModal.classList.add('open');
        videoModalSource.setAttribute('src', src);
        videoModalDesc.textContent = e.target.dataset.desc;
        videoModalVideo.load();
    });
});

videoModal.addEventListener('click', (e) => {
    videoModal.classList.remove('open');
});

const contactSection = document.querySelector('#contact');
const contactObserverOpts = {
    threshold: 0.25,
};

const contactObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            return confetti.classList.add('show');
        }
        confetti.classList.remove('show');
    });
}, contactObserverOpts);

contactObserver.observe(contactSection);

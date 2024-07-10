const hero = document.querySelector('#hero');
const sections = document.querySelectorAll('section');
const selector = document.querySelector('.selector');
const links = document.querySelectorAll('a');
const navBar = document.querySelector('nav');
const black = '#393d3f';
const white = '#ebebeb';

console.log(sections)

const observerOpts = { threshold: 0.25 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const li = document.querySelector(`[data-section=${entry.target.dataset.section}]`);
        let link = document.querySelector(`[data-section=${entry.target.id}] a`);

        const dimensions = li.getBoundingClientRect();
        if (entry.isIntersecting) {
            links.forEach((link) => link.classList.remove('black-text'));
            selector.style.width = `${dimensions.width + 10}px`;
            selector.style.height = `${dimensions.height}px`;
            selector.style.top = `${dimensions.top}px`;
            selector.style.left = `${dimensions.left}px`;
            if (link === null) {
                link = document.querySelector(`[data-section=${entry.target.dataset.section}]`);
            }
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
const heroObserverOpts = { threshold: 0.8 };

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

const workExperienceSection = document.querySelector('#work-experience');
goToProjects.addEventListener('click', () => {
    workExperienceSection.scrollIntoView();
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
    threshold: 0.15,
};

const contactObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            return confetti.classList.add('show');
        }
    });
}, contactObserverOpts);

contactObserver.observe(contactSection);

const aboutSection = document.querySelector('#about');
const aboutObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            return confetti.classList.remove('show');
        }
    });
}, contactObserverOpts);

aboutObserver.observe(aboutSection);

const toTop = document.querySelector('.back-to-top');
toTop.addEventListener('click', () => {
    heroSection.scrollIntoView();
});

const name = document.querySelectorAll('#name-svg > path');
const lengths = [];
for (let i = 0; i < name.length; i++) {
    lengths.push(name[i].getTotalLength());
}
console.log(lengths);

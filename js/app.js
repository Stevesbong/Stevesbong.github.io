// console.log('app.js working')

// const navLink = document.querySelectorAll(".link-list");
// console.log(navLink);

// navLink.forEach( navList => {
//     navList.addEventListener('click', (e) => {
//         console.log('clicked', e.target)
//     })
// })

// GET ALL SECTION CLASS
const sections = document.querySelectorAll('.section');
// GET ALL NAV LINK
const navbarLinks = document.querySelectorAll('.link-list a');

// ACTIVE EACH NAVBAR LINK WHEN YOU SCROLL DOWN
document.addEventListener('DOMContentLoaded', () => {
    
    let currentActiveLink = 0;
    window.addEventListener('scroll', ()=> {

        const current = sections.length - [...sections]
            .reverse()
            .findIndex( section => window.scrollY > section.offsetTop - 400 ) - 1;
        if(current !== currentActiveLink) {
            removeAcitveClass();
            currentActiveLink = current;
            addActiveClass(current);
        }

        // MAKING STICKY NAVBAR WHEN SCROLL
        const navbar = document.getElementById('nav');
        const sticky = navbar.offsetTop;

        if(window.pageYOffset > sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

    });
}, false);

// REMOVE ACTIVE CLASS
function removeAcitveClass() {
    navbarLinks.forEach( link => link.classList.remove('active') );
}

// ADD ACTIVE CLASS
function addActiveClass(i) {
    navbarLinks[i].classList.add('active');
}
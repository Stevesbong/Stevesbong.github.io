console.log('app.js working')

const navLink = document.querySelectorAll(".link-list");
console.log(navLink);

navLink.forEach( navList => {
    navList.addEventListener('click', (e) => {
        console.log('clicked', e.target)
    })
})

// MAKING STICKY NAVBAR WHEN SCROLL
const navbar = document.getElementById('top');
const sticky = navbar.offsetTop;

window.onscroll = () => {
    if(window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

const sections = document.querySelectorAll('.section');
    const navbarLinks = document.querySelectorAll('.link-list a');
document.addEventListener('DOMContentLoaded', () => {
    

    console.log('hi');
    console.log(sections);
    console.log(navbarLinks);
    console.log([...sections].reverse());
    console.log([...sections]);
    
    let currentActive = 0;
    window.addEventListener('scroll', ()=> {
        const current = sections.length - [...sections].reverse().findIndex( section => window.scrollY > section.offsetTop - 200 ) -1;
        console.log(current)
        console.log(navbarLinks[current])
        if(current !== currentActive) {
            removeAcitve();
            currentActive = current;
            addActive(current)

        }

    })
}, false)

function removeAcitve() {
    navbarLinks.forEach( link => link.classList.remove('active') )
}

function addActive(i) {
    navbarLinks[i].classList.add('active');
}
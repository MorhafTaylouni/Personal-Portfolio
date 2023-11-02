/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu');
const navToogle = document.getElementById('nav_toogle');
const navClose = document.getElementById('nav_close');

if(navToogle)
{
    navToogle.addEventListener('click', () =>
    {
        navMenu.classList.add('show_menu')
    });
}

if(navClose)
{
    navClose.addEventListener('click', () =>
    {
        navMenu.classList.remove('show_menu')
    });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelector('.nav_link')

const linkAction = () => 
{
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu')
}
// navLink.foreach(n => n.addEventListener('click', linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>
{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow_header')
                       : header.classList.remove('shadow_header')
};

window.addEventListener('scroll', shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact_form');
const contactMessage = document.getElementById('contact_message');

const sendEmail = (e) =>
{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey

    emailjs.sendForm('service_wq8rrmj', 'template_vbjzdp8', '#contact_form', 'Zb1WGeSrCdyUkAUK9')
    .then(() =>
    {
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //remove message
        setTimeout(() =>
        {
            contactMessage.textContent = ' '
        }, 1000)

        //clear input fields
        contactForm.reset();
    }, () =>
    {
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })

}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>
{
    const scrollUp = document.getElementById('scroll_up')
    this.scrollY >= 350 ? scrollUp.classList.add('show_scroll')
                        : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => 
{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight)
        {
            sectionsClass.classList.add('active_link')
        }else
        {
            sectionsClass.classList.remove('active_link')
        }
    });
}
window.addEventListener('scroll', scrollActive)



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme_button');
const darkTheme = 'dark_theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected_theme');
const selectedIcon = localStorage.getItem('selected_icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';


if(selectedTheme)
{
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () =>
{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected_theme', getCurrentTheme())
    localStorage.setItem('selected_icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

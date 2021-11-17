const headerBackground =(header)=> {
  window.addEventListener('scroll', () => (window.pageYOffset >= 450) ? header.classList.add('active') : header.classList.remove('active'));
}
headerBackground(document.querySelector('header'));
  
const clickHamburgerBtn =(button)=> {
  button.addEventListener('click', () => {
    if(button.getAttribute('src') === "img/icon-hamburger.svg") {
      button.src = 'img/icon-close.svg';
    } else {
      button.src = "img/icon-hamburger.svg";
    }
    // removed dropdown active
    for(drop of dropDownNav) drop.classList.remove('show');
   // document.querySelector('.nav-links')
   navLink.classList.toggle('active');
   document.body.classList.toggle('active');
  });
  
}
clickHamburgerBtn(document.querySelector('.hamburger-btn'));

// navbar dropdown
const navLink = document.querySelector('.nav-links');
const dropDownNav = document.querySelectorAll('.drop-down-nav-link');

const dropDown =(drop)=> {
  drop.addEventListener('click', e => {
    if(e.target.classList.contains('drop-down-title-txt')) {
      dropDownNav.forEach(drop => {
        if(!drop.contains(e.target)) {
          drop.classList.remove('show');
        }
      });
      e.target.parentElement.parentElement.classList.toggle('show');
    }
  });
}
dropDown(navLink);
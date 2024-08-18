const nav = document.querySelector('.nav');
const btnMobile = document.querySelector('.nav__mobile--btn');

const toggleMobileNav = () => {
  console.log('test??');

  nav.classList.toggle('open');
};

btnMobile.addEventListener('click', toggleMobileNav);

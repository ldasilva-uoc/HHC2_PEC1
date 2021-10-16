/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav__list-item');

window.addEventListener('scroll', ()=> {
  let current = '';

  sections.forEach( section  => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop)
    {
      current = section.getAttribute('id');
    }


  })



  navLi.forEach( li => {
    li.classList.remove('nav__list-item--selected');
    if(li.classList.contains(current)){
      li.classList.add('nav__list-item--selected');
    }
  })
} )
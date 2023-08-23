(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();

// (() => {
//     const refs = {
//       openMenuBtn: document.querySelector('[data-menu-open]'),
//       closeMenuBtn: document.querySelector('[data-menu-close]'),
//       menu: document.querySelector('[data-menu]'),
//     };
  
//     refs.openMenuBtn.addEventListener('click', toggleModal);
//     refs.closeMenuBtn.addEventListener('click', toggleModal);
  
//     function toggleModal() {
//       refs.menu.classList.toggle('is-open');
//     }
//   })();


//   const toggle = document.querySelector(".menu-toggle");
// const siteNav = document.querySelector(".site-nav");



// const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//   };

// openMenuBtn.addEventListener('click', )

// toggle.addEventListener("click", function() {
//   if (siteNav.classList.contains("site-nav--open")) {
//     siteNav.classList.remove("site-nav--open");
//     toggle.classList.remove("open");

//     siteNav.classList.add("site-nav--closed");
//   } else {
//     siteNav.classList.remove("site-nav--closed");
//     toggle.classList.add("open");

//     siteNav.classList.add("site-nav--open");
//   }
//   // siteNav.classList.toggle("site-nav--open");
//   // toggle.classList.toggle("open");
// });
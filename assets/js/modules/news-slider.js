'use strict';

const slides = [
  {
    id: 1,
    img: 'assets/images/news-1.webp',
    title:
      'Astara se convierte en el importador exclusivo de Zeekr en Colombia',
    content:
      'La compañía de Movilidad Abierta expande su oferta eléctrica en Colombia con una nueva asociación con Zeekr.',
    link: '#',
  },
  {
    id: 2,
    img: 'assets/images/news-2.jpeg',
    title: 'El Astara Team certifica un balance neto de cero emisiones',
    content:
      'Gracias al uso del combustible sintético 100% renovable, los coches de competición del Astara Team tuvieron un balance cero de emisiones.',
    link: '#',
  },
  {
    id: 3,
    img: 'assets/images/news-3.webp',
    title: 'Astara distribuirá Fotón en España',
    content:
      'La Compañía de Movilidad Abierta amplía su cartera con una nueva asociación con Foton Motor.',
    link: '#',
  },
  {
    id: 4,
    img: 'assets/images/news-4.webp',
    title:
      'Astara apuesta por un modelo de negocio que contribuya a la transformación de la industria de la movilidad',
    content:
      'LaLa compañía global de movilidad abierta publica su segundo informe de sostenibilidad, mostrando su compromiso con el medio ambiente, la diversidad, equidad e inclusión. compañía de Movilidad Abierta expande su oferta eléctrica en Colombia con una nueva asociación',
    link: '#',
  },
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
    title:
      'Astara se convierte en el importador exclusivo de Zeekr en Colombia',
    content:
      'La compañía de Movilidad Abierta expande su oferta eléctrica en Colombia con una nueva asociación con Zeekr.',
    link: '#',
  },
  {
    id: 2,
    img: 'https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'El Astara Team certifica un balance neto de cero emisiones',
    content:
      'Gracias al uso del combustible sintético 100% renovable, los coches de competición del Astara Team tuvieron un balance cero de emisiones.',
    link: '#',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1717691449368-ecb097f1f407?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Astara distribuirá Fotón en España',
    content:
      'La Compañía de Movilidad Abierta amplía su cartera con una nueva asociación con Foton Motor.',
    link: '#',
  },
  {
    id: 4,
    img: 'assets/images/news-4.webp',
    title:
      'Astara apuesta por un modelo de negocio que contribuya a la transformación de la industria de la movilidad',
    content:
      'LaLa compañía global de movilidad abierta publica su segundo informe de sostenibilidad, mostrando su compromiso con el medio ambiente, la diversidad, equidad e inclusión. compañía de Movilidad Abierta expande su oferta eléctrica en Colombia con una nueva asociación',
    link: '#',
  },
];

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//// ELEMENTS
const paginationContainer = document.querySelector('.news__pagination--list');
const sliderContainer = document.querySelector('.news__container');
const sliderTrack = document.querySelector('.news__track');
const btnPrev = document.querySelector('.news__btn--prev');
const btnNext = document.querySelector('.news__btn--next');

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//// Generate/Initialize Slides
const generateSlides = () => {
  sliderTrack.innerHTML = '';

  slides.forEach(slide => {
    const html = `
    <figure class="news__card" data-id="${slide.id}">
      <div class="news__card--img-container u-margin-bottom-small">
        <img class="news__card--img" src="${slide.img}" alt="News 1"/>
      </div>
      <h6 class="news__card--title u-margin-bottom-small">
        ${slide.title}
      </h6>
      <p class="news__card--content u-margin-bottom-medium">
        ${slide.content.slice(0, 80)}...
      </p>
      <a href="${slide.link}" class="news__card--link-more">Leer +</a>
    </figure>`;

    // Insert the html
    sliderTrack.insertAdjacentHTML('beforeend', html);
  });
};

generateSlides();

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//// Initial Variables and Functions

const width = sliderContainer.getBoundingClientRect().width;

let slideAmount = width > 900 ? width / 4 : width / 2;
const MAX_SLIDES_IN_VIEW = width > 900 ? 3 : 2;
let currentSlide = 0;

// width
const slideTo = currentSlide => {
  console.log(slideAmount);
  sliderTrack.style.transform = `translateX(-${currentSlide * slideAmount}px)`;
  setPaginationActive(currentSlide);
};

// 0 =>   0%
// 1 => -25%
// 2 => -50%
// 3 => -75%
// calculate 100% width of container and move that amount of pixel each time 3 quarter
const slideNext = () => {
  if (currentSlide < slides.length - MAX_SLIDES_IN_VIEW) {
    currentSlide++;
    slideTo(currentSlide);
  }
};

const slidePrev = () => {
  if (currentSlide >= 1 && currentSlide <= slides.length - MAX_SLIDES_IN_VIEW) {
    currentSlide--;
    slideTo(currentSlide);
  }
};

const createDots = function () {
  paginationContainer.innerHTML = '';

  slides.forEach((_, i) => {
    paginationContainer.insertAdjacentHTML(
      'beforeend',
      `<li>
          <button class="news__pagination--btn" data-slide="${i}">
            &nbsp;
          </button>
      </li>`
    );
  });

  return document.querySelectorAll('.news__pagination--btn');
};

const paginationBtns = createDots();

const setPaginationActive = i => {
  paginationBtns.forEach(p =>
    p.classList.remove('news__pagination--btn-active')
  );

  paginationBtns[i].classList.add('news__pagination--btn-active');
};
setPaginationActive(currentSlide);

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//// Event listeners and Function Executions
btnNext.addEventListener('click', slideNext);
btnPrev.addEventListener('click', slidePrev);

paginationContainer.addEventListener('click', e => {
  // select button based on "event bubbling (upwards)"
  const btn = e.target.closest('.news__pagination--btn');

  // guard clause
  if (!btn) return;

  // action based on button index
  currentSlide = +btn.dataset.slide;

  slideTo(currentSlide);
  setPaginationActive(currentSlide);
});

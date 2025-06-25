import { news } from './data.js';

const listContainer = document.querySelector(".card-list");

news.forEach(e => {
  const ele = document.createElement("div");
  ele.setAttribute("class", "news-card swiper-slide");

  ele.innerHTML = `
    <p class="news-title">${e.title}</p>
    <img src="${e.link}" alt="${e.title}">
    <p class="news-date">${e.date}</p>
  `;

  listContainer.appendChild(ele);

});



const swiper = new Swiper('.wrapper', {

  loop: true,
  spaceBetween:10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    0:{
      slidesPerView: 0,
    },
    768:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
    }
  }
});

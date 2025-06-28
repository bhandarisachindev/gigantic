import { news, smCardData, hero, mediaData } from './data.js';

const listContainer = document.querySelector(".card-list");
const heroBg= document.querySelector(".hero-bg");
const heroImg= document.getElementById("select-hero-img");
const heroCards= document.querySelector(".hero-cards");
const mediaClips =document.getElementById("media-clips");



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
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 0,
    },
    768:{
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

const getHeroByName = (name) => {
  return hero.find(h => h.name.toLowerCase() === name.toLowerCase());
};

smCardData.forEach(data => {
  let smCard = document.createElement("div");
  smCard.classList.add("small-card");
  smCard.innerHTML = `<span>${data.name}</span>`;
  smCard.style.background = `url(${data.img})`;
  smCard.style.backgroundSize = "cover";
  heroCards.appendChild(smCard);

  smCard.addEventListener("click", () => {
    const name = smCard.querySelector("span").textContent;

    const fullData = getHeroByName(name);
    document.getElementById("hero-name").innerHTML=fullData.name.toUpperCase();
    document.getElementById("hero-type").innerHTML=fullData.type;
    document.getElementById("hero-discription").innerHTML=fullData.info;

    document.querySelector(".hero-bg").setAttribute("src",fullData.bg);
    document.getElementById("select-hero-img").setAttribute("src",fullData.img);

      gsap.fromTo(
    ["#hero-name", "#hero-type", "#hero-discription"],  
    { x: 200, opacity: 0 },                             
    { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 }
  );
  });
});


mediaData.forEach(media => {
  let mediaCard = document.createElement("div");
  mediaCard.classList.add("media-clips");
  mediaCard.innerHTML = `<img src="${media.img}" alt="News clip" />`;
  mediaClips.appendChild(mediaCard);
});
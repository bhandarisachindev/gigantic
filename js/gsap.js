gsap.registerPlugin(ScrollTrigger);
var topBarTl  = gsap.timeline();
let tl = gsap.timeline();


topBarTl.from("#logo",{
  y : -80,
  opacity:0,
  duration:1,
  delay:0.3,
  stagger:0.2
})


topBarTl.from(".nav-links",{
  y : -30,
  opacity:0,
  duration:1,
  stagger:0.2
})

tl.from(".hero-text",{
  opacity:0,
  y:-60,
  duration:1,
  delay:0.4,
  ease: "power2.out"
})
.from(".hero-btn , #nav-btn", {
  opacity: 0,
  duration: 2,
  ease: "power2.out"
})



document.querySelector(".hero-btn").addEventListener("mouseenter", () => {
  gsap.fromTo(".shine", 
    { left: "-60px" }, 
    { left: "120%", duration: 1, ease: "power2.out", },
  );
});




document.querySelectorAll(".shine-gray-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    const shine = btn.querySelector(".shine-gray");

    const btnWidth = btn.offsetWidth;

    let duration = btnWidth * 0.003;
    duration = Math.max(0.5, Math.min(duration, 2));

    gsap.fromTo(shine, 
      { left: "-60px" }, 
      { left: "120%", duration: duration, ease: "power2.out" }
    );
  });
});

document.querySelectorAll('#link-bar .nav-links').forEach(link => {
  link.addEventListener("click", function() {
    const targetSelector = this.getAttribute("data-target");
    const targetEl = document.querySelector(targetSelector);

    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});



gsap.utils.toArray(".animate-on-scroll").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 100,          
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse", 
    }
  });
});


  gsap.to("#gurdian-left", {
    y: 30,
    rotation: 1,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
    ease: "sine.inOut",
 
  });

  gsap.to("#gurdian-right", {
    y: -30,
    rotation: -5,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
    ease: "sine.inOut",
  });


  
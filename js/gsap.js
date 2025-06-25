document.querySelector(".hero-btn").addEventListener("mouseenter", () => {
  gsap.fromTo(".shine", 
    { left: "-60px" }, 
    { left: "120%", duration: 1, ease: "power2.out", },
  );
});


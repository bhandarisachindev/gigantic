class topBar extends HTMLElement{
    constructor(){
      super()
      this.innerHTML=`<div id="nav-bar">
    <div id="link-bar">
    <p class="nav-links">News</p>
    <p class="nav-links">Explore</p>
    <p class="nav-links">Media</p>
    <p class="nav-links">Community</p>
    </div>  
      <div id="nav-btn" >
        SIGN UP FOR ALPHA!
        <span class="shine1"></span>
      </div>
  </div>`
}}

class heroSection extends HTMLElement{
    constructor(){
      super()
      this.innerHTML=`<div id="hero">
    <div id="hero-div">
        <img id="logo" src="assets/logo.png">
      <p class="hero-text">
      A team action game where heroes battle alongside a<br>
      <span > massive guardian in a fight for supremacy. Join the</span><br>
      fight and be one of the first to try <em>Gigantic!</em>
      </p>
      <div class="hero-btn">
        WATCH THE VIDEO
        <span class="shine"></span>
      </div>
    </div>
  </div>`
}}

class exploreSection extends HTMLElement{
    constructor(){
      super()
      this.innerHTML=`<div id="explore">
    <div class="explore-gre"  id="immense">
      <div class="explore-card">
        <div class="explore-text">
        <h3>IMMENSE</h3>
        <h4>Unleash Your Power</h4>
        <p class="explore-card-des">A mystical bond connects you and four teammates to your guardian, a magical behemoth too powerful for a single mortal to defeat. <b>Protect your guardian</b> as your team charges across the battlefield, then see it <b>crush your enemies</b> underfoot.</p>
      </div>
      <img class="explore-card-img" src="/assets/hand.avif" alt="IMMENSE"> 
      </div>
    </div>
    <div class="explore-gre"  id="tactical">
      <div class="explore-card explore-card-tac">
        <img class="explore-card-img" src="/assets/cat2.png" alt="TACTICAL">
        <div class="explore-text">
        <h3>TACTICAL</h3>
        <h4>Unleash Your Creativity</h4>
        <p class="explore-card-des"><b>Physics-based abilities</b> let you invent new ways to amaze your friends and frustrate your enemies. The  <b>element of surprise</b> is key as you use WASD controls to sprint, dodge, aim, destroy barriers, hurdle obstacles, and leap from danger to safety.</p>
      </div>
      </div>
    </div>
    <div class="explore-gre" id="fantastic">
      <div class="explore-card explore-card-fan">
        <div class="explore-text">
        <h3>FANTASTIC</h3>
        <h4>Unleash Your Imagination</h4>
        <p class="explore-card-des">The world of Gigantic is a world of mystery, where airships soar over ancient ruins and a fantasy empire  <b>is yours for the taking</b>. Charge into battle and lead your guardian to victory. Gigantic rewards the <b>daring, the clever, and the swift</b>.</p>
      </div>
      <img class="explore-card-img" src="/assets/bull.png" alt="FANTASTIC">
      </div>
    </div>
  </div>`
}}

class newsSection extends HTMLElement{
    constructor(){
      super()
      this.innerHTML=`<div id="news">
    <div class="container swiper">
      <div class="wrapper">
        
        <div class="card-list swiper-wrapper"></div>
        
      </div>
      <img class="swipe swiper-button-next" src="assets/arrow.png" >
      <img class="swipe swiper-button-prev" src="assets/arrow.png" >
    </div>
  </div>`
}}

class selectHero extends HTMLElement{
    constructor(){
      super()
      this.innerHTML=`<div class="select-hero">
    <img class="hero-bg" src="/assets/hero/bg/bgImage_beckett.png">
    <div class="hero-gallary">
      <div class="select-hero-text">
        <h3>HERO GALLERY</h3>
        <h5>Choose Your Hero</h5>
        <p>Choose a heavy-metal juggernaut, a stealthy acrobat, a fire-breathing sorcerer—or something else that matches your play style.</p>
      </div>
      <img id="select-hero-img" src="/assets/hero/normal/beckett.png" alt="beckett">
    </div>
    <div class="hero-selection">
      <div class="hero-cards"></div>
      <div class="hero-info">
        <p id="hero-name"><b>Beckett</b></p>
        <p id="hero-type">Shooter</p>
        <p id="hero-discription">A thrill-seeking test pilot, she was the perfect candidate for experimental weapons and a prototype jetpack.</p>
      </div>
    </div>
  </div>`
}}




customElements.define("select-hero",selectHero);
customElements.define("top-bar",topBar);
customElements.define("hero-section",heroSection);
customElements.define("explore-section",exploreSection);
customElements.define("news-section",newsSection);
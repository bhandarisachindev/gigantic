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


class gurdians extends HTMLElement{
    constructor(){
      super()
      this.innerHTML=`<div class="gurdians-main">
    <div class="gurdians-section">
      <img id="gurdian-left" src="/assets/griffin.avif" alt="">
      <img id="gurdian-right" src="/assets/naga.avif" alt="">
      <img id="gurdian-bottom" src="/assets/bgsmallbtm.png">

      <div class="gurdian-text">
        <h3>GUARDIANS</h3>
        <h5>Smart, Responsive, and Lethal</h5>
        <p>Your guardian is the biggest ally you'll ever have. With your team's help, the guardian drives back your enemies, destroying and reshaping the battlefield as it goes. But your enemies have a guardian, too...</p>
        <h5>The Ultimate Objective  </h5>
        <p>Work together to overpower the enemy guardian, then strike its heart when you have the chance. And beware! Each guardian has its own attacks and tactics—everything from impaling tail spikes to destructive tornadoes.</p>
      </div>
    </div>
    <div class="creatures">
      <div class="creatures-text">
        <h3>CREATURES</h3>
        <h5>Control the Battleground</h5>
        <p>As you battle, you can summon creatures to protect key strategic points of the map for your team—and each creature you summon makes your massive guardian grow stronger.</p>
        <h5>Summon the Right Ally</h5>
        <p>The creatures you summon do more than just attack your enemies. You can choose creatures that heal your team, boost your damage, spot hidden enemies, or let you resurrect closer to the action.</p>
      </div>
      <div class="creatures-img">
        <img id="creature-one" src="/assets/Creatures.avif" alt="creatures">
      </div>
    </div>
  </div>`
}}

class mediaSection extends HTMLElement{
    constructor(){
      super()
      this.innerHTML=`<div class="media">
    <div id="media-top"></div>

    <div class="media-main">
      <div class="media-clip-container">
        <p><b>MEDIA</b></p>
        <span>
          <i class="ri-computer-line"></i>
          <i class="ri-image-fill"></i>
          <i class="ri-play-fill"></i>
        </span>
      </div>
      <div id="media-clips" class="media-clips">
      </div>
    </div>
  </div>`
}}

class community extends HTMLElement{
  constructor(){
    super()
    this.innerHTML=`<div class="community">
    <div class="community-top"></div>
      <div class="community-content">
        <div class="community-contenty-text">
          <h3>BE A PART OF SOMETHING GIGANTIC</h3>
          <p><b>We're building Gigantic alongside our community members, who have been giving us advice, ideas, and perspective every step of the way. We want to hear your voice, too!</b></p>
        <div >
          <div class="community-inside">
            <div class="community-inside-div">
              <h5>Sign Up for News</h5>
              <p>This is just the first glimpse of Gigantic — as we keep building the game, we'll have lots more to share. Get our newsletter, and you won't miss a thing.</p>
            </div>
            <div class="community-inside-div">
              <h5>Connect with Us</h5>
              <p>Get in on the ground floor! Connect with other Gigantic fans and talk directly with the developers of Gigantic.</p>
            </div>
            <div class="community-inside-div">
              <h5>Download the Fan Kit</h5>
              <p>Heroes, wallpapers, icons, logos —this collection of media is all yours. Use it to show the world something Gigantic!</p>
            </div>
          </div>
        </div>
        <div class="register">
            <span class="register-input"> <input type="text" placeholder="Type your email address"> <span class="register-btn" >GO!</span></span>
            <div class="register-icons">
              <i class="ri-twitter-x-line"></i>
              <i class="ri-facebook-fill"></i>
              <i class="ri-youtube-fill"></i>
            </div>
            <span class="register-btn">DOWNLOAD</span>
        </div>
      </div>
    </div>
  </div>`
  }
}

customElements.define("community-section",community);
customElements.define("media-section",mediaSection);
customElements.define("gurdians-main",gurdians);
customElements.define("select-hero",selectHero);
customElements.define("top-bar",topBar);
customElements.define("hero-section",heroSection);
customElements.define("explore-section",exploreSection);
customElements.define("news-section",newsSection);
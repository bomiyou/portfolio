gsap.registerPlugin(ScrollTrigger);


const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }
// nav bar


// landing page

const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;

  let loopTimeout;


  // Create Noise
  const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) {
              buffer32[i] = 0xff000000;
          }
      }

      noiseData.push(idata);
  };


  // Play Noise
  const paintNoise = () => {
      if (frame === 9) {
          frame = 0;
      } else {
          frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
  };


  // Loop
  const loop = () => {
      paintNoise(frame);

      loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop);
      }, (1000 / 25));
  };


  // Setup
  const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      for (let i = 0; i < 10; i++) {
          createNoise();
      }

      loop();
  };


  // Reset
  let resizeThrottle;
  const reset = () => {
      window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);

          resizeThrottle = window.setTimeout(() => {
              window.clearTimeout(loopTimeout);
              setup();
          }, 200);
      }, false);
  };


  // Init
  const init = (() => {
      canvas = document.getElementById('noise');
      ctx = canvas.getContext('2d');

      

      setup();
  })();
};

noise();


gsap.from('.text',{
    y:'300px',
    opacity:0,
    duration: 1,
    
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.text',
        
        start:'center 10%',
        end: 'bottom',
        scrub: 1
    }  

})

tl.to('.container-content-1',{
    skewY: '5deg',
    y: '-60px',
    duration: 1,
    opacity: 0
})

















const timeline = gsap.timeline();
 
  timeline.from(".logo, .menu-list, .icon",{
      duration: .6,
      y: 100,
      scrub: 1,
      stagger:{
          amount: .4
      }
  },"-=.3");


  timeline.from(".pic1",{
      duration: 1,
      position: "absolute",
      top: "100%",
      left: "50%",
      ease: "power2.out",
      x: "-50%",
      y: "-50%",

      filter: "grayscale(1)"
  });
  timeline.from(".pic2",{
      duration: 1.5,
      position: "absolute",
      top: "100%",
      left: "50%",
      ease: "power2.out",
      x: "-50%",
      y: "-50%",
      filter: "grayscale(1)"
  },"-=.5");
  timeline.from(".pic3",{
      duration: 1.5,
      position: "absolute",
      top: "100%",
      left: "50%",
      ease: "power2.out",
      x: "-50%",
      y: "-50%",
      filter: "grayscale(1)"
  },"-=.5");
  timeline.from(".pic4",{
      duration: 1.5,
      position: "absolute",
      top: "100%",
      left: "50%",
      ease: "power2.out",
      x: "-50%",
      y: "-50%",
      filter: "grayscale(1)"
  },"-=.5");
  
  timeline.from(".circle1, .circle2",{
      duration: .8,
      height: 0,
      width: 0,
      ease: "power4.out",
      stagger: {
          amount: .8
      }
  },"-=.5");





  const cursorTag = document.querySelector("div.cursors")
  const balls = cursorTag.querySelectorAll("div")
  const ballMessage = cursorTag.querySelector("div span")
  const images = document.querySelectorAll("img[data-hover]")
  
  let aimX = 0
  let aimY = 0
  
  balls.forEach((ball, index) => {
  
    let currentX = 0
    let currentY = 0 
  
    let speed = 0.3 - index * 0.015
  
    const animate = function() {
      currentX += (aimX - currentX) * speed
      currentY += (aimY - currentY) * speed
  
      ball.style.left = currentX + "px"
      ball.style.top = currentY + "px"
  
      requestAnimationFrame(animate)
  
    }
  
    animate()
    
  })
  
  document.addEventListener("mousemove",function(event){
    aimX = event.pageX
    aimY = event.pageY
  
  
  
  })
  
  images.forEach(image =>{
    image.addEventListener("mouseover",function(){
      ballMessage.classList.add("visible")
      ballMessage.innerHTML = image.getAttribute("data-hover")
    })
    
    image.addEventListener("mouseout",function(){
      ballMessage.classList.remove("visible")
      
   
  
    })
  
  })
  

  window.onload = () => {
  
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        console.log(transition_el);
  
        transition_el.classList.add('is-active');
  
        console.log(transition_el);
  
        setInterval(() => {
          window.location.href = target;
        }, 500);
      })
    }
  }
  
  
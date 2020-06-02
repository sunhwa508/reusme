// //smooth sroll
// function smoothScroll(target, duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime; //부드럽게 보이게 하기 위해
//     var timeElapsed = currentTime - startTime;
//     //진짜 시간과 페이지 로그된 후 시간
//     // console.log(startTime, currentTime);
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//     // console.log("timeElapsed:" + timeElapsed, "duration" + duration);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t * t + b;
//     t -= 2;
//     return (c / 2) * (t * t * t + 2) + b;
//   }
//   requestAnimationFrame(animation);
// }

// var section1 = document.querySelector(".section1");
// var section2 = document.querySelector(".section2");

// section1.addEventListener("click", function () {
//   smoothScroll(".section2", 100);
// });

//intro 효과
const hero = document.querySelector(".intro-section img");
const headline = document.querySelector(".logotext");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "70%", ease: Power2.easeInOut }
  )
  .fromTo(
    headline,
    1.2,
    { x: "-300%" },
    { x: "0", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    slider,
    1.2,
    { x: "200%" },
    { x: "0", ease: Power2.easeInOut },
    "-=1.2"
  );

//cursor
const mouse = document.querySelector(".cursor");
const mouseTxt = mouse.querySelector("span");
const nav = document.querySelector(".nav");

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
function activeCursor(e) {
  const item = e.target;

  if (item.classList.contains("reactimg")) {
    mouse.classList.add("explore-active");
    // gsap.to(".title-swipe", 1, { y: "0%" });
    mouseTxt.innerText = "REACT";
  } else {
    mouse.classList.remove("explore-active");
    mouseTxt.innerText = "";
    // gsap.to(".title-swipe", 1, { y: "100%" });
  }

  if (item.classList.contains("jsimg")) {
    mouse.classList.add("explore-active");
    // gsap.to(".title-swipe", 1, { y: "0%" });
    mouseTxt.innerText = "JAVASCIPRT";
  }
  if (item.classList.contains("htmlimg")) {
    mouse.classList.add("explore-active");
    // gsap.to(".title-swipe", 1, { y: "0%" });
    mouseTxt.innerText = "HTML/CSS";
  }
}

window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

//nav
const navdivs = document.querySelectorAll(".navdiv");

console.log(navdivs);
navdivs.forEach((item) => {
  item.addEventListener("click", (e) => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    e.target.classList.add("active");
  });
});

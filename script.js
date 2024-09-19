const menuToggle = document.querySelector('.menu-toggle');
const navItems = document.querySelector('.nav-items');

menuToggle.addEventListener('click', () => {
  navItems.classList.toggle('open');
  menuToggle.classList.toggle('active');
});




let services = [{
  id: 1,
  imgsrc: "./assests/services/1.png",
  title: 'Birth Journal',
  desc: 'A birth journal records astrological insights based on your birth chart for personal guidance.'
}, {
  id: 2,
  imgsrc: "./assests/services/2.png",
  title: 'Vastu Shastra',
  desc: 'Vastu Shastra is an ancient Indian architectural science that harmonizes living spaces with natural energies.'
}, {
  id: 3,
  imgsrc: "./assests/services/3.png",
  title: 'Face Reading',
  desc: `Face reading interprets facial features to reveal personality traits, emotions, and potential life paths.`
}, {
  id: 4,
  imgsrc: "./assests/services/4.png",
  title: 'Lal Kitab',
  desc: 'Lal Kitab is an astrological text offering remedies for planetary influences using palmistry principles.'
}, {
  id: 5,
  imgsrc: "./assests/services/5.png",
  title: 'Crystal Ball',
  desc: 'A crystal ball is used in divination to foresee future events or gain spiritual insights.'
}, {
  id: 6,
  imgsrc: "./assests/services/6.png",
  title: 'Kundli Dosh',
  desc: `Kundli Dosh refers to astrological flaws in a person's birth chart that can affect their life.`
}]

let servicesContainer = document.querySelector('.services-items');
services.map((item, index) => {
  let card = `<div class="service-item">
              <div class="service-img">
                <img src="${item.imgsrc}" alt="">
              </div>
              <div class="service-info">
                <h2 class="service-title">${item.title}</h2>
                <p class="service-desc">${item.desc}</p>
                <button class="service-btn" onclick="window.location.href='./contact/contact.html'">Read More</button>
              </div>
            </div>`;
  servicesContainer.innerHTML += card;

})



let experts = [{
  id: 1,
  imgsrc: './assests/experts/1.jpg',
  title: `K. N. Rao`,
  desc: `Astrologer`
},
{
  id: 1,
  imgsrc: './assests/experts/2.jpg',
  title: `Nix Palomba`,
  desc: `Tarot Reader`
},
{
  id: 1,
  imgsrc: './assests/experts/3.jpg',
  title: `Tim M. Hall`,
  desc: `Gemstonist`
},
{
  id: 1,
  imgsrc: './assests/experts/4.jpg',
  title: `Chani Nicholas`,
  desc: `Astrologist`
},]
let expertsContainer = document.querySelector('.experts');
experts.map((item, index) => {
  let card = `<div class="expert">
            <div class="expert-img">
              <img src="${item.imgsrc}" alt="">
            </div>
            <div class="expert-info">
              <h3 class="title">${item.title}</h3>
              <p class="desc">${item.desc}</p>
              <div class="expert-connect">

                <a href="#"> <img src="./assests/facebook.png" alt="" class="expert-fb-connect">
                </a>
                <a href=""> <img src="./assests/linkedin.png" alt="" class="expert-linkedin-connect">
                </a>
                <a href=""> <img src="./assests/twitter.png" alt="" class="expert-x-connect">
                </a>
              </div>
            </div>
          </div>`;
  expertsContainer.innerHTML += card;

})



let nwhave = [{
  id: 1,
  imgsrc: "./assests/nwhave/1.png",
  title: `200`,
  desc: `Offices Worldwide`
},
{
  id: 2,
  imgsrc: "./assests/nwhave/2.png",
  title: `800`,
  desc: `Skilled Astrologers`
},
{
  id: 1,
  imgsrc: "./assests/nwhave/3.png",
  title: `60`,
  desc: `Countries Covered`
},
{
  id: 1,
  imgsrc: "./assests/nwhave/4.png",
  title: `30`,
  desc: `Years of Experiences`
}]

let nwhaveContainer = document.querySelector('.nwhave-items');
nwhave.map((item, index) => {
  let card = `<div class="nwhave-item">
            <div class="nwhave-img">
              <img src="${item.imgsrc}" alt="">
            </div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>`;
  nwhaveContainer.innerHTML += card;

})




let review = [{
  id: 1,
  imgsrc: "./assests/review/1.avif",
  title: 'Alex R',
  desc: `AstroSphere's readings were spot-on! The insights helped me make informed decisions in my career and personal life. Highly recommend this platform for accurate and personalized astrological guidance.`
},
{
  id: 2,
  imgsrc: "./assests/review/2.jfif", title: 'Jamie L',
  desc: `The astrological forecasts provided by AstroSphere are incredibly detailed and insightful. Their predictions and guidance have truly transformed how I approach life’s challenges. Fantastic service and highly reliable!`
},
{
  id: 3,
  imgsrc: "./assests/review/3.jfif",
  title: 'Morgan T',
  desc: `AstroSphere has been a game-changer for me. The blend of traditional wisdom and modern techniques provides unparalleled clarity and understanding. The personalized advice is both practical and empowering. A must-try!`
},
{
  id: 4,
  imgsrc: "./assests/review/4.jfif",
  title: 'Taylor S',
  desc: `I was amazed by the accuracy of AstroSphere's readings. The personalized insights and celestial guidance have been invaluable for my personal growth and decision-making. Truly exceptional service and expertise.`
},
{
  id: 5,
  imgsrc: "./assests/review/5.jfif",
  title: 'Jordan K',
  desc: `AstroSphere offers the best astrological insights I’ve ever experienced. The detailed birth chart analysis and compatibility reports are both enlightening and practical. Their service is top-notch and deeply impactful.`
},
{
  id: 6,
  imgsrc: "./assests/review/6.jpg",
  title: 'Riley J',
  desc: `The guidance from AstroSphere has been transformative. Their accurate readings and thoughtful advice have greatly enhanced my self-awareness and decision-making. The expertise and service quality are simply outstanding!`
},
{
  id: 7,
  imgsrc: "./assests/review/7.jfif",
  title: 'Casey W',
  desc: `AstroSphere's insights are incredibly precise and insightful. The personalized advice has been instrumental in navigating life's ups and downs. Exceptional service with a perfect blend of traditional and modern astrological wisdom.`
}]

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const reviewContainer = document.querySelector('.swiper-wrapper')
  review.map((item, index) => {

    const cards =

      `  <div class="slider swiper-slide">
            <div class="box">
              <img src="${item.imgsrc}" alt="">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
              <div class="stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star "></span>
              </div>
            </div>
          </div> `

      ;
    reviewContainer.innerHTML += cards;
  })
});






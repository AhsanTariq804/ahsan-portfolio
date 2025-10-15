/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split(".home--profession-1", { chars: true });
const { chars: chars2 } = text.split(".home--profession-2", { chars: true });

animate(chars1, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 2000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 2000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});
/*=============== SWIPER PROJECTS ===============*/

const swiperprojects = new Swiper(".projects--swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabcontents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetselector = tab.dataset.target,
      targetcontent = document.querySelector(targetselector);

    // disable all content and active tabs
    tabcontents.forEach((content) => content.classList.remove("work-active"));
    tabs.forEach((t) => t.classList.remove("work-active"));

    // activate the tab and corresponding content
    tab.classList.add("work-active");
    targetcontent.classList.add("work-active");
  });
});

/*=============== SERVICES ACCORDION ===============*/
        document.addEventListener('DOMContentLoaded', () => {
            const accordionItems = document.querySelectorAll('.accordion-item');

            accordionItems.forEach(item => {
                item.addEventListener('click', () => {
                    const contentWrapper = item.querySelector('.accordion-content-wrapper');
                    
                    // Toggle the current item
                    if (item.classList.contains('active')) {
                        // 1. CLOSE the accordion smoothly
                        contentWrapper.style.maxHeight = '0px';
                        item.classList.remove('active');
                        return;
                    } 
                    
                    // 2. Close any other open accordion first
                    accordionItems.forEach(otherItem => {
                        if (otherItem.classList.contains('active')) {
                            otherItem.querySelector('.accordion-content-wrapper').style.maxHeight = '0px';
                            otherItem.classList.remove('active');
                        }
                    });
                        
                    // 3. OPEN the current accordion
                    item.classList.add('active');
                    contentWrapper.style.maxHeight = 'none';
                    const fullHeight = contentWrapper.scrollHeight;

                    contentWrapper.style.maxHeight = '0px';
                    requestAnimationFrame(() => {
                        contentWrapper.style.maxHeight = fullHeight + 'px';
                    });
                });
            });
        });
// Page load pe jo card pehle se open hai uska height set karo
window.addEventListener("load", () => {
  const openCard = document.querySelector(".service--card .service--open");
  if (openCard) {
    const info = openCard.querySelector(".service--info");
    info.style.height = info.scrollHeight + "200px";
  }
});
/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
// dulicate image to make the animation work

const tracks = document.querySelectorAll('.testimonials--content')

tracks.forEach( tracks => {
  const cards =[...track.childern]  // spread to make a static copy

  // duplicate cards only onces
  for (const card of cards ){
track.appendChild (card.cloneNode(true))
  }

})



/*=============== COPY EMAIL IN CONTACT ===============*/

  document.addEventListener("DOMContentLoaded", () => {
    const copyBtn = document.getElementById('contact-btn');
    const emailElement = document.getElementById('contact-email');
    const originalHTML = copyBtn.innerHTML;

    copyBtn.addEventListener('click', () => {
      const copyEmail = emailElement.textContent.trim();

      if (!navigator.clipboard) {
        alert("Clipboard API not supported in this browser");
        return;
      }

      navigator.clipboard.writeText(copyEmail).then(() => {
        copyBtn.innerHTML = 'Email copied ✅';
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy email. Please try manually.');
      });
    });
  })  
/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const textYear = document.getElementById('footer--year');
            currntYear = new Date().getFullYear()
            // each year it is update to the current year
            textYear.textContent = currntYear 
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document .querySelectorAll('section[id]')

const scrollActive = () => {
  // we got the position by scrolling down
  const scrollY =window.scrollY

  sections.forEach( section => {
    const id = section.id, // id of each section
      top = section.offsettop -50, //distane from the top edge
      height = section.offsetheight; //element height
      link = document.querySelectorAll('.nav--menu a[href*=' + id + "}") // id nav link
    
    if(!link) return
 link.classList.toggle('active-link', scrollY > top && scrollY <= top + height  )

  })
}

window.addEventListener('scroll', scrollActive)
/*=============== CUSTOM CURSOR ===============*/

/* Hide custom cursor on links */

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,   // number use karo, string nahi
  delay: 300,
  // reset: true,
});

sr.reveal('.home--image, .projects--container, .work--container,');
sr.reveal('.home--data', { delay: 900, origin: 'bottom' });
sr.reveal('.home--info', { delay: 1200, origin: 'bottom' });
sr.reveal('.home--social, .home--cv', { delay: 1500 });
sr.reveal('.about--data', {origin: 'left',});
sr.reveal('.about--images', {origin: 'right',});
sr.reveal('.service--card', {interval:100});
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const links=Array.from(document.querySelectorAll(".mobile-nav-link"));
const links2 = document.querySelectorAll('a[href^="#section-"]');

let mobile_nav=document.querySelector(".mobile-nav")
let hamburger=document.querySelector(".hamburger")

// =================== scroll section active ===================
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

function efectToActiveLink(){
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute("id");

        if(top>=offset&&top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*="+id+"]").classList.add("active")
            });
        };
    });
    // =================== sticky navbar ===================
    let header=document.querySelector("header")

    // =================== remove toogle icon and navbar when click navbar link(scroll) ===================
    mobile_nav.classList.remove("is-active")
    hamburger.classList.remove("is-active")
};

// =================== scroll reveal ===================
ScrollReveal({
    //  reset: true
     distance:"80px",
     duration:2000,
     delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin:"top" });
ScrollReveal().reveal('.home-img, .portofolio-box, .contact-container, .col-right, .col-left', { origin:"bottom" });
ScrollReveal().reveal('.home-content h1, .about', { origin:"left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin:"right" });

// =================== typed js (from github with cdn)=================== 
const typed=new Typed(".multiple-text",{
    strings:["Frontend Developer", "University Graduate", "Passionate Learner"],
    typedSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// =================== download CV =================== 
const downloadButton = document.getElementById("download-button");
const downloadButton2 = document.getElementById("download-button-2");
const cvPath = "assets/CV - Valentin Negrut.pdf";

function downloadCV(){
  const link = document.createElement("a");
  link.href = cvPath;
  link.download = "CV-ValentinNegrut.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

downloadButton.addEventListener('click', downloadCV);
downloadButton2.addEventListener('click', downloadCV);

// Function that applies animations to skills section
function efectSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("htmlcss");
        skills[1].classList.add("javascript");
        skills[2].classList.add("git");
        skills[3].classList.add("web-design");
        skills[4].classList.add("responsive-design");
        skills[5].classList.add("data");
        skills[6].classList.add("dedication");
        skills[7].classList.add("critical-thinking");
        skills[8].classList.add("quick-learning");
        skills[9].classList.add("communication");
        skills[10].classList.add("creativity");
        skills[11].classList.add("teamwork");
    }
}

// I detect the scrolling to apply the skillbar animation
window.onscroll = function(){
  efectToActiveLink();
  efectSkills();
} 
// =================== toogle icon navbar ===================

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
  });
}

links2.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({behavior: "smooth"});
  });
});
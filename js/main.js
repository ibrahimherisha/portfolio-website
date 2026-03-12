lucide.createIcons();
const mobile_bar =document.querySelector(".mobile-list-bar");
const mobile_menu=document.querySelector(".mobile-menu");
const header= document.querySelector(".main-header");
window.addEventListener("scroll",function(){
    
    if(window.scrollY>40){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }

});
mobile_bar.addEventListener("click",function(){
  mobile_bar.classList.toggle("active");
  mobile_menu.classList.toggle("open");
  header.classList.toggle("menu-open");
});
const about_info=document.querySelectorAll(".about-card");
window.addEventListener("scroll",function (){
  about_info.forEach(function(about_card,index){
    const cardTop=about_card.getBoundingClientRect().top;
    if(cardTop<window.innerHeight*0.8 && !about_card.classList.contains("show1")){
        setTimeout(function(){
            about_card.classList.add("show1");
        },index * 50);
    }
  });
  
});
const skill_cards=document.querySelectorAll(".skill-card");
window.addEventListener("scroll",function (){
  skill_cards.forEach(function(skill_card,index){
    const cardTop=skill_card.getBoundingClientRect().top;
    if(cardTop<window.innerHeight*0.8 && !skill_card.classList.contains("show2")){
        setTimeout(function(){
            skill_card.classList.add("show2");
        },index * 50);
    }
  });
  
});
const services_cards=document.querySelectorAll(".service-card");
window.addEventListener("scroll",function (){
  services_cards.forEach(function(service_card,index){
    const cardTop=service_card.getBoundingClientRect().top;
    if(cardTop<window.innerHeight*0.8 && !service_card.classList.contains("show3")){
        setTimeout(function(){
            service_card.classList.add("show3");
        },index * 50);
    }
  });
});
const projects_cards=document.querySelectorAll(".project-card");
window.addEventListener("scroll",function (){
  projects_cards.forEach(function(project_card,index){
    const cardTop=project_card.getBoundingClientRect().top;
    if(cardTop<window.innerHeight*0.8 && !project_card.classList.contains("show4")){
        setTimeout(function(){
            project_card.classList.add("show4");
        },index * 50);
    }
  });
});
const contacts_left=document.querySelectorAll(".contact-left");
window.addEventListener("scroll",function (){
  contacts_left.forEach(function(contact_left,index){
    const cardTop=contact_left.getBoundingClientRect().top;
    if(cardTop<window.innerHeight*0.7 && !contact_left.classList.contains("show5")){
        setTimeout(function(){
            contact_left.classList.add("show5");
        },index * 50);
    }
  });
  
});
const contacts_right=document.querySelectorAll(".contact-right");
window.addEventListener("scroll",function (){
  contacts_right.forEach(function(contact_right,index){
    const cardTop=contact_right.getBoundingClientRect().top;
    if(cardTop<window.innerHeight*0.7 && !contact_right.classList.contains("show6")){
        setTimeout(function(){
            contact_right.classList.add("show6");
        },index * 150);
    }
  });
  
});
const modeBtns = document.querySelectorAll(".mode");

function updateIcons(){
  const icons = document.querySelectorAll(".mode-icon");

  icons.forEach(icon=>{
    if(document.body.classList.contains("light-mode")){
      icon.setAttribute("data-lucide","moon");
    }else{
      icon.setAttribute("data-lucide","sun");
    }
  });

  lucide.createIcons();
}
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
  document.body.classList.add("light-mode");
}
updateIcons();
modeBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
      localStorage.setItem("theme","light");
    }else{
      localStorage.setItem("theme","dark");
    }
    updateIcons();
  });
});
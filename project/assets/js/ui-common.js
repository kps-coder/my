
window.addEventListener('DOMContentLoaded', function(){
  tabControl("js-tab-head", "js-tab-body"); // tab
  modalPopControl(); // modal popup
  gnbControl(); // gnb
  toggleObj(); // toggle
});


/* tab */
function tabControl(tabHead, tabBody){
  const tabBtn = document.querySelectorAll("." + tabHead + " li");
  const tabContent = document.querySelectorAll("." + tabBody + " > .tabContent");

  tabBtn.forEach(function(obj, i){
    obj.addEventListener("click",function(e){
      //e.preventDefault();
      tabBtn.forEach(function(obj){
        obj.classList.remove("active");
      });
      obj.classList.add("active");

      tabContent.forEach(function(obj, i){
        obj.classList.remove("on");
      });
      tabContent[i].classList.add("on");
    });
  });
}

/* modal popup */
function modalPopControl() {
  const modalBtn = document.querySelectorAll(".js-modalPop");
  modalBtn.forEach(function(obj){
    obj.addEventListener("click", function(){
      const modalId = obj.getAttribute("href");
      const modalWrap = document.querySelector(modalId);
      const modalClsBtn = document.querySelector(modalId + " .modal-close > button");
      console.log(modalId);
      modalWrap.classList.add("open");
      document.body.style.overflow = "hidden";
      modalClsBtn.addEventListener("click", function(){
        modalWrap.classList.remove("open");
        obj.focus();
        document.body.removeAttribute("style");
      });
    });
  });
}

/* gnb */
function gnbControl() {
  const gnbOpenBtn = document.querySelector(".btn-gnb");
  const gnbWrap = document.querySelector(".gnb-wrap");
  const gnbCloseBtn = document.querySelector(".gnb-close");
  const gnbContainer = document.querySelector(".gnb-container");
  const gnbBack = document.createElement("div");
  gnbBack.classList.add("gnb-back");
  gnbOpenBtn.addEventListener("click", function(){
    gnbWrap.classList.add("open");
    //console.log(-gnbContainer.offsetWidth);
    setTimeout(function(){      
      gnbContainer.animate(
        {left:[-gnbContainer.offsetWidth + "px","0"]}, 
        {duration: 200, fill: "forwards"}
      );
      gnbWrap.insertBefore(gnbBack, gnbContainer);
      document.body.style.overflow = "hidden"; 
    }, 50);   
  });
  gnbCloseBtn.addEventListener("click", function(){
    gnbContainer.animate(
      {left:-gnbContainer.offsetWidth + "px"}, 
      {duration: 200, fill: "forwards"}
    );
    gnbBack.remove();
    setTimeout(function(){
      gnbWrap.classList.remove("open");
    }, 300);
    document.body.removeAttribute("style"); 
  });
}

/* toggle */
function toggleObj() {
  const toggleBtn = document.querySelectorAll("[data-toggle-obj]");
  const toggleTarget = document.querySelectorAll("[data-toggle-target]");
  toggleBtn.forEach(function(obj){
    obj.addEventListener("click", function(){
      const btnNum = obj.getAttribute("data-toggle-obj");
      if(obj.classList.contains("on")){
        toggleTarget.forEach(function(obj){
          const targetNum = obj.getAttribute("data-toggle-target");
          if(targetNum === btnNum){
            obj.classList.remove("on");
          }
        });
        obj.classList.remove("on");
      } else {
        toggleTarget.forEach(function(obj){
          const targetNum = obj.getAttribute("data-toggle-target");
          if(targetNum === btnNum){
            obj.classList.add("on");
          }
        });
        obj.classList.add("on");
      }
    });
  });
}

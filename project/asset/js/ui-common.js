
window.addEventListener('DOMContentLoaded', function(){
  tabControl("tab-head", "tab-body"); // tab
  modalPopControl(); // modal popup
  gnbControl(); // gnb
});


/* tab */
function tabControl(tabHead, tabBody){
  const tabBtn = document.querySelectorAll("." + tabHead + " li");
  const tabContent = document.querySelectorAll("." + tabBody + " > .tabContent");

  tabBtn.forEach(function(obj, i){
    obj.addEventListener("click",function(){
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
      modalClsBtn.addEventListener("click", function(){
        modalWrap.classList.remove("open");
        obj.focus();
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
    console.log(-gnbContainer.offsetWidth);
    setTimeout(function(){      
      gnbContainer.animate(
        {left:[-gnbContainer.offsetWidth + "px","0"]}, 
        {duration: 200, fill: "forwards"}
      );
      gnbWrap.insertBefore(gnbBack, gnbContainer);
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
  });
}

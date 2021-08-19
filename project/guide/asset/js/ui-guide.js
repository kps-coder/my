
window.addEventListener('DOMContentLoaded', function(){
  gnbControlGuide(); // gnb
});


/* gnb */
function gnbControlGuide() {
  const gnbOpenBtn = document.querySelector(".g-btn-gnb");
  const gnbWrap = document.querySelector(".g-gnb-wrap");
  const gnbCloseBtn = document.querySelector(".gnb-close");
  const gnbContainer = document.querySelector(".gnb-container");
  const gnbBack = document.createElement("div");
  gnbBack.classList.add("g-gnb-back");
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

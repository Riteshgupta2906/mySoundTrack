for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
  });
}


addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key)
});


function makeSound(key)
{
  // audio.pause();
  switch (key)
  {
    case "w":
      var audio = new Audio('sounds/Alan-Silvestri-Portals-From-Aven.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/Dark Knight - Batman.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/Interstellar.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/Pirates Of Carribean - BGM.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tokyo drift.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/war.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/Mirzapur Theme.mp3');
      audio.play();
      break;
  }

}
function buttonAnimation(currentKey){
  var activeKey=document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed")
  },100)
}
/**/

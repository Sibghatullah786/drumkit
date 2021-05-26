var drumButtonLength=document.querySelectorAll(".drum").length;
for(var i=0; i<drumButtonLength; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  this.style.color="black";
  var buttonInnerHtml= this.innerHTML;
  switch (buttonInnerHtml) {
      case "S":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
        break;

        case "I":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
          break;

          case "B":
          var tom3=new Audio("sounds/tom-3.mp3");
          tom3.play();
            break;

            case "G":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
              break;

              case "H":
              var snare=new Audio("sounds/snare.mp3");
              snare.play();
                break;

                case "A":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                  break;

                  case "T":
                  var crash=new Audio("sounds/crash.mp3");
                  crash.play();
                    break;
    default:

  }


});

}

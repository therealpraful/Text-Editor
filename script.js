
function updateText(){
    let text = document.getElementById("text-input").value;
    document.getElementById("text-output").innerHTML = text;
    }
  

function makeBold(elem){
    //CODE GOES HERE
    console.log(elem);
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
  }

function makeItalic(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
   }

  function makeUnderline(elem){
      // Here we are doing using without toggle.
    if (elem.classList.contains('active')){
        elem.classList.remove('active');
        document.getElementById('text-output').classList.remove('underline');
    } else{
        elem.classList.add('active');
        document.getElementById('text-output').classList.add('underline');
    }
  }

function alignText(elem, alignType){
   document.getElementById('text-output').style.textAlign = alignType;
   //We will take all the three buttons and make it off . we have align class common in all align-buttons
   let buttonlist = document.getElementsByClassName('align')
   for (i = 0 ; i <buttonlist.length ; i++){
       // we will make inactive all the buttons
       buttonlist[i].classList.remove('active')
   }
    //and will came on button active
    elem.classList.toggle('active');

/*  Another way
    if (alignType === "left") {
       elem.classList.toggle('active');
       document.getElementById('text-output').style.textAlign = alignType
       document.getElementById("right-align").classList.remove('active')
       document.getElementById("center-align").classList.remove('active')

    }
    if (alignType === "right") {
        elem.classList.toggle('active');
        document.getElementById('text-output').style.textAlign = alignType
        document.getElementById("left-align").classList.remove('active')
        document.getElementById("center-align").classList.remove('active')
     }
    
    if (alignType === "center") {
        elem.classList.toggle('active');
        document.getElementById('text-output').style.textAlign = alignType
        document.getElementById("right-align").classList.remove('active')
        document.getElementById("left-align").classList.remove('active')
    }
*/
  }
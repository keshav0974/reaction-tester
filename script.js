function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}                                                        // function to randomly generate a color fo the box

function movingBox() {
    var left;
    var upDown;
    var side;
    left = Math.random()*100;         // random movement upto 100% of view width
    upDown = Math.random()*70;        // random movement upto 70% of vieh hieght
    side = ((Math.random()*200)+80);  // minimum length size is 80px
    document.getElementById("testBox").style.left = left + "vw";   // this part was done in video lecture without adding any untis ! how?
    document.getElementById("testBox").style.top = upDown+ "vh";
    document.getElementById("testBox").style.width= side+ "px";
    document.getElementById("testBox").style.height= side+ "px";
    begin=new Date().getTime();                                    //why there is no need to declare variable here but later on we have to ?
   
};                                                       // function for moving the box randomly and starting timer


movingBox();                                             //function is called here for random position first time as well


document.getElementById("testBox").onclick = function(){
    document.getElementById("testBox").style.backgroundColor = getRandomColor() ;
    var end=new Date().getTime(); 
    var timeTaken=(end-begin)/1000;
    alert(timeTaken + "seconds");
    movingBox();
    }                                                    // main to handle every click

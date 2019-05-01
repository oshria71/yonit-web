
var j = 0;
var firstbox;
var secondbox;

function play() {
  console.log(j);
  if(j<2){
    this.style.color = "white";
    if(j == 0)
      firstbox = this;
    if(j == 1){
      secondbox = this;
      if(firstbox.textContent == secondbox.textContent){
        firstbox.style.backgroundColor = "Yellow";
        secondbox.style.backgroundColor = "Yellow";
        firstbox.removeEventListener("click", play)
        secondbox.removeEventListener("click", play)
      }
    }
  }
  else{
   var allbox = document.getElementsByClassName("boxgame2");
   for (var i=0;i< allbox.length;i++)
        allbox[i].style.color = "black";
   this.style.color = "white";
   firstbox = this;
   j=0;
  }
  j+=1;
}
document.getElementsByClassName("boxgame2").onclick = play;
    
    (function() {
        var i = 0;
        var textW = "Z";
        var n = textW.charCodeAt(0);
        function createbox() {
           var idp = document.getElementById("Middle");
           var box = document.createElement("div");
           box.innerText = textW;
           box.style.fontSize = "6.0vw"
           box.style.textAlign = "center"
           box.style.color = "black";
           box.classList.add("boxgame2");
           box.style.width = 80+20*i+"px";
           box.style.height = 80+20*i+"px";
           box.style.fontSize = 5+i+"vw";
           box.addEventListener("click", play);
           idp.appendChild(box);
           if(i!=0 && i%2)
             n= Math.floor(Math.random() * 25) + 65;
           textW = String.fromCharCode(n);
           i+=1;
         }
        document.getElementById("boxgame").onclick = createbox;
      })();




      
    

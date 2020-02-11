var data=["violet", "blue", "yellow"];
var box=[];


function counter(color){
  var that = this;
  this.number=0;
  this.ele=document.createElement("div");
//styles the div
  this.ele.style.height= "100px";
  this.ele.style.width= "200px";
  this.ele.style.borderRadius = "10px";
  this.ele.style.fontSize = "18px";
  this.ele.style.display= "flex";
  this.ele.style.justifyContent="center";
  this.ele.style.alignItems="center";
  this.ele.style.backgroundColor=color;
  this.ele.innerHTML=this.number;
//add clicking functionality 
this.ele.addEventListener("click", function(){
  that.increaseNumber();
})

  document.body.appendChild(this.ele);
}
//function to add 1 to the number
counter.prototype.increaseNumber= function(){
  this.number= this.number+1;
  this.ele.innerHTML= this.number;
}

//stores constructors in empty array
for(var i=0; i<data.length; i++){
  box.push(new counter(data[i]));
}
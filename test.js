function createCanvas(){



      var canv=document.createElement('canvas');

      canv.id='fogCanvasID';

      canv.width=window.innerWidth;

      canv.height=window.innerHeight;

      document.body.appendChild(canv);

      return canv.getContext("2d");

  }



function fillCanvas(ctx){

  ctx.fillStyle="#D3D3D3";

  ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

}



function addFogDot(ctx,color)

{



  ctx.fillStyle=color;

  xPos=rand(0,ctx.canvas.width);

  yPos=rand(0,ctx.canvas.height);

  console.log(xPos);

  console.log(yPos);

  ctx.fillRect(xPos,yPos,10,10);



}



function addFogDotDiv(color,size){

  var div=document.createElement('div');

  document.body.appendChild(div);

  div.style.position="absolute";

  width = window.innerWidth;

  height = document.body.offsetWidth-size;

  x=rand(0,100);

  y=rand(0,100);

  div.style.left=x+'%';

  div.style.top=y+'%';

  div.style.width='10px';

  div.style.height='10px';

  div.style.backgroundColor=color;



}



function rand(low,high){

  randNum=Math.floor((Math.random()*high)+low);

  console.log("random "+randNum);

  return randNum;

}



function makeAllFog(){

  var ctx=createCanvas();

  for(c=0;c<1000;c++){

      //addFogDot(ctx,"#D3D3D3");

      //addFogDotDiv("#D3D3D3",10);

      addFogDotDiv(randomColor(),10);

  }

}



function randomColor(){

  return '#'+Math.floor(Math.random()*16777215).toString(16);

}



makeAllFog();makeAllFog();



//window.location.hostname

var time_allowed = 2000;

console.log("FogSurfing is watching over your shoulder");

//var FR = new Fogger();

setTimeout(function(){ makeAllFog();; }, 2000);

setTimeout(function(){ makeAllFog();; }, 10000);

setTimeout(function(){ makeAllFog();; }, 20000);

setTimeout(function(){ makeAllFog();; }, 30000);

setTimeout(function(){ makeAllFog();; }, 40000);

setTimeout(function(){ makeAllFog();; }, 50000);

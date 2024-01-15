var mainmenubin = document.querySelector('.mainmenubin');
var mainmenulid = document.querySelector('.mainmenulid');


var correctBall = randomIntFromInterval(1, 3); //blue
console.log(correctBall);

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  start();
});

var firstSelection = 0;
var firstHighlighted = 0;
var madeSecondSelection = false;
var wireframe, dialogBoxQ, dialogBoxY, dialogBoxN;

var ball1, ball2, ball3;

var bin1, lid1, bin2, lid2, bin3, lid3;

var startTime, endTime;

var timeSpent = [];
var choices = [];

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = /*th.round(*/timeDiff;//);
  console.log(seconds + " seconds");
  timeSpent.push(seconds);
}

  mainmenubin.addEventListener('mouseenter', function () {
  // (firstSelection != 2 && !firstHighlighted == 2){
    mainmenubin.setAttribute('color', "#000000");
    mainmenulid.setAttribute('color', "#000000");
  //
    
  });
  mainmenubin.addEventListener('mouseleave', function() {
    // (firstSelection != 2 && !firstHighlighted == 2){
      mainmenubin.setAttribute('color', "#FDFFB3");
      mainmenulid.setAttribute('color', "#FDFFB3");
    //
  });
  mainmenubin.addEventListener('click', function() {
  	end();
  	startGame();
  });
  
  function startGame(){
  	/* mainmenubin.remove();
  	    mainmenulid.remove();
  	    mainmenuent.remove();
  	    scene.remove(); */
    
    //var b1 = document.querySelector('a-scene').appendChild(document.createElement('a-entity'));
    //bin1 = b1.appendChild(document.createElement('a-cylinder'));
    document.body.innerHTML = "<a-scene id='scene'><a-entity id='bin1'><a-text value='Bin 1' font='exo2bold' negate='false' scale='2 2 2' position='-2.5 1.65 -3'></a-text><a-cone class='bin1' position='-2 0.5 -3' radius-bottom='.5' radius-top='.75' rotation='0 0 0' color='#FDFFB3' opacity='.5'><a-cylinder class='lid1' position='0 .5 0' color='#FDFFB3' opacity='.5' rotation='0 0 0' radius='.77' height='.05'></a-cylinder><a-sphere id='ball1' radius='.1' color='#000000'></a-sphere></a-cone></a-entity><a-entity id='bin2'><a-text value='Bin 2' font='exo2bold' negate='false' scale='2 2 2' position='-.5 1.65 -3'></a-text><a-cone class='bin2' position='0 0.5 -3' radius-bottom='.5' radius-top='.75' rotation='0 0 0' color='#FDFFB3' opacity='.5'><a-cylinder class='lid2' position='0 .5 0' color='#FDFFB3' opacity='.5' rotation='0 0 0' radius='.77' height='.05'></a-cylinder><a-sphere id='ball2' radius='.1' color='#000000'></a-sphere></a-cone></a-entity><a-entity id='bin3'><a-text value='Bin 3' font='exo2bold' negate='false' scale='2 2 2' position='1.5 1.65 -3'></a-text><a-cone class='bin3' position='2 0.5 -3' radius-bottom='.5' radius-top='.75' rotation='0 0 0' color='#FDFFB3' opacity='.5'><a-cylinder class='lid3' position='0 .5 0' color='#FDFFB3' opacity='.5' rotation='0 0 0' radius='.77' height='.05'></a-cylinder><a-sphere id='ball3' radius='.1' color='#000000'></a-sphere></a-cone></a-entity><a-plane position='0 0 -4' rotation='-90 0 0' width='6' height='4' color='#ababab'></a-plane><a-sky color='#423c3c'></a-sky><a-camera><a-cursor color='#E9A400'></a-cursor></a-camera></a-scene>";
    
    bin1 = document.querySelector('.bin1');
    lid1 = document.querySelector('.lid1');
    bin2 = document.querySelector('.bin2');
    lid2 = document.querySelector('.lid2');
    bin3 = document.querySelector('.bin3');
    lid3 = document.querySelector('.lid3');
    
    ball1 = document.querySelector('#ball1');
    ball2 = document.querySelector('#ball2');
    ball3 = document.querySelector('#ball3');
    
    bin1.addEventListener('mouseenter', function () {
    // (!firstSelection == 1 && !firstHighlighted == 1){
      bin1.setAttribute('color', "#000000");
      lid1.setAttribute('color', "#000000");
    //
    });
    bin1.addEventListener('mouseleave', function() {
    // (!firstSelection == 1 && !firstHighlighted == 1){
      bin1.setAttribute('color', "#FDFFB3");
      lid1.setAttribute('color', "#FDFFB3");
    //

    });
    bin1.addEventListener('click', function() {
      addDialogBoxes(1);
    });
    
    bin2.addEventListener('mouseenter', function () {
  // (firstSelection != 2 && !firstHighlighted == 2){
    bin2.setAttribute('color', "#000000");
    lid2.setAttribute('color', "#000000");
  //
    
    });
    bin2.addEventListener('mouseleave', function() {
      // (firstSelection != 2 && !firstHighlighted == 2){
        bin2.setAttribute('color', "#FDFFB3");
        lid2.setAttribute('color', "#FDFFB3");
      //
    });
    bin2.addEventListener('click', function() {
      addDialogBoxes(2);
    });
    
    bin3.addEventListener('mouseenter', function () {
  // (firstSelection != 3 && !firstHighlighted == 3){
      bin3.setAttribute('color', "#000000");
      lid3.setAttribute('color', "#000000");
    //
  });
  bin3.addEventListener('mouseleave', function() {
  // (firstSelection != 3 && !firstHighlighted == 3){
    bin3.setAttribute('color', "#FDFFB3");
    lid3.setAttribute('color', "#FDFFB3");
  //
    
    });
    bin3.addEventListener('click', function() {
      addDialogBoxes(3);
    });
    
    start();
  }
  
  //randomize balls
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function animate(obj, newpos){
	end();
  start();
  obj.setAttribute('animation', "property: position; to: 0 1.5 0; dur: 2000; easing: linear; loop: false");
  obj.setAttribute('color', '#ff0000');
  setTimeout(function(){
    obj.removeAttribute('animation');
    console.log("Executed after 2 second");
    obj.setAttribute('animation', "property: position; to: "+newpos+"; dur: 2000; easing: linear; loop: false");
    setTimeout(function(){
      obj.setAttribute('color', '#000000');
    }, 2000);
  }, 2000);
}
var dialogBoxesExist = false;
var dialogBin = null;

 function addDialogBoxes(number){
  //add ARE YOU SURE prompts
  if (dialogBoxesExist == false){
  	dialogBoxesExist = true;
    dialogBin = number;
    console.log('dialogbin='+dialogBin);
    dialogBoxQ = document.querySelector('a-scene').appendChild(document.createElement('a-entity'));
    dialogBoxY = document.querySelector('a-scene').appendChild(document.createElement('a-entity'));
    dialogBoxN = document.querySelector('a-scene').appendChild(document.createElement('a-entity'));
    dialogBoxN.setAttribute('geometry', 'primitive: box; width: .75; height: .75; depth: .15');
    dialogBoxQ.setAttribute('geometry', 'primitive: box; width: 1.75; height: .75; depth: .15');
    dialogBoxY.setAttribute('geometry', 'primitive: box; width: .75; height: .75; depth: .15');
    
    dialogBoxY.setAttribute('material', 'color: #00FF00');
    var ytext = dialogBoxY.appendChild(document.createElement('a-text'));
    ytext.setAttribute('value', 'Yes');
    ytext.setAttribute('position', '-.25 0 .1');
    ytext.setAttribute('font', 'exo2bold');

    dialogBoxN.setAttribute('material', 'color: #0000FF');
    var ntext = dialogBoxN.appendChild(document.createElement('a-text'));
    ntext.setAttribute('value', 'No');
    ntext.setAttribute('position', '-.25 0 .1');
    ntext.setAttribute('font', 'exo2bold');

    dialogBoxQ.setAttribute('material', 'color: #FF0000');
    var qtext;
    qtext = dialogBoxQ.appendChild(document.createElement('a-text'));
    qtext.setAttribute('value', 'Are you sure\nyou want Bin ' + number + '?');
    qtext.setAttribute('position', '-.85 0 .1');
    qtext.setAttribute('font', 'exo2bold');
    qtext.setAttribute("id", "question");
    switch(number){
    	case 1:
    			dialogBoxY.setAttribute('position', '-2.5 2.1 -2.5');
          dialogBoxN.setAttribute('position', '-1.5 2.1 -2.5');
          dialogBoxQ.setAttribute('position', '-2 2.85 -2.5');
          break;
      case 2:
      		dialogBoxY.setAttribute('position', '-.5 2.1 -2.5');
          dialogBoxN.setAttribute('position', '.5 2.1 -2.5');
          dialogBoxQ.setAttribute('position', '0 2.85 -2.5');
          break;
      case 3:
      		dialogBoxY.setAttribute('position', '1.5 2.1 -2.5');
          dialogBoxN.setAttribute('position', '2.5 2.1 -2.5');
          dialogBoxQ.setAttribute('position', '2 2.85 -2.5');
      		break;
    }
  }
  
  //change dialogBox's question for new bin if dialog boxes still exist
  if (dialogBin != null && dialogBin != number && dialogBoxesExist == true){
   var q = document.querySelector('#question');
   q.setAttribute('value', 'Are you sure\nyou want Bin ' + number + '?');
   switch(number){
    	case 1:
    			dialogBoxY.setAttribute('position', '-2.5 2.1 -2.5');
          dialogBoxN.setAttribute('position', '-1.5 2.1 -2.5');
          dialogBoxQ.setAttribute('position', '-2 2.85 -2.5');
          break;
      case 2:
      		dialogBoxY.setAttribute('position', '-.5 2.1 -2.5');
          dialogBoxN.setAttribute('position', '.5 2.1 -2.5');
          dialogBoxQ.setAttribute('position', '0 2.85 -2.5');
          break;
      case 3:
      		dialogBoxY.setAttribute('position', '1.5 2.1 -2.5');
          dialogBoxN.setAttribute('position', '2.5 2.1 -2.5');
          dialogBoxQ.setAttribute('position', '2 2.85 -2.5');
      		break;
    }
   dialogBin = number;
   console.log('dialogbin='+dialogBin);
  }
  
  dialogBoxY.addEventListener('mouseenter', function () 	{
      dialogBoxY.setAttribute('material', "color: #676564");
  });
  dialogBoxY.addEventListener('mouseleave', function() {
    dialogBoxY.setAttribute('material', "color: #00FF00");
  });
  
  dialogBoxN.addEventListener('mouseenter', function () 	{
      dialogBoxN.setAttribute('material', "color: #676564");
  });
  dialogBoxN.addEventListener('mouseleave', function() {
    dialogBoxN.setAttribute('material', "color: #0000FF");
  });
  
  dialogBoxY.addEventListener('click', function() {
  	console.log('confirmed ' + dialogBin);
    choices.push(dialogBin);
    switch (dialogBin){
    	case 1: 
      				clickedBin1();
      				break;
      case 2: 
      				clickedBin2();
      				break;
      case 3: 
      				clickedBin3();
      				break;
    }
    dialogBin = null;
    dialogBoxesExist = false;
    try{
    	dialogBoxY.remove();
    	dialogBoxN.remove();
    	dialogBoxQ.remove();
    }
    catch (err){
    
    }

    
  });
  dialogBoxN.addEventListener('click', function() {
  	dialogBin = null;
    dialogBoxesExist = false;
  	try{
    	dialogBoxY.remove();
    	dialogBoxN.remove();
    	dialogBoxQ.remove();
    }
    catch (err){
    
    }
  });
} 

function clickedBin1(){
  	if (firstSelection != 0){ //second choice
      revealCorrectBall(1, correctBall);
    }
    if (firstSelection == 0){

      bin1.setAttribute('color', "#FDFFB3");
      lid1.setAttribute('color', "#FDFFB3");
      addWireframe('-2 0.7 -3', 1);
      //bin1.setAttribute('color', "#00ff00");
      //lid1.setAttribute('color', "#00ff00");
        switch (randomIntFromInterval(2,3)){ //reveal a random red ball
        case 2: 
                animate(ball2, '2, 0.25, 0');
                firstHighlighted = 2;
                correctBall = randomIntFromInterval(1,2);
                if (correctBall == 2){correctBall++;}
                break;
        case 3: 
                correctBall = randomIntFromInterval(1,2);
                animate(ball3, '-2 0.25 0');
                firstHighlighted = 3;
                break;
        }

    firstSelection = 1;
    }
}

function clickedBin2(){
	if (firstSelection != 0){ //second choice
      revealCorrectBall(2, correctBall);
    }
    if (firstSelection == 0){
      bin2.setAttribute('color', "#FDFFB3");
      lid2.setAttribute('color', "#FDFFB3");
      addWireframe('0 0.7 -3', 2);
        switch (randomIntFromInterval(1,2)){ //reveal a random red ball
        case 1: 
              firstHighlighted = 2;
              correctBall = randomIntFromInterval(2,3);
              animate(ball1, '4 .25 0');
              break;
        case 2: 
              firstHighlighted = 2;
              correctBall = randomIntFromInterval(1,2);
              animate(ball3, '-4 .25 0');
              break;
        }
      
    }
    firstSelection = 2;
}

function clickedBin3(){
	if (firstSelection != 0){ //second choice
      revealCorrectBall(3, correctBall);
    }
    if (firstSelection == 0){
    
      bin3.setAttribute('color', "#FDFFB3");
      lid3.setAttribute('color', "#FDFFB3");
      addWireframe('2 0.7 -3', 3);
      switch (randomIntFromInterval(1,2)){ //reveal a random red ball
      case 1: 
              animate(ball1, '2 .25 0');
              firstHighlighted = 3;
              correctBall = randomIntFromInterval(2,3);
              break;
      case 2: 
              animate(ball2, '-2 .25 0');
              firstHighlighted = 3;
              correctBall = randomIntFromInterval(1,2);
              if (correctBall == 2){correctBall++;}
              break;
        }
      
    
    }
    firstSelection = 3;
}

function addWireframe(position, binNum){
      wireframe = document.querySelector('a-scene').appendChild(document.createElement('a-entity'));
      wireframe.setAttribute('position', position);
      wireframe.setAttribute('geometry', 'primitive: box; width: 1.5; height: 1.5; depth: 1.5');
      wireframe.setAttribute('material', 'color: #FFFFFF; opacity: 0.2; wireframe: true');
      wireframe.addEventListener('mouseenter', function () {
    	// (!firstSelection == 1 && !firstHighlighted == 1){
      	switch (binNum){
        	case 1: bin1.setAttribute('color', "#000000");
      						lid1.setAttribute('color', "#000000");
                  break;
          case 2: bin2.setAttribute('color', "#000000");
      						lid2.setAttribute('color', "#000000");
                  break;
          case 3: bin3.setAttribute('color', "#000000");
      						lid3.setAttribute('color', "#000000");
                  break;
        }
      //FDFFB3
      });
      wireframe.addEventListener('mouseleave', function() {
      // (!firstSelection == 1 && !firstHighlighted == 1){
        switch (binNum){
        	case 1: bin1.setAttribute('color', "#FDFFB3");
      						lid1.setAttribute('color', "#FDFFB3");
                  break;
          case 2: bin2.setAttribute('color', "#FDFFB3");
      						lid2.setAttribute('color', "#FDFFB3");
                  break;
          case 3: bin3.setAttribute('color', "#FDFFB3");
      						lid3.setAttribute('color', "#FDFFB3");
                  break;
        }
      //

      });
      wireframe.addEventListener('click', function() {
        addDialogBoxes(binNum);
    });
}


function revealCorrectBall(selected, correctBall){
console.log(choices);
end();
  switch (correctBall){
    case 1:
          ball1.setAttribute('color', 'blue');
          break;
    case 2:
          ball2.setAttribute('color', 'blue');
          break;
    case 3: 
          ball3.setAttribute('color', 'blue');
          break;
  }
  if (correctBall == selected){
    console.log("You Win!");
  }
  else {
    console.log("You Lose!");
  }
  console.log(correctBall);
}


  
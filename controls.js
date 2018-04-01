var color = document.getElementById("color");

var preview = document.getElementById("preview");

var number = document.getElementById("number");

var rHair = document.getElementById("rangeHair");

var rEyes = document.getElementById("rangeEyes");

var rNose = document.getElementById("rangeNose");

var rMouth = document.getElementById("rangeMouth");

var rangeB = document.getElementById("rangeButton");

var value = document.getElementById("rangeHair").value;

var hair = document.getElementById("hair");

var eyes = document.getElementById("eyes");

var nose = document.getElementById("nose");

var mouth = document.getElementById("mouth");

var create = document.getElementById("add");

var random = document.getElementById("random");

var auto = document.getElementById("auto");

var stop = document.getElementById("stop");

var display = document.getElementById("display");

var items = document.getElementsByClassName("items");

change = 1; //increments for changing hair, eyes, nose, mouth


var num = 0; //create avatars

var v = 0;

var refresh = null;

//END OF VARIABLES

color.addEventListener("change", function(changebg) {
    if(changebg) {
        preview.style.backgroundColor = ""+color.value+"";
    }
});

/* 2b
number.addEventListener("click", function(changeToNumber) {
    if (changeToNumber){
        rHair.type = number;
        rEyes.type = number;
        rNose.type = number;
        rMouth.type = number;
        }
    });

rangeB.addEventListener("click", function(changeToRange) {
    if (changeToRange){
        rHair.type = 'range';
        rEyes.type = 'range';
        rNose.type = 'range';
        rMouth.type = 'range';
    }
});
*/

rHair.addEventListener("change", function(size) {
    if (size) {
        hair.style.width = ""+rHair.value+"" + '%';
    }
});

rEyes.addEventListener("change", function(size) {
    if (size) {
        eyes.style.width = ""+rEyes.value+"" + '%';
    }
});

rNose.addEventListener("change", function(size) {
    if (size) {
        nose.style.width = ""+rNose.value+"" + '%';
    }
});

rMouth.addEventListener("change", function(size) {
    if (size) {
        mouth.style.width = ""+rMouth.value+"" + '%';
    }
});

//LEVEL 3 // HOW TO USE INCREMENTS *important to remember

hair.addEventListener("click", function (changeHair) {
    
    change += 1;
    
        hair.src = "img/hair" +change+ ".png";
    
    if(change >= 3) {
        change = 0;
    }
});

eyes.addEventListener("click", function (changeEyes) {
    
    change += 1;
    
        eyes.src = "img/eyes" +change+ ".png";
    
    if (change >= 3) {
        change = 0;
    }
});

nose.addEventListener("click", function (changeNose) {
    
    change += 1;
    
        nose.src = "img/nose" +change+ ".png";
    
    if (change >= 3) {
        change = 0;
    }
});

mouth.addEventListener("click", function (changeMouth) {
    
    change +=1;
    
        mouth.src = "img/mouth" +change+ ".png";
    
    if (change >= 3) {
        change = 0;
    }
});


//LEVEL 5a // 4a & 4b

function createFace() {
    
    var newDiv = document.createElement("div"); //New Div for Items
    display.appendChild(newDiv);
    newDiv.className = "avatars";
    newDiv.id = "avatar"+num;
    num++;
    
    newDiv.addEventListener("click", function() {
    newDiv.style.display = 'none';
})
    
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.display = "inline-block";
    newDiv.style.backgroundColor = preview.style.backgroundColor;
    
    var hairImg = document.createElement("img"); //First <img>
    hairImg.className = "smallitems";
    hairImg.id = "hairImg"+v;
    v++;
    
    newDiv.appendChild(hairImg); 
    hairImg.src = hair.src; 
    hairImg.style.width = hair.style.width;
    hairImg.style.top = hair.style.top;
    
    var eyesImg = document.createElement("img"); //Second <img>
    eyesImg.className = "smallitems";
    eyesImg.id = "eyesImg"+v;
    v++;
    
    newDiv.appendChild(eyesImg);
    eyesImg.src = eyes.src;
    eyesImg.style.width = eyes.style.width;
    eyesImg.style.top = eyes.style.top;
    //eyesImg.style.position = eyes.style.position;
    
    var noseImg = document.createElement("img"); //Third <img>
    noseImg.className = "smallitems";
    noseImg.id = "noseImg"+v;
    v++;
    
    newDiv.appendChild(noseImg); 
    noseImg.src = nose.src; 
    noseImg.style.width = nose.style.width;
    noseImg.style.top = nose.style.top;
    
    var mouthImg = document.createElement("img"); //Fourth <img>
    mouthImg.className = "smallitems";
    mouthImg.id = "mouthImg"+v;
    v++;
    
    newDiv.appendChild(mouthImg); 
    mouthImg.src = mouth.src; 
    mouthImg.style.width = mouth.style.width;
    mouthImg.style.top = mouth.style.top;
    
}

add.addEventListener("click", function(){
    createFace();
})

function randomFace(){
    var j = Math.floor(Math.random() * 3) + 1;
        0 > j < 4;
    hair.src = "img/hair" +j+ ".png";
    
    var j = Math.floor(Math.random() * 3) + 1;
        0 > j < 4;
    eyes.src = "img/eyes" +j+ ".png";
    
    var j = Math.floor(Math.random() * 3) + 1;
        0 > j < 4;
    nose.src = "img/nose" +j+ ".png";
    
    var j = Math.floor(Math.random() * 3) + 1;
        0 > j < 4;
    mouth.src = "img/mouth" +j+ ".png";
    
    var r = Math.round(Math.random()*255); //BG colour
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);

    
    preview.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    
    var k = Math.floor(Math.random()*70) + 1; //Hair size
    
     rHair.value = k;
    
    hair.style.width = k + "%";
   
    var l = Math.floor(Math.random()*40) + 1; //Eyes size
    
    rEyes.value = l;
    
    eyes.style.width = l + "%";
    
    var m = Math.floor(Math.random()*30) + 1; //Nose size
    
    rNose.value = m;
    
    nose.style.width = m + "%";
    
    var n = Math.floor(Math.random()*35) + 1; //Mouth size
    
    rMouth.value = n;
    
    mouth.style.width = n + "%";
}

random.addEventListener("click", function(){
    randomFace();
})


//LEVEL 5b

function changeType(type){
        rHair.type = type;
        rEyes.type = type;
        rNose.type = type;
        rMouth.type = type;
}


number.addEventListener("click", function() {
    changeType("number");
    })

rangeB.addEventListener("click", function() {
    changeType("range");
})

//LEVEL 6

function rCreate(){
    randomFace();
    createFace();
    }


auto.addEventListener("click", function() {
    refresh = setInterval(rCreate,500);
});

stop.addEventListener("click", function() {
    clearInterval(refresh);
})

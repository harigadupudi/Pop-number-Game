var myvar=1;
var d ;
var d1;
var myvar1;
var score;
var x1,i,s,et;
function bubble(x){
    for(let i=0;i<x;i++){  // creating bubbles and appending button to document along with attributes
        var btn  = document.createElement("button");
        btn.className = "btn1";
        btn.innerHTML = i%10+1;
        btn.id = "b1";
        btn.addEventListener("click",function(){compare(this);} );
        document.getElementById("main").appendChild(btn);
    }
}
function compare(id){
    let x = id.innerHTML;
    //console.log(x);
    let d1 = document.getElementById("dis").innerHTML;
    //console.log(d1);
    if(x==d1){  // checking of displayed value and popped value
        score++;
        console.log(score);  ///check
    }
    document.getElementById("sc").innerHTML = score;
}
/*function compare1(btn){
    let y = document.getElementById("b1");
    console.log(y.innerHTML)
}*/
function start(){
    score=0;              // intial value of score 
    d1=63;                //set countdown time check
    end();                 //calling end() function when started to start countdown
    bubble(10);             //setting number of bubbles to be displayed 
    document.getElementById("sc").innerHTML = score;   //setting score to  always when at start time
    document.getElementById("dis").innerHTML = "";    //setting display as empty 
    x1 = document.querySelectorAll(".btn1");
        for(i=0;i<x1.length;i++){  
            x1[i].style.display = "inline";    // setting all buttons to display when start is pressed
        }
    s = document.getElementById("st");
    s.disabled = true;  //Disabling start button
    et = document.getElementById("et");   
    et.innerHTML = 60;   //setting countdown starts from 60
    myvar = setInterval(startdis,3000);   //setting display random number interval to 3 secs
    console.log(myvar);  //check
    console.log("ok");   //check

}
function startdis(){
    /*d=0;*/
    var d = Math.floor(Math.random()*10)+1;
    document.getElementById("dis").innerHTML = d;
    sp();
}
function sp(){
    let d1 = document.getElementById("dis").innerHTML;
    responsiveVoice.speak(d1.toString());
}
function end(){
    myvar1 = setInterval(endtime,1000);
}

function endtime(){
    d1=d1-1;
    if(d1<=60){
    document.getElementById("et").innerHTML=d1;
    }
    if(d1==0){
        x1 = document.querySelectorAll(".btn1");
        for(i=0;i<x1.length;i++){
            x1[i].style.display = "none";
        }
        stoptime();
        //s = document.getElementById("st");
        s.disabled = false;
        console.log("run");
    }
    //console.log(d1);
}
function stoptime(){
    clearTimeout(myvar1);
    clearInterval(myvar);
    console.log("run11")
}
var msg = new SpeechSynthesisUtterance();
msg.text = "Hello World";
window.speechSynthesis.speak(msg);
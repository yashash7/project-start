function greet() {
    let time = new Date();
    let hrs = time.getHours();
    //let mins = time.getMinutes();
    if(hrs>=0 && hrs<12) {
        return(document.getElementById("greet").innerHTML = "Good Morning");
    }
    else if(hrs>=12 && hrs <17) {
        return(document.getElementById("greet").innerHTML = "Good AfterNoon");
    }
    else {
        return(document.getElementById("greet").innerHTML = "Good Evening");
    }
}

var i = 0;
var txt = 'Sir, Have A Great Day!'; /* The text */
//var txt2 = 'Welcome Yashashchandra';
var speed = 97; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typer").innerHTML += txt.charAt(i);
    //document.getElementById("wel").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// All the basic declarations

let i = 0;
let x = document.getElementById("box").style.display;
let start = 0;
let time = 0;
let end = 0;
let a = [];

// Function that makes further procedure possible, on clicking the first button

document.getElementById("proceed").onclick = function() {
    document.getElementById("des").style.display = "none";
    document.getElementById("greet").style.display = "flex";
    document.getElementById("click").style.display = "block";
}

// Function that makes further process possible, on clicking the second button

document.getElementById("play").onclick = function() {
    document.getElementById("greet").style.display = "none";
    move();
    i--;
    document.getElementById("head").style.display = "none";
}

start = new Date().getTime();

// Function that calculates and displays the reaction time

document.getElementById("box").onclick = function() {
    x = "none";
    end = new Date().getTime();
    time = (end - start)/1000;
    a[i] = time;
    alert(`Your reaction time was ${time} seconds.`);
    move();
    if (i == 6) {
        x = "none"; 
        document.getElementById("box").hidden = true;
        let z = (a[0] + a[1] + a[2] + a[3] + a[4] + a[5])/6;
        document.getElementById("write").style.display = "flex";
        document.getElementById("write2").style.display = "block";
        document.getElementById("write").style.flexDirection = "column";
        document.getElementById("first").innerHTML = `The test result is:`;
        document.getElementById("second").innerHTML = `Average reaction time - ${z.toFixed(3)} seconds.` 
    }
}

// Function that moves the box on the screen

const move = () => {
    document.getElementById("box").style.left = `${Number.parseInt(Math.random()*80)}vw`;
    document.getElementById("box").style.top = `${Number.parseInt(Math.random()*80)}vh`;
    x = "block";
    document.getElementById("box").style.backgroundColor = colors();
    start = new Date().getTime();
    i++;
}

//Function that changes the color of the box as it moves across the screen

const colors = () => {
    let j;
    let array = ["red", "green", "blue", "yellow", "orange", "purple"];
    j = Number.parseInt(Math.random()*6);
    return array[j];
}


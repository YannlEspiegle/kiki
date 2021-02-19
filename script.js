function colorize(id, delim="_") {
    square = document.getElementById(id);
    let arr = id.split(delim);
    let y = Number(arr[0]);
    let x = Number(arr[1]);
    let possibles = [[y+1,x],[y,x+1],[y-1,x],[y,x-1]]
    color(square);
    for(let i=0; i<4; i++){
        let square = document.getElementById(possibles[i][0] + delim + possibles[i][1]);
        if (square != null)
            color(square)
    }
}

/*
function color(square) {
    if (square.style.backgroundColor === "red"){
        square.style.backgroundColor = "blue";
    }
    else if (square.style.backgroundColor === "blue"){
        square.style.backgroundColor = "green";
    }
    else if (square.style.backgroundColor === "green"){
        square.style.backgroundColor = "white";
    }
    else{
        square.style.backgroundColor = "red";
    }
}
*/

function color(square) {
    switch(square.style.backgroundColor) {
        case "red": square.style.backgroundColor = "blue"; break;
        case "blue": square.style.backgroundColor = "green"; break;
        case "green": square.style.backgroundColor = "white"; break;
        default: square.style.backgroundColor = "red";
    }
}

function bot_create(len) {
    for (let i=0;i<len*len;i++) {
        y = Math.floor(Math.random() * len);
        x = Math.floor(Math.random() * len);
        colorize(y+"--"+x, "--");
    }
}

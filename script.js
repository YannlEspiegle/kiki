function colorize(id) {
    square = document.getElementById(id);
    let arr = id.split("_");
    let y = Number(arr[0]);
    let x = Number(arr[1]);
    let possibles = [[y+1,x],[y,x+1],[y-1,x],[y,x-1]]
    color(square);
    for(let i=0; i<4; i++){
        let square = document.getElementById(possibles[i][0] + "_" + possibles[i][1]);
        if (square != null)
            color(square)
    }
}

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

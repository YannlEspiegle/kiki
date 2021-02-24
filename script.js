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

function color(square) {
    switch(square.style.backgroundColor) {
        case "red": square.style.backgroundColor = "blue"; break;
        case "blue": square.style.backgroundColor = "green"; break;
        case "green": square.style.backgroundColor = ""; break;
        default: square.style.backgroundColor = "red";
    }
}

function bot_create(len, level) {
    for (let i=0;i<len*level;i++) {
        y = Math.floor(Math.random() * len);
        x = Math.floor(Math.random() * len);
        colorize(y+"--"+x, "--");
        console.log(y+1, x+1);
    }
}

function clear_board(len){
  for(let i=0; i<len; i++)
    for(let j=0; j<len; j++){
        let id=i+"_"+j;
      let elem = document.getElementById(id);
      elem.style.backgroundColor = "white";
    }
}

function check(taille){
  for(let i=0; i<taille; i++)
    for(let j=0; j<taille; j++){
      let solution = document.getElementById(i + "--" + j);
      let test = document.getElementById(i + "_" + j);
      if (test.style.backgroundColor != solution.style.backgroundColor)
            return false
    }
  return true
}

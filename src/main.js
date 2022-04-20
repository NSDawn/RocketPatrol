// NS DAWN 
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config); 

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
let button, mouseClicked;

//reserve other vars
let remainingTime;


function cl(out_var = "default data") {
    let e = new Error();
    e = e.stack.split("\n")[2].split(":");
    e.pop();
    let output = "line " + String(e.pop()) + " run";
    if (out_var != "default data") {output += " with output " + String(out_var)};
    console.log(output);
    return output
}

let hi_score = 0;
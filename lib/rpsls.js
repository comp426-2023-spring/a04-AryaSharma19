function rps(move){
    const moves = ["rock", "paper", "scissors"]
    if (move == undefined) {
        var my_move =  moves[(Math.floor(Math.random() * 10) % 2)];
        var return_move = {player:my_move};
        return return_move;
    }

    if (typeof move != "string") {
      console.log(`Usage: node-rps [SHOT]
      Play Rock Paper Scissors (RPS)
      
        -h, --help      display this help message and exit
        -r, --rules     display the rules and exit
        
      [SHOT] = rock || paper || scissor
    
      Examples:
        node-rps        Return JSON with single player RPS result.
                        e.g. {"player":"rock"}
        node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"scissors","result":"win"}`);
      process.exit(0);
    }
    move = move.toLowerCase();
    if (!moves.includes(move)) {
        console.error(move + " is out of range");
        console.log(`Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`);
        process.exit(0);
    }
    var results = {}
    results.player = move;
    var comp_move = moves[(Math.floor(Math.random() * 10) % 3)];
    while (!(comp_move !== move)) {
        comp_move = moves[(Math.floor(Math.random() * 10) % 3)];
    }
    results.opponent = comp_move;
    
    const rule = ["scissors", "rock", "paper"];
    const index_of_win = moves.findIndex(element => element === move);
    var win_lose = ""; 
    if (rule[index_of_win] === comp_move) {
        win_lose = "win";
    } else {
        win_lose = "lose";
    }
    results.result = win_lose;
    return results;
}
function rpsls(move){
    const moves = ["rock", "paper", "scissors","lizard","spock"]
    if (move == undefined) {
        var my_move =  moves[(Math.floor(Math.random() * 10) % 2)];
        var return_move = {player:my_move};
        return return_move;
    }
    if (typeof move != "string") {
        console.log(`Usage: node-rpsls [SHOT]
        Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
        
          -h, --help        display this help message and exit
          -r, --rules       display the rules and exit
        
        [SHOT] = rock || paper || scissor || lizard ||spock 
        
        Examples:
          node-rpsls        Return JSON with single player RPSLS result.
                            e.g. {"player":"rock"}
          node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
        process.exit(0);
    }
    move = move.toLowerCase();
    if (!moves.includes(move) ) {
        console.error(move + " is out of range");
        console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock SMOOSHES Lizard
            - Lizard POISONS Spock
            - Spock SMASHES Scissors
            - Scissors DECAPITATES Lizard
            - Lizard EATS Paper
            - Paper DISPROVES Spock
            - Spock VAPORIZES Rock
            - Rock CRUSHES Scissors`);
        process.exit(0);
    }
    
    var results = {}
    results.player = move;
    var comp_move = moves[(Math.floor(Math.random() * 10) % 5)];
    while (!(comp_move !== move)) {
        comp_move = moves[(Math.floor(Math.random() * 10) % 5)];
    }
    results.opponent = comp_move;


    const rule = [
        ["lizard", "scissors"],
        ["rock", "spock"],
        ["paper", "lizard"],
        ["spock", "paper"],
        ["scissors", "rock"],
    ];
    const index_of_win = moves.findIndex(element => element === move);
    const winners = rule[index_of_win];
    var win_lose = ""; 
    if (winners.includes(comp_move)) {
        win_lose = "win";
    } else {
        win_lose = "lose";
    }
    results.result = win_lose;
    return results;
}
export {rps, rpsls}
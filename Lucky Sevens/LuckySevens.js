function diceStart(event) {

    var startingBid = parseInt(document.getElementById("bet").value);

    if (typeof startingBid == 'number' && startingBid > 0) {
        document.getElementById("errorLabel").innerHTML = "&nbsp";
        document.getElementById("start").innerHTML = "$" + startingBid;
        var wallet = startingBid;
        diceRoll(wallet);
    } else {
        document.getElementById("errorLabel").innerHTML = "Error: Please enter a positive number.";
    }

}

function diceRoll(wallet) {
    var totalDiceRolls = 0;
    var highestAmount = 0;
    var countHighest = 0;

    do {
        var diceA = Math.floor(Math.random() * 6) + 1;
        var diceB = Math.floor(Math.random() * 6) + 1;
        totalDiceRolls++;

        if (diceA + diceB == 7) {
            wallet = wallet + 4;

            if(wallet > highestAmount) {
                highestAmount = wallet;
                countHighest = totalDiceRolls;
            }

        } else {
            wallet = wallet - 1;
        }

    } while (wallet > 0);

    document.getElementById("totalRolls").innerHTML = totalDiceRolls;
    document.getElementById("highest").innerHTML = "$" + highestAmount;
    document.getElementById("countHighest").innerHTML = countHighest;
}
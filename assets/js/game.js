// Game States
//"WIN" - Player robot has defeated all enemy-robots
// *fight all enemy-robots
// *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less 

var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney= 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;

var enemyAttack = 12;

/*console.log(enemyNames);

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

console.log(enemyNames.length);*/


var fight = function(enemyName) {
    //alert players that they are starting the round
    while(enemyHealth > 0) {
     //   window.alert("Welcome to Robot Gladiators!");
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + " now has " + enemyHealth + "health remaining."
                );
        

            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } else {   
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            } 
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 2;
            }
            else {
                fight();
            }
            window.alert(playerName + " has chosen to skip the fight!");
        } else {
            window.alert("You need to choose a valid option. Try again!");
            fight();
        } 
    }
}


for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}


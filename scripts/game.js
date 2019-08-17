//start is a false until start game is selected
var start = false;
//attack var set to false
var attack = false;
//This is the enemy damage counter. 
var counterAttack = 0;
//Counter for when character is selected by character
var playerAttack = 0;
//win counter
var win = 0;

//stop game
function stopGame() {
  document.location.reload()
}

//Attack status, when it is true the attack damage is applied. Trigged to true with attack button.
var attack = false;

function Character(name, health) {
  this.name = name;
  this.health = health;
}

//Makes attack for attack button true.
function attackPlayer() {
  return attack = true;
}

//Character information is stored in Constructor
var obiwan = new Character("Obiwan", 100);
var bobaFett = new Character("Boba Fett", 150);
var aaylaSecura = new Character("Aayla Secura", 125);
var darthMaul = new Character("Dath Maul", 180);

function winCounter() {
  if (win === 5) {
    $("#game-won").text("You Win!");
    winAudio.play();
    }
  }

var lostAudio = new Audio('sounds/loss.mp3');

//win audio
var winAudio = new Audio('sounds/win.mp3');

//start game function
function startGame() {
  start = true;

  if (start === true) {


    //Selector Buttons below allow you to pick what character your attacking or defending.

    //Obiwan selctor buttons
    /***************************************/
    //Play as Obi button
    $("#select-obiwan").click(function() {
      $("#obiwan").appendTo($(".attack-button"));
      //triggers the attack button and the health counters.
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {
          //takes damage when reciving an attack by enemy. Can adjust counter attack if defensive stats need to change.
          var obiwanRemainingHealth = obiwan.health + (counterAttack -= 10);
          //output for obi's health
          console.log("obi health: " + obiwanRemainingHealth);
          $("#obiwan-health").text(obiwanRemainingHealth);
        }
        //if selected player dies game over
        if (obiwanRemainingHealth <= 0) {
          $("#game-over").text("Game Over");
          lostAudio.play();
        }

      });
    });
    //Fight agaisnt Obiwan
    $("#attack-obiwan").click(function() {
      $("#obiwan").appendTo($(".enemy-selection"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {
          //player attack is stronger but is differnt per character based on their health. Can also adjust if character defense stats need to change. 
          var obiwanRemainingHealth = obiwan.health + (playerAttack -= 15);
          console.log("obi health: " + obiwanRemainingHealth);
          $("#obiwan-health").text(obiwanRemainingHealth);
        }
        if (obiwanRemainingHealth <= 0) {
          win++;
          $("div").remove("#obiwan");
          //add win counter 
          winCounter();
        }
      });
    });
    //boba fett selector buttons//
    /***************************************/
    //Play as Boba Fett
    $("#select-boba-fett").click(function() {
      $("#boba-fett").appendTo($(".attack-button"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {
//damage that boba recieves from enemy when attack button triggers. 
          var bobaFettRemainingHealth = bobaFett.health + (counterAttack -= 10);
          console.log("Boba Fett health: " + bobaFettRemainingHealth);
          $("#boba-fett-health").text(bobaFettRemainingHealth);

        }
        if (bobaFettRemainingHealth <= 0) {
          $("#game-over").text("Game Over");
          lostAudio.play();
        }
      });
    });
    //Attack Boba Fett
    $("#attack-boba-fett").click(function() {
      $("#boba-fett").appendTo($(".enemy-selection"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {
//damage boba recieves when player is attacking enemy.
          var bobaFettRemainingHealth = bobaFett.health + (playerAttack -= 15);
          console.log("Boba Fett health: " + bobaFettRemainingHealth);
          $("#boba-fett-health").text(bobaFettRemainingHealth);
        }
        if (bobaFettRemainingHealth <= 0) {
          win++;
          $("div").remove("#boba-fett");
          //add win counter 
          winCounter();
        }
      });
    });

    //aayla secura selector buttons
    /***************************************/
    //Play as aayla secura
    $("#select-aayla-secura").click(function() {
      $("#aayla-secura").appendTo($(".attack-button"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {
//damage aayla recieves when she is being attacked by enemy
          var aaylaSecuraRemainingHealth = aaylaSecura.health + (counterAttack -= 10);
          console.log("Aayla Secura health: " + aaylaSecuraRemainingHealth);
          $("#aayla-secura-health").text(aaylaSecuraRemainingHealth);

        }
        if (aaylaSecuraRemainingHealth <= 0) {
          $("#game-over").text("Game Over");
          lostAudio.play();
        }
      });
    });

    //Fight agaisnt aayla secura
    $("#attack-aayla-secura").click(function() {
      $("#aayla-secura").appendTo($(".enemy-selection"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {
//damage aayla recieves after being attacked by player
          var aaylaSecuraRemainingHealth = aaylaSecura.health + (playerAttack -= 15);
          console.log("Aayla Secura health: " + aaylaSecuraRemainingHealth);
          $("#aayla-secura-health").text(aaylaSecuraRemainingHealth);
        }
        if (aaylaSecuraRemainingHealth <= 0) {
          win++;
          $("div").remove("#aayla-secura");
                    //add win counter 
                    winCounter();
        }
      });
    });

    //darth maul selector buttons
    /***************************************/
    //Play as Darth Maul
    $("#select-darth-maul").click(function() {
      $("#darth-maul").appendTo($(".attack-button"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {
//damage darth maul recieves when enemy attacks
          var darthMaulRemainingHealth = darthMaul.health + (counterAttack -= 10);
          console.log("Darth Maul health: " + darthMaulRemainingHealth);
          $("#darth-maul-health").text(darthMaulRemainingHealth);

        }
        if (darthMaulRemainingHealth <= 0) {
          $("#game-over").text("Game Over");
          lostAudio.play();
        }
      });


    });
    //Fight Agaisnt Darth Maul
    $("#attack-darth-maul").click(function() {
      $("#darth-maul").appendTo($(".enemy-selection"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {
//damage darth maul recieves when player attacks
          var darthMaulRemainingHealth = darthMaul.health + (playerAttack -= 15);
          console.log("Darth Maul: " + darthMaulRemainingHealth);
          $("#darth-maul-health").text(darthMaulRemainingHealth);

        }
        if (darthMaulRemainingHealth <= 0) {
          win++;
          $("div").remove("#darth-maul");
                    //add win counter 
          winCounter();
        }
      });
    });

    //Trigger for attack on attack button. Activated when button is pressed. 
    $("#attackPlayer").click(function() {
      console.log(attackPlayer());
    });
  }
}; //closing brace for startGame()

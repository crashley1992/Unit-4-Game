//start is a false until start game is selected
var start = false;
//attack var set to false
var attack = false;
//counter power counter
var counterAttack = 0;
//attack power counter
var playerAttack = 0;


//stop game
function stopGame() {
  document.location.reload()
}

//attack status
var attack = false;

function Character(name, health) {
  this.name = name;
  this.health = health;
}

//makes attack for attack button true
function attackPlayer() {
  return attack = true;
}

var obiwan = new Character("Obiwan", 100);
var bobaFett = new Character("Boba Fett", 150);
var aaylaSecura = new Character("Aayla Secura", 125);
var darthMaul = new Character("Dath Maul", 180);

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
          var obiwanRemainingHealth = obiwan.health + (counterAttack -= 10);
          console.log("obi health: " + obiwanRemainingHealth);
          $("#obiwan-health").text(obiwanRemainingHealth);
        }
        //if selected player dies game over
        if (obiwanRemainingHealth <= 0) {
          $("#game-over").text("Game Over");
          console.log("Gamer Over")
        }

      });
    });
    //Fight agaisnt Obiwan
    $("#attack-obiwan").click(function() {
      $("#obiwan").appendTo($(".enemy-selection"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {
          //player attack is stroner but is differnt per character based on their health
          var obiwanRemainingHealth = obiwan.health + (playerAttack -= 15);
          console.log("obi health: " + obiwanRemainingHealth);
          $("#obiwan-health").text(obiwanRemainingHealth);
        }
        if (obiwanRemainingHealth <= 0) {
          $("div").remove("#obiwan");
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

          var bobaFettRemainingHealth = bobaFett.health + (counterAttack -= 10);
          console.log("Boba Fett health: " + bobaFettRemainingHealth);
          $("#boba-fett-health").text(bobaFettRemainingHealth);

        }
        if (bobaFettRemainingHealth <= 0) {
          $("#game-over").text("Game Over");
        }
      });
    });
    //Attack Boba Fett
    $("#attack-boba-fett").click(function() {
      $("#boba-fett").appendTo($(".enemy-selection"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {

          var bobaFettRemainingHealth = bobaFett.health + (playerAttack -= 15);
          console.log("Boba Fett health: " + bobaFettRemainingHealth);
          $("#boba-fett-health").text(bobaFettRemainingHealth);
        }
        if (bobaFettRemainingHealth <= 0) {
          $("div").remove("#boba-fett");
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

          var aaylaSecuraRemainingHealth = aaylaSecura.health + (counterAttack -= 10);
          console.log("Aayla Secura health: " + aaylaSecuraRemainingHealth);
          $("#aayla-secura-health").text(aaylaSecuraRemainingHealth);

        }
        if (aaylaSecuraRemainingHealth <= 0) {
          $("#game-over").text("Game Over");
        }
      });
    });

    //Fight agaisnt aayla secura
    $("#attack-aayla-secura").click(function() {
      $("#aayla-secura").appendTo($(".enemy-selection"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {

          var aaylaSecuraRemainingHealth = aaylaSecura.health + (playerAttack -= 15);
          console.log("Aayla Secura health: " + aaylaSecuraRemainingHealth);
          $("#aayla-secura-health").text(aaylaSecuraRemainingHealth);
        }
        if (aaylaSecuraRemainingHealth <= 0) {
          $("div").remove("#aayla-secura");
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

          var darthMaulRemainingHealth = darthMaul.health + (counterAttack -= 10);
          console.log("Darth Maul health: " + darthMaulRemainingHealth);
          $("#darth-maul-health").text(darthMaulRemainingHealth);

        }
        if (darthMaulRemainingHealth <= 0) {
          $("#game-over").text("Game Over");
        }
      });


    });
    //Fight Agaisnt Darth Maul
    $("#attack-darth-maul").click(function() {
      $("#darth-maul").appendTo($(".enemy-selection"));
      $("#attackPlayer").click(function() {
        console.log(attackPlayer());
        if (attack === true) {

          var darthMaulRemainingHealth = darthMaul.health + (playerAttack -= 15);
          console.log("Darth Maul: " + darthMaulRemainingHealth);
          $("#darth-maul-health").text(darthMaulRemainingHealth);

        }
        if (darthMaulRemainingHealth <= 0) {
          $("div").remove("#darth-maul");
        }
      });
    });

    //Trigger for attack on attack button
    $("#attackPlayer").click(function() {
      console.log(attackPlayer());
    });









  }
}; //closing brace for startGame()

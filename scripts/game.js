//start is a false until start game is selected
var start = false;
//stop game
function stopGame() {
    document.location.reload()
  }
  
  /*Objects Constructor for each character */
// function Character(name, health, attack) {
//   this.name = name;
//   this.health = health;
//   this.attack = attack;
//   };


// var obiwan = new Character("Obiwan", 100, -25);
// var bobaFett = new Character("Boba Fett", 150, -20);
// var aaylaSecura = new Character("Aayla Secura", 125, -30);
// var darthMaul = new Character("Darth Maul", 180, -35);




// //attacks
// function obiwanAttack() {
// var totalHealth = obiwan.attack + bobaFett.health;
// console.log(totalHealth);
// }

//attack status
var attack = false;

  //start game
function startGame() {
    start = true;

    if(start === true) {
//move non selected characters from top row to middle
$(document).ready(function(){

  var obiwanHealth = 100;
  //var obiwanAttack = -25;
  var bobaFettHealth = 150;
  //var bobaFettAttack = -20;
  var aaylaSecuraHealth = 125;
  //var aaylaSecuraAttack = -30;
  var darthMaulHealth = 180;
  //var darthMaulAttack = -35;
  var health1 = 0;
  var health2 = 0;
  var health3 = 0;
  var health4 = 0;
  
/*Moves selected character to defender zone and then the others to enemy selections */

/*If Obiwan is selected as the attacker they move to attack zone*/
      $("#obiwan").click(function() {
      $("#obiwan").appendTo($(".attack-button"));
  /*All other characters will move to defending Zone onclick */
  //Onclick boba fett moves to Battlegrounds
      $("#boba-fett").click(function() {
      $("#boba-fett").appendTo($(".enemy-selection"));
    //Attack player is triggered by attack button 
      $("#attackPlayer").click(function(){
        attack === true;
      //attacker calculation 
        var remainingHealth = obiwanHealth + (health1 -= 1);
      //docks down health
        console.log(remainingHealth + " ally");
      //damage calculation of defender when attack button is selected
       var damage = bobaFettHealth + (health2 -= 25);
       console.log(damage + " enemy1");
    //removes div when health is 0
      if (damage === 0) {
        $("div").remove("#boba-fett"); 
          }
        });
       });

    /*Aayla Secura*/
       $("#aayla-secura").click(function() {
       $("#aayla-secura").appendTo($(".enemy-selection"));
//Attack player is triggered by attack button 
$("#attackPlayer").click(function(){
  attack === true;
//attacker calculation 
  var remainingHealth = obiwanHealth + (health1 -= 1);
//docks down health
  console.log(remainingHealth + " ally");
//damage calculation of defender when attack button is selected
 var damage = aaylaSecuraHealth + (health3 -= 25);
 console.log(damage + " enemy 2");
//removes div when health is 0
if (damage === 0) {
  $("div").remove("#aayla-secura"); 
    }
  });
        });
    /*Darth Maul*/
  $("#darth-maul").click(function() {
    $("#darth-maul").appendTo($(".enemy-selection"));
    //Attack player is triggered by attack button 
$("#attackPlayer").click(function(){
  attack === true;
//attacker calculation 
  var remainingHealth = obiwanHealth + (health1 -= 1);
//docks down health
  console.log(remainingHealth + " ally");
//damage calculation of defender when attack button is selected
 var damage = aaylaSecuraHealth + (health4 -= 25);
 console.log(damage + " enemy 3");
//removes div when health is 0
if (damage === 0) {
  $('<h1>You Won</h1>').appendTo('.enemy-selection');
  $("div").remove("#aayla-secura"); 
    }
  });
       });
    });//closing for obiwan as selected character



//  $("#boba-fett").click(function() {
  //    $("#boba-fett").appendTo($(".attack-button"));
  //  });

  //  $("#aayla-secura").click(function() {
  //    $("#aayla-secura").appendTo($(".attack-button"));
  //  });

  //  $("#darth-maul").click(function() {
  //    $("#darth-maul").appendTo($(".attack-button"));
  //  });

/*Moves enemy to defending area*/
  

     });
    }
}; //closing brace for startGame()


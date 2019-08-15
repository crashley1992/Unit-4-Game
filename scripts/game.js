//start is a false until start game is selected
var start = false;
//stop game
function stopGame() {
    document.location.reload()
  }
  
//attack status
var attack = false;

  //start game
function startGame() {
    start = true;

    if(start === true) {
//move non selected characters from top row to middle
$(document).ready(function(){

  var obiwanHealth = 100;
  var bobaFettHealth = 150;
  var aaylaSecuraHealth = 125;
  var darthMaulHealth = 180;
  var health1 = 0;
  var health2 = 0;
  var health3 = 0;
  var health4 = 0;
/*Might need to create a different variable for each attacker
and attack a unique span t0
*/

  
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
      //changes span in html to current health status.
        $("#health1").text(remainingHealth);
      //docks down health in console.log
        console.log(remainingHealth + " ally");
      //damage calculation of defender when attack button is selected
       var damage1 = bobaFettHealth + (health2 -= 25);
       $("#damage1").text(damage1);
       console.log(damage1 + " enemy1");
    //removes div when health is 0
      if (damage1 === 0) {
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
 var damage2 = aaylaSecuraHealth + (health3 -= 25);
 console.log(damage2 + " enemy 2");
 $("#damage2").text(damage2);
//removes div when health is 0
if (damage2 === 0) {
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
 var damage3 = darthMaulHealth + (health4 -= 25);
 console.log(damage3 + " enemy 3");
 $("#damage3").text(damage3);
//removes div when health is 0
//adds H1 Header when all enemies are defeated.
if (damage3 <= 0) {
  $("div").remove("#darth-maul"); 
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

  

     });
    }
}; //closing brace for startGame()


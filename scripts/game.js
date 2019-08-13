//start is a false until start game is selected
var start = false;
//stop game
function stopGame() {
    document.location.reload()
  }
  

  //start game
function startGame() {
    start = true;

    if(start === true) {
//move non selected characters from top row to middle
$(document).ready(function(){

/*Moves selected character to defender zone and then the others to enemy selections */
    $("#obiwan").click(function() {
    $("#obiwan").appendTo($(".attack-button"));
    $("#boba-fett").appendTo($(".enemy-selection"));
    $("#aayla-secura").appendTo($(".enemy-selection"));
    $("#darth-maul").appendTo($(".enemy-selection"));
  });

  $("#boba-fett").click(function() {
    $("#boba-fett").appendTo($(".attack-button"));
    $("#obiwan").appendTo($(".enemy-selection"));
    $("#aayla-secura").appendTo($(".enemy-selection"));
    $("#darth-maul").appendTo($(".enemy-selection"));
  });

  $("#aayla-secura").click(function() {
    $("#aayla-secura").appendTo($(".attack-button"));
    $("#obiwan").appendTo($(".enemy-selection"));
    $("#boba-fett").appendTo($(".enemy-selection"));
    $("#darth-maul").appendTo($(".enemy-selection"));
  });

  $("#darth-maul").click(function() {
    $("#darth-maul").appendTo($(".attack-button"));
    $("#obiwan").appendTo($(".enemy-selection"));
    $("#boba-fett").appendTo($(".enemy-selection"));
    $("#aayla-secura").appendTo($(".enemy-selection"));
  });

/*Moves enemy to defending area */
  

     });
    }
}; //closing brace for startGame()


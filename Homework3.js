var player = {
  row: 0,
  col: 0,
  hitPoints: 100,
  prizeIndex: 0,
  prizes: [],
  prizeCount: 0
};

var count = 0;

var lastRow = player.row;
var lastCol = player.col;

var gameText = "Player Life: " + player.hitPoints + " ----- Prizes: " + player.prizes + " ----- Number of Prizes: " + player.prizeCount;
var positionText = " ----- Player Row: " + player.row + " ----- Player Column: " + player.col;


$(document).ready(function(){

  var checkWin = function(){
    if(player.hitPoints <= 0){
      count = 100;
    $("#game-messages").text("YOU HAVE DIED. Refresh the page to play again.");
    $("#game-messages").css("color", "red");
    }
  };

  var board =[

  // 0  [ 00, 01, 02, 03, 04, 05, 06, 07 ]
    [ "wall",
      "wall",
      "wall",
      "wall",
      "wall",
      "wall",
      "wall",
      "wall"
    ],

  // 1 [ 10, 11, 12, 13, 14, 15, 16, 17 ]
    [ "wall",
      "blank",
      "blank",
      "Infinity Gauntlet",     // Prize
      "blank",
      "blank",
      "blank",
      "wall"
    ],

  // 2 [ 20, 21, 22, 23, 24, 25, 26, 27 ]
    [ "wall",
      "blank",
      "blank",
      "blank",
      "blank",
      { challenge: true,
        monster: "Thanos",
        hitPoints: 45,
        runChallenge: function(){

          $("#game-messages").text("Thanos comes forth!");

          while(currentTile.hitPoints > 0) {

            var attack = confirm("Player Life: " + player.hitPoints +
                                "\nThanos Life: " + currentTile.hitPoints +
                                "\nClick \"OK\" to attack Thanos. Click \"cancel\" to defend.");
            if(attack){

              var random = Math.floor(Math.random()*10);
              if(random <= 7){
                currentTile.hitPoints -= 6;
                if(currentTile.hitPoints <= 0){
                  $("#game-messages").text("You have defeated Thanos! You have won the Power Stone prize!");
                  player.prizeCount++;
                  player.prizes[player.prizeIndex] = "Power Stone";
                  player.prizeIndex++;
                  board[2][5] = "blank";
                }
              }else{
                player.hitPoints -= 1;
                checkWin();
              }

            }else{

              var random = Math.floor(Math.random()*10);
              if(random > 7){
                currentTile.hitPoints -= 6;
                if(currentTile.hitPoints <= 0){
                  $("#game-messages").text("You have defeated Thanos! You have won the Power Stone prize!");
                  player.prizeCount++;
                  player.prizes[player.prizeIndex] = "Power Stone";
                  player.prizeIndex++;
                  board[2][5] = "blank";
                }
              }else{
                player.hitPoints -= 1;
                checkWin();
              }

            }
          }

        }

      },
      "blank",
      "wall"
    ],

  // 3 [ 30, 31, 32, 33, 34, 35, 36, 37 ]
    [ "wall",
      "Mjolnir",    // Prize
      "blank",
      { challenge: true,
        monster: "Dormammu",
        hitPoints: 35,
        runChallenge: function(){

          $("#game-messages").text("Dormammu has come to bargain!");

          while(currentTile.hitPoints > 0) {

            var attack = confirm("Player Life: " + player.hitPoints +
                                "\nDormammu Life: " + currentTile.hitPoints +
                                "\nClick \"OK\" to attack Dormammu. Click \"cancel\" to defend.");
            if(attack){

              var random = Math.floor(Math.random()*10);
              if(random <= 4){
                currentTile.hitPoints -= 5;
                if(currentTile.hitPoints <= 0){
                  $("#game-messages").text("You have defeated Dormammu! You have won the Eye of Agamotto prize!");
                  player.prizeCount++;
                  player.prizes[player.prizeIndex] = "Eye of Agamotto";
                  player.prizeIndex++;
                  board[3][3] = "blank";
                }
              }else{
                player.hitPoints -= 1;
                checkWin();
              }

            }else{

              var random = Math.floor(Math.random()*10);
              if(random > 4){
                currentTile.hitPoints -= 5;
                if(currentTile.hitPoints <= 0){
                  $("#game-messages").text("You have defeated Dormammu! You have won the Eye of Agamotto prize!");
                  player.prizeCount++;
                  player.prizes[player.prizeIndex] = "Eye of Agamotto";
                  player.prizeIndex++;
                  board[3][3] = "blank";
                }
              }else{
                player.hitPoints -= 1;
                checkWin();
              }

            }
          }

        }
      },
      "blank",
      "blank",
      "blank",
      "wall"
    ],

  // 4 [ 40, 41, 42, 43, 44, 45, 46, 47 ]
    [ "wall",
      "blank",
      "blank",
      "blank",
      "blank",
      "blank",
      "Tesseract",    // Prize
      "wall"
    ],

  // 5 [ 50, 51, 52, 53, 54, 55, 56, 57 ]
    [ "wall",
      "blank",
      { challenge: true,
        monster: "Ultron",
        hitPoints: 50,
        runChallenge: function(){

          $("#game-messages").text("Ultron approaches!");

          while(currentTile.hitPoints > 0) {

            var attack = confirm("Player Life: " + player.hitPoints +
                                "\nUltron Life: " + currentTile.hitPoints +
                                "\nClick \"OK\" to attack Ultron. Click \"cancel\" to defend.");
            if(attack){

              var random = Math.floor(Math.random()*10);
              if(random <= 3){
                currentTile.hitPoints -= 4;
                if(currentTile.hitPoints <= 0){
                  $("#game-messages").text("You have defeated Ulton! You have won the Mind Stone prize!");
                  player.prizeCount++;
                  player.prizes[player.prizeIndex] = "Mind Stone";
                  player.prizeIndex++;
                  board[5][2] = "blank";
                }
              }else{
                player.hitPoints -= 1;
                checkWin();
              }

            }else{

              var random = Math.floor(Math.random()*10);
              if(random > 3){
                currentTile.hitPoints -= 4;
                if(currentTile.hitPoints <= 0){
                  $("#game-messages").text("You have defeated Ulton! You have won the Mind Stone prize!");
                  player.prizeCount++;
                  player.prizes[player.prizeIndex] = "Mind Stone";
                  player.prizeIndex++;
                  board[5][2] = "blank";
                }
              }else{
                player.hitPoints -= 1;
                checkWin();
              }

            }
          }

        }
      },
      "blank",
      "blank",
      "blank",
      "blank",
      "wall"
    ],

  // 6 [ 60, 61, 62, 63, 64, 65, 66, 67 ]
    [ "wall",
      "blank",
      "blank",
      "blank",
      "Vibranium Shield",   // Prize
      "blank",
      "blank",
      "wall"
    ],

  // 7 [ 70, 71, 72, 73, 74, 75, 76, 77 ]
    [ "wall",
      "wall",
      "wall",
      "wall",
      "wall",
      "wall",
      "wall",
      "wall"
    ]

  ];


  while(board[player.row][player.col] !== "blank"){
    player.row = Math.floor(Math.random()*8);
    player.col = Math.floor(Math.random()*8);
  }

  var currentTile = board[player.row][player.col];

  var goalRow = 0;
  var goalCol = 0;

  while(board[goalRow][goalCol] !== "blank" || ((goalRow === player.row) && (goalCol === player.col))  ){
    goalRow = Math.floor(Math.random()*8);
    goalCol= Math.floor(Math.random()*8);
  }

  board[goalRow][goalCol] = "goal";

  var changeRed = function(row, col){
    var num = row*8;
    num += col;
    var x = $('#game-board td');
    x[num].style.backgroundColor = "red";
  }
  changeRed(player.row, player.col);

  var changeYellow = function(row, col){
    var num = row*8;
    num += col;
    var x = $('#game-board td');
    x[num].style.backgroundColor = "yellow";
  }

  var changeBlue = function(row, col){
    var num = row*8;
    num += col;
    var x = $('#game-board td');
    x[num].style.backgroundColor = "blue";
  }

  var changeGrey = function(row, col){
    var num = row*8;
    num += col;
    var x = $('#game-board td');
    x[num].style.backgroundColor = "grey";
  }

  var changeGreen = function(row, col){
    var num = row*8;
    num += col;
    var x = $('#game-board td');
    x[num].style.backgroundColor = "green";
  }

  var changePlayerInfo = function(){
    var row = player.row + 1;
    var col = player.col + 1;
    $("#player-info").text("Player Life: " + player.hitPoints
                            + " ----- Prizes: " + player.prizes
                            + " ----- Number of Prizes: " + player.prizeCount
                            + " ----- Player Row: " + row
                            + " ----- Player Column: " + col);
  }


  var actionLoop = function() {

    if(currentTile === "blank"){
      changeRed(player.row, player.col);
      $("#game-messages").text("You've moved onto a BLANK tile. Make your next move.");
    }

    if(currentTile === "Infinity Gauntlet"){
      changeYellow(player.row, player.col);
      $("#game-messages").text("You've picked up the Infinity Gauntlet prize! Make your next move.");
      board[1][3] = "blank";
      player.prizeCount++;
      player.prizes[player.prizeIndex] = "Infiinity Gauntlet";
      player.prizeIndex++;
    }

    if(currentTile === "Mjolnir"){
      changeYellow(player.row, player.col);
      $("#game-messages").text("You've MIRACULOUSLY picked up the Mjolnir prize! Make your next move.");
      board[3][1] = "blank";
      player.prizeCount++;
      player.prizes[player.prizeIndex] = "Mjolnir";
      player.prizeIndex++;
    }

    if(currentTile === "Tesseract"){
      changeYellow(player.row, player.col);
      $("#game-messages").text("You've picked up the Tesseract prize! Make your next move.");
      board[4][6] = "blank";
      player.prizeCount++;
      player.prizes[player.prizeIndex] = "Tesseract";
      player.prizeIndex++;
    }

    if(currentTile === "Vibranium Shield"){
      changeYellow(player.row, player.col);
      $("#game-messages").text("You've picked up the Vibranium Shield prize! Make your next move.");
      board[6][4] = "blank";
      player.prizeCount++;
      player.prizes[player.prizeIndex] = "Vibranium Shield";
      player.prizeIndex++;
    }

    if(currentTile.challenge){
      var fight = confirm("You've enountered an enemy! Do you want to fight the combatant? If NO, you will return to your pervious location.");

      if(fight){
        currentTile.runChallenge();
        changeBlue(player.row, player.col)
      }else{
        if(player.row !== lastRow){
          player.row = lastRow;
        }else{
          player.col = lastCol;
        }
      }
    }

    if(currentTile === "goal"){
      if(player.prizeCount >= 2){
        $("#game-messages").text("You have found the goal and beaten the game! Refresh the page to play again.");
        $("#game-messages").css("color", "green");
        changeGreen(player.row, player.col);
        $(":button").prop('disabled', true);
        count = 100;
      }else{
        $("#game-messages").text("You have found the goal BUT you don't have enough prizes to beat the game yet. You will be sent back to your last location to look for more prizes.");
        changeGreen(player.row, player.col);
        if(player.row !== lastRow){
          player.row = lastRow;
        }else{
          player.col = lastCol;
        }
      }
    }

  }



  $("#up").click(function(){

    if(player.row - 1 === 0){
      $("#game-messages").text("YOU'VE HIT A WALL! Try a different move.");
      changeGrey(player.row - 1, player.col);
    }else{
      lastRow = player.row;
      lastCol = player.col;
      player.row--;
      currentTile = board[player.row][player.col];
      actionLoop();
    }

    changePlayerInfo();
    checkWin();

  });

  $("#left").click(function(){

    if(player.col - 1 === 0){
      $("#game-messages").text("YOU'VE HIT A WALL! Try a different move.");
      changeGrey(player.row, player.col - 1);
    }else{
      lastRow = player.row;
      lastCol = player.col;
      player.col--;
      currentTile = board[player.row][player.col];
      actionLoop();
    }

    changePlayerInfo();
    checkWin();

  });

  $("#down").click(function(){

    if(player.row + 1 === 7){
      changeGrey(player.row + 1, player.col);
      $("#game-messages").text("YOU'VE HIT A WALL! Try a different move.");
    }else{
      lastRow = player.row;
      lastCol = player.col;
      player.row++;
      currentTile = board[player.row][player.col];
      actionLoop();
    }

    changePlayerInfo();
    checkWin();
  });

  $("#right-key").click(function(){

    if(player.col + 1 === 7){
      changeGrey(player.row, player.col + 1);
      $("#game-messages").text("YOU'VE HIT A WALL! Try a different move.");
    }else{
      lastRow = player.row;
      lastCol = player.col;
      player.col++;
      currentTile = board[player.row][player.col];
      actionLoop();
    }

    changePlayerInfo();
    checkWin();

  });

  $("#quit").click(function(){

    $("#game-messages").text("YOU HAVE QUIT the game. Refresh the page to play again.");
    $("#game-messages").css("color", "red");
    $(":button").prop('disabled', true);

  });


});

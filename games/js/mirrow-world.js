// Copyright: 2020 - Christina Zeller - All Rights Reserved.

// * Variables and Constants

// Navigation
const menu  = "menu";
const reset = "reset";
const prev  = "prev";
const next  = "next";
const bttns = "bttns";

var menuStatus  = false; /* not visible */
var bttnsStatus = false; /* visible */

// KeyBindings
const keyMenu     = "s";
const keyReset    = "e";
const keyNext     = "m";
const keyPrevious = "p";
const keyBttns    = "a";
const keyLeft     = "ArrowLeft";
const keyRight    = "ArrowRight";
const keyUp       = "ArrowUp";
const keyDown     = "ArrowDown";

// Visual

// CSS Style related
const sGoal      = "goal"
const sPin       = "pin";
const sTrap      = "trap"
const sObstacle  = "obstacle"
const sMirrow    = "mirrow"

const sLvlButton = "lvl-button";
const sBttnsBttn = "bttns-button";

const sHightlight = "highlight";
const sUnplayed   = "unplayed";

// HTML tag ids

const idMenuBar   = "menu-bar";
const idBoard     = "board";        /* id related to style */
const idBttnsBar  = "bttns-bar";
const idTopBar    = "top-bar";
const idBottomBar = "bottom-bar";

const idBarMoves    = "moves";
const idBarMaxMoves = "max-moves";
const idBarLvlName  = "level";

const idMenuTable   = "table-menu"; /* id related to style */

// Signs

const signPrevious = "&#129044;";
const signNext     = "&#129046;";
const signMenu     = "&#9776;"  ;
const signReset    = "&#128472;";
const signMoves    = "&#9634;"  ;

const unplayed = '?'; /* also logical used */

// Game

// Game Directions
const left  = "left";
const right = "right";
const up    = "up";
const down  = "down";

// Levels and Statistics
var numLvls = 31;
var userMvs = new Array(numLvls + 1).fill(unplayed);

// Current game state
var gs = { lvl: levels (0), mvs: 0 };

// * Levels

function levels (i) {
  if (i == 0) {
     var b0 = createBoardPart (4, [], [], 4, 3, normalMove);
     var b1 = createBoardPart (4, [], [], 7, 0, rightLeftMove);
     return { lvlId: i, rows: 2, boardParts: [b0, b1], moves: 4 };
   } else if (i == 1) {
     var b0 = createBoardPart (4, [], [8], 4, 0, normalMove);
     var b1 = createBoardPart (4, [], [], 11, 0, rightLeftMove);
     return { lvlId: i, rows: 3, boardParts: [b0, b1], moves: 5 };
   } else if (i == 2) {
     var b0 = createBoardPart (4, [], [4], 5, 0, normalMove);
     var b1 = createBoardPart (4, [], [], 6, 2, rightLeftMove);
     return { lvlId: i, rows: 3, boardParts: [b0, b1], moves: 3 };
   } else if (i == 3) {
     var b0 = createBoardPart (4, [], [], 6, 3, normalMove);
     var b1 = createBoardPart (4, [], [6], 2, 0, rightLeftMove);
     return { lvlId: i, rows: 3, boardParts: [b0, b1], moves: 8 };
   } else if (i == 4) {
     var b0 = createBoardPart (4, [], [], 5, 10, normalMove);
     var b1 = createBoardPart (4, [], [0, 3, 12, 15], 10, 5, rightLeftMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1], moves: 6 };
   } else if (i == 5) {
     var b0 = createBoardPart (4, [], [10, 13], 14, 0, normalMove);
     var b1 = createBoardPart (4, [], [0, 3, 9, 14], 15, 13, rightLeftMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1], moves: 13 };
   } else if (i == 6) {
     var b0 = createBoardPart (4, [5,6], [3, 5, 6], 14, 0, normalMove);
     var b1 = createBoardPart (4, [4,5,7], [4, 5, 7, 9], 15, 3, rightLeftMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1], moves: 9 };
   } else if (i == 7) { // one shot
     var b0 = createBoardPart (4, [], [4, 8, 9, 12, 13, 14], 10, 15, normalMove);
     var b1 = createBoardPart (4, [], [1, 2, 3, 6, 7, 11], 5, 10, rightLeftMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1], moves: 3 };
   } else if (i == 8) {
     var b0 = createBoardPart (5, [], [], 16, 10, normalMove);
     var b1 = createBoardPart (5, [], [], 11, 2, rightLeftMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 4 };
   } else if (i == 9) {
     var b0 = createBoardPart (5, [], [], 13, 2, normalMove);
     var b1 = createBoardPart (5, [], [], 17, 14, rightLeftMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 7 };
   } else if (i == 10) {
     var b0 = createBoardPart (5, [], [0,1,2,3,4], 11, 7, normalMove);
     var b1 = createBoardPart (5, [], [20, 21, 22, 23, 24], 12, 15, rightLeftMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 6 };
   } else if (i == 11) {
     var b0 = createBoardPart (5, [], [5,15], 2, 10, normalMove);
     var b1 = createBoardPart (5, [], [22, 24], 23, 10, rightLeftMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 12 };
   } else if (i == 12) { // three boards
     var b0 = createBoardPart (4, [], [], 15, 0, normalMove);
     var b1 = createBoardPart (4, [], [], 12, 3, rightLeftMove);
     var b2 = createBoardPart (4, [], [], 3, 12, downUpMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1, b2], moves: 6 };
   } else if (i == 13) {
     var b0 = createBoardPart (4, [], [11], 15, 0, normalMove);
     var b1 = createBoardPart (4, [], [13], 12, 3, rightLeftMove);
     var b2 = createBoardPart (4, [], [6], 3, 12, downUpMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1, b2], moves: 8 };
   } else if (i == 14) {
     var b0 = createBoardPart (4, [], [], 12, 0, normalMove);
     var b1 = createBoardPart (4, [], [9], 5, 0, rightLeftMove);
     var b2 = createBoardPart (4, [], [6, 10], 3, 12, downUpMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1, b2], moves: 12 };
   } else if (i == 15) {
     var b0 = createBoardPart (4, [], [], 10, 0, normalMove);
     var b1 = createBoardPart (4, [], [2], 11, 0, rightLeftMove);
     var b2 = createBoardPart (4, [], [8, 14], 12, 15, downUpMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1, b2], moves: 12 };
   } else if (i == 16) {
     var b0 = createBoardPart (5, [], [], 12, 0, normalMove);
     var b1 = createBoardPart (5, [], [7, 17], 12, 0, rightLeftMove);
     var b2 = createBoardPart (5, [], [11, 13], 12, 0, downUpMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1, b2], moves: 15 };
   } else if (i == 17) {
     var b0 = createBoardPart (4, [], [], 10, 0, normalMove);
     var b1 = createBoardPart (3, [], [0, 1, 2], 7, 5, rightLeftMove);
     var b2 = createBoardPart (3, [], [0, 1, 2], 7, 5, downUpMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1, b2], moves: 9 };
   } else if (i == 18) {
     var b0 = createBoardPart (4, [], [10, 13], 14, 0, normalMove);
     var b1 = createBoardPart (4, [], [0, 3, 9, 14], 15, 13, rightLeftMove);
     var b2 = createBoardPart (4, [], [4,5, 8], 0, 15, downUpMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1, b2], moves: 15 };
   } else if (i == 19) {
     var b0 = createBoardPart (4, [], [0, 3, 5, 12, 15], 4, 1, normalMove);
     var b1 = createBoardPart (4, [], [0, 3, 10, 12, 15], 2, 1, rightLeftMove);
     var b2 = createBoardPart (4, [], [0, 6, 9, 12, 15], 8, 13, downUpMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1, b2], moves: 10 };
   } else if (i == 20) {
     var b0 = createBoardPart (5, [], [0, 3, 5, 12, 15], 4, 1, normalMove);
     var b1 = createBoardPart (5, [], [0, 3, 10, 12, 15], 2, 1, rightLeftMove);
     var b2 = createBoardPart (5, [], [0, 6, 9, 12, 15], 8, 13, downUpMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1, b2], moves: 22 };
   } else if (i == 21) {
     var b0 = createBoardPart (5, [], [6, 12, 18], 24, 0, normalMove);
     var b1 = createBoardPart (5, [], [12, 16, 20], 21, 15, rightLeftMove);
     var b2 = createBoardPart (5, [], [1, 7, 13], 12, 2, downUpMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1, b2], moves: 22 };
   } else if (i == 22) { // traps
     var b0 = createBoardPart (4, [], [], 9, 0, normalMove);
     var b1 = createBoardPart (4, [6, 8, 11], [], 10, 3, rightLeftMove);
     return { lvlId: i, rows: 3, boardParts: [b0, b1], moves: 5 };
   } else if (i == 23) {
     var b0 = createBoardPart (4, [], [5,6], 2, 0, normalMove);
     var b1 = createBoardPart (4, [5], [], 10, 3, rightLeftMove);
     return { lvlId: i, rows: 3, boardParts: [b0, b1], moves: 15 };
   } else if (i == 24) {
     var b0 = createBoardPart (4, [], [6, 9], 12, 0, normalMove);
     var b1 = createBoardPart (4, [5, 7], [], 10, 3, rightLeftMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1], moves: 12 };
   } else if (i == 25) {
     var b0 = createBoardPart (4, [1, 5], [9], 15, 0, normalMove);
     var b1 = createBoardPart (4, [4, 5], [6], 9, 0, rightLeftMove);
     return { lvlId: i, rows: 4, boardParts: [b0, b1], moves: 16 };
   } else if (i == 26) {
     var b0 = createBoardPart (5, [5, 12, 13], [2, 17], 22, 0, normalMove);
     var b1 = createBoardPart (5, [1, 8, 9, 12], [22], 0, 4, rightLeftMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 17 };
   } else if (i == 27) {
     var b0 = createBoardPart (5, [], [6, 7, 8], 2, 12, normalMove);
     var b1 = createBoardPart (5, [0, 4, 6, 8], [17], 2, 12, rightLeftMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 14 };
   } else if (i == 28) {
     var b0 = createBoardPart (5, [6, 8, 16, 17, 18], [11, 13], 2, 12, normalMove);
     var b1 = createBoardPart (5, [6, 7, 8, 11, 16, 17, 18], [9], 2, 12, rightLeftMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 20 };
   } else if (i == 29) {
     var b0 = createBoardPart (5, [6, 11, 16], [8, 13, 18], 0, 24, normalMove);
     var b1 = createBoardPart (5, [5, 6, 7, 17, 18, 19], [8, 16], 24, 0, rightLeftMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 24 };
   } else if (i == 30) {
     var b0 = createBoardPart (5, [6, 8, 16, 18], [12], 17, 7, normalMove);
     var b1 = createBoardPart (5, [], [], 13, 11, rightLeftMove);
     return  { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 18 };
   } else if (i == 31) {
     var b0 = createBoardPart (5, [5, 6, 7, 8], [12, 17], 11, 0, normalMove);
     var b1 = createBoardPart (5, [2, 10, 14, 22], [0, 24], 7, 11, rightLeftMove);
     return { lvlId: i, rows: 5, boardParts: [b0, b1], moves: 20 };
   }
}

function createBoardPart (cols, tps, obs, gl, pn, mv) {
  return { columns  : cols
         , traps    : tps
         , obstacles: obs
         , goal     : gl
         , pin      : pn
         , move     : mv
         , isSolved : function (pn, gl) { return (pn == gl); }
         };
}

function normalMove (dir) {
  return dir;
}

function rightLeftMove (dir) {
       if (dir == left ) { return right; }
  else if (dir == right) { return left;  }
  else                   { return dir;   }
}

function downUpMove (dir) {
       if (dir == up  ) { return down; }
  else if (dir == down) { return up;   }
  else                  { return dir;  }
}

// minor design issues (font sizes, button sizes, ...)
// block movements when won

// * Game Logic

// ** Initialization

function initGame () {
  // initialize game parts
  barsHTML ();
  boardHTML ();
  menuHTML ();

  initInput ();
}

// ** Setup Input

function initInput () {
  document.addEventListener('keydown', userPressKey);
  userPressButton ();
}

// Key input
function userPressKey(e) {
       if (e.key == keyNext)     { userNext      (); }
  else if (e.key == keyPrevious) { userPrevious  (); }
  else if (e.key == keyReset)    { userReset     (); }

  else if (e.key == keyLeft)     { userMove (left ); }
  else if (e.key == keyRight)    { userMove (right); }
  else if (e.key == keyUp)       { userMove (up   ); }
  else if (e.key == keyDown)     { userMove (down ); }

  else if (e.key == keyMenu)     { userMenu      (); }
  else if (e.key == keyBttns)    { userBttns     (); }
}

// Button input
function userPressButton () {
  document.getElementById(next ).onclick = function () {userNext     ();};
  document.getElementById(prev ).onclick = function () {userPrevious ();};
  document.getElementById(reset).onclick = function () {userReset    ();};

  document.getElementById(left ).onclick = function () {userMove(left );};
  document.getElementById(right).onclick = function () {userMove(right);};
  document.getElementById(up   ).onclick = function () {userMove(up   );};
  document.getElementById(down ).onclick = function () {userMove(down );};

  document.getElementById(menu ).onclick = function () {userMenu     ();};
  document.getElementById(bttns).onclick = function () {userBttns    ();};
}

// ** Handle Input

// Board Moves

function userMove (action) {
  if (!isWon()) {
    gs.mvs++;

    makeMoves (action);

    updateMovesHTML ();
    actOnWon();
  }
}

function makeMoves (dir) {
  for (let boards = 0; boards < gs.lvl.boardParts.length; boards++) {
    makeMove (gs.lvl.boardParts[boards], gs.lvl.boardParts[boards].move(dir), createBoardPartId(boards));
  }
}

function makeMove (bp, bpDir, bpId) {
  // if not in a trap
  if (!(bp.traps.includes(bp.pin))) {
    // move left if possible
    if (bpDir == left && (bp.pin % bp.columns != 0) && !(bp.obstacles.includes(bp.pin - 1))) {
        movePinHTML (bpId, bp.pin, bp.pin - 1);
        bp.pin = bp.pin - 1;
    // move right if possible
    } else if (bpDir == right && (bp.pin % bp.columns != (bp.columns - 1)) && !(bp.obstacles.includes(bp.pin + 1))) {
        movePinHTML (bpId, bp.pin, bp.pin + 1);
        bp.pin = bp.pin + 1;
    // move up if possible
    } else if (bpDir == up && (bp.pin - bp.columns >= 0) && !(bp.obstacles.includes(bp.pin - bp.columns)) ) {
        movePinHTML (bpId, bp.pin, bp.pin - bp.columns);
        bp.pin = bp.pin - bp.columns;
    // move down if possible
    } else if (bpDir == down && (bp.pin + bp.columns < (gs.lvl.rows * bp.columns)) && !(bp.obstacles.includes(bp.pin + bp.columns))) {
        movePinHTML (bpId, bp.pin, bp.pin + bp.columns);
        bp.pin = bp.pin + bp.columns;
    }
  }
}

function actOnWon () {
  if (isWon()) {
    var addPerfect = (userMvs[gs.lvl.lvlId] == unplayed && gs.mvs <= gs.lvl.moves) || (userMvs[gs.lvl.lvlId] > gs.mvs && gs.mvs <= gs.lvl.moves);
    if (userMvs[gs.lvl.lvlId] == unplayed || userMvs[gs.lvl.lvlId] > gs.mvs) {
      userMvs[gs.lvl.lvlId] = gs.mvs;
    }
    wonHTML (addPerfect);
  }
}

function isWon () {
  var done = true;
  for (let boards = 0; boards < gs.lvl.boardParts.length; boards++) {
    var bp = gs.lvl.boardParts[boards];
    done = done && bp.isSolved(bp.pin, bp.goal);
  }
  return done;
}

// Game Navigation

function userNext () {
  if (numLvls > gs.lvl.lvlId) {
  nextLevel ();
  }
}

function userPrevious () {
  if (gs.lvl.lvlId > 0) {
  previousLevel();
  }
}

function userReset () {
  resetLevel ();
}

function userMenu () {
  toggleMenu ();
}

function userBttns () {
  toggleBttns ();
}

function startLevel(i) {
  // reset highlight
  resetWonHTML ();

  // level to play
  gs.lvl = levels(i);
  gs.mvs = 0;

  // update game parts
  boardHTML ();
  updateMovesHTML ();
  updateMaxMovesHTML ();
  updateLevelHTML ();
}

function nextLevel () {
  startLevel(gs.lvl.lvlId + 1);
}

function previousLevel () {
  startLevel(gs.lvl.lvlId - 1);
}

function resetLevel () {
  startLevel(gs.lvl.lvlId);
}

function toggleMenu () {
  if (document.getElementById(idMenuBar).style.display == "none") {
    menuStatus = true;
  } else {
    menuStatus = false;
  }
  updateMenuHTML ();
}

function toggleBttns () {
  if (document.getElementById(idBttnsBar).style.visibility == "hidden") {
    bttnsStatus = true;
  } else {
    bttnsStatus = false;
  }
  updateBttnsHTML ();
}

// * HTML

function barsHTML () {
  var html = "";
  html+= '<table><tbody>';
  html+= "<tr>";
  html+= '<td' + idHTML(idBarLvlName) + '>' + createLevelNameHTML () + '</td>';
  html+= '<td><button type="button"' + idHTML(prev ) + titleHTML(keyPrevious) + '>' + signPrevious + '</button></td>';
  html+= '<td><button type="button"' + idHTML(next ) + titleHTML(keyNext    ) + '>' + signNext     + '</button></td>';
  html+= '<td><button type="button"' + idHTML(menu ) + titleHTML(keyMenu    ) + '>' + signMenu     + '</button></td>';
  html+= '<td><button type="button"' + idHTML(reset) + titleHTML(keyReset   ) + '>' + signReset    + '</button></td>';
  html+= '<td' + idHTML(idBarMoves) + '>' + gs.mvs + '</td>';
  html+= '<td> / </td>';
  html+= '<td' + idHTML (idBarMaxMoves) + '>' + gs.lvl.moves + '</td>';
  html+= '</tr>';
  html+= '</tbody></table>';
  document.getElementById(idTopBar).innerHTML = html;

  html = '<table' + idHTML(idBttnsBar) + '><tbody>';
  html+= '<tr><td></td>';
  html+= '<td><button type="button"' + idHTML(up   ) + titleHTML(keyUp   ) + '>' + signMoves + '</button></td>';
  html+= '</tr><tr>';
  html+= '<td><button type="button"' + idHTML(left ) + titleHTML(keyLeft ) + '>' + signMoves + '</button></td>';
  html+= '<td id="lvlStatus" class="play"></td>';
  html+= '<td><button type="button"' + idHTML(right) + titleHTML(keyRight) + '>' + signMoves + '</button></td>';
  html+= '</tr><tr><td></td>';
  html+= '<td><button type="button"' + idHTML(down ) + titleHTML(keyDown ) + '>' + signMoves + '</button></td>';
  html+= '</tr>';
  html+= '</tbody></table>';
  document.getElementById(idBottomBar).innerHTML = html;
}

function menuHTML () {
  // levels
  var modVal = 8;
  var html = '';
  html+= '<table' + idHTML(idMenuTable) + '><tbody><tr>';
  for (let i = 0; i <= numLvls; i++) {
    // start a new row
    if (i % modVal == 0) {
      html+= '<tr>';
    }
    // create level button with statistics
    html+= '<td><button' + idHTML(createLvlButtonId (i)) + classHTML ((sLvlButton + ' ' + sUnplayed)) + 'onclick="startLevel(' + i + ')">';
    html+= createLvlButtonLabelHTML (i);
    html+= '</button></td>';

    // end a row
    if (i % modVal == (modVal - 1) || i == numLvls) {
      html+= '</tr>';
    }
  }
  html+= '</tbody><table>';

  // toggle arrow buttons button
  html+= '<br><center><button' + idHTML (bttns) + classHTML(sBttnsBttn) + titleHTML ((keyBttns + ': Use arrow keys instead of buttons.')) + '></button>';

  document.getElementById(idMenuBar).innerHTML = html;
  document.getElementById(idMenuBar).style.display="none";
}

function boardHTML () {
  var html = "";
  html+= '<tbody>';

  for (let row = 0; row < gs.lvl.rows ; row++) {
    html += "<tr>";
    for (let boards = 0; boards < gs.lvl.boardParts.length; boards++) {
      if (boards != 0 ) {
      html += createMirrow ();
      }
      html += boardPartHTML (createBoardPartId(boards), row, gs.lvl.boardParts[boards]);
    }
    html+="</tr>";
  }
  html+= "</tbody>";
  document.getElementById(idBoard).innerHTML = html;
}

function boardPartHTML (idStr, row, bp) {
  var html="";
  for (let cells = 0; cells < bp.columns; cells++) {
    var bIndex = (row * bp.columns) + cells;
    if (bIndex == bp.pin) {
       html += createPin (idStr, bIndex) ;
    } else if (bIndex == bp.goal) {
       html += createGoal (idStr, bIndex);
    } else if (bp.obstacles.includes(bIndex)) {
       html += createObstacle (idStr, bIndex);
    } else if (bp.traps.includes(bIndex)) {
       html += createTrap (idStr, bIndex);
    } else {
       html += createEmpty (idStr, bIndex);
    }
  }
  return html;
}

function movePinHTML (bpId, oldPin, newPin) {
  var tIdO = createFieldId (bpId, oldPin);
  var tIdN = createFieldId (bpId, newPin);
  document.getElementById(tIdO).classList.remove(sPin);
  document.getElementById(tIdN).classList.add(sPin);
}

function wonHTML (addPerfect) {
  var bttn = document.getElementById(createLvlButtonId(gs.lvl.lvlId));
  bttn.classList.remove(sUnplayed);
  if (addPerfect) {
    bttn.classList.add("perfect");
  }
  bttn.classList.add(sHightlight);
  bttn.innerHTML = createLvlButtonLabelHTML (gs.lvl.lvlId);
  document.getElementById(idMenuBar).style.display="block";

  var lvlSt = document.getElementById("lvlStatus");
  lvlSt.classList.remove("play");
  lvlSt.classList.add("solved");
}

function resetWonHTML () {
  document.getElementById(createLvlButtonId(gs.lvl.lvlId)).classList.remove(sHightlight);
  updateMenuHTML ();
  var lvlSt = document.getElementById("lvlStatus");
  lvlSt.classList.remove("solved");
  lvlSt.classList.add("play");
}

function updateMenuHTML () {
  if (menuStatus) {
    document.getElementById(idMenuBar).style.display="block";
  } else {
    document.getElementById(idMenuBar).style.display="none";
  }
}

function updateBttnsHTML () {
  if (bttnsStatus) {
    document.getElementById(idBttnsBar).style.visibility="visible";
  } else {
    document.getElementById(idBttnsBar).style.visibility="hidden";
  }
}

function updateMovesHTML () {
  document.getElementById(idBarMoves).innerHTML = gs.mvs;
}

function updateMaxMovesHTML () {
  document.getElementById(idBarMaxMoves).innerHTML = gs.lvl.moves;
}

function updateLevelHTML () {
  document.getElementById(idBarLvlName).innerHTML = createLevelNameHTML();
}

function createGoal (side, index) {
  tid = createFieldId(side, index);
  return '<td' + idHTML(tid) + classHTML (sGoal) + '></td>'
}
function createPin (side, index) {
  tid = createFieldId(side, index);
  return '<td' + idHTML(tid) + classHTML (sPin) + '></td>'
}
function createObstacle (side, index) {
  tid = createFieldId(side, index);
  return '<td' + idHTML(tid) + classHTML (sObstacle) + '></td>'
}
function createTrap (side, index) {
  tid = createFieldId(side, index);
  return '<td' + idHTML(tid) + classHTML (sTrap) + '></td>'
}
function createMirrow (side, index) {
  tid = createFieldId(side, index);
  return '<td' + idHTML(tid) + classHTML (sMirrow) + '></td>'
}
function createEmpty (side, index) {
  tid = createFieldId(side, index);
  return '<td' + idHTML(tid) + '></td>'
}

function createLvlButtonLabelHTML (i) {
    return (createLeveliNameHTML (i) + '<br>' + userMvs[i] + '/' + levels(i).moves);
}

function createLeveliNameHTML (i) {
  return ('#' + (i + 1));
}

function createLevelNameHTML () {
  return createLeveliNameHTML (gs.lvl.lvlId);
}

function createFieldId (side, index) {
  return side + '-' + index;
}

function createBoardPartId (index) {
  return 'b' + '-' + index;
}

function createLvlButtonId (i) {
  return "lvlBttn-" + i;
}

function idHTML (i) {
  return ' id="' + i + '" ';
}

function classHTML (i) {
  return ' class="' + i + '" ';
}

function titleHTML (i) {
  return ' title="' + i + '" ';
}

// Start Game

initGame ();

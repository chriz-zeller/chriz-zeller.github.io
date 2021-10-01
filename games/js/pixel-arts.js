// Copyright: 2021 - Christina Zeller - All Rights Reserved.

// * Variables and Constants

// Navigation

const createNew = "createNew";
const reset      = "reset";

// KeyBindings

const keyCreateNew = "m";
const keyReset     = "e";

// HTML tag ids

const idTopBar    = "top-bar";
const idBoard     = "board";
const idBottomBar = "bottom-bar";

const idRows = "rows";
const idCols = "cols";
const idReps = "reps";

const idPixWidth  = "pix-width";
const idPixHeight = "pix-height";

// Signs and Texts

const signCreateNew = "&#x2756;";
const signReset     = "&#128472;";

const txtRows = "Rows";
const txtCols = "Columns";
const txtReps = "Repetitions";

const txtPixWidth  = "Cell Width";
const txtPixHeight = "Cell Height";

// Changeable Values

const pixHTMLC = [];
let pixHTML = Array.from(pixHTMLC);

const rowsC = 44;
let rows = rowsC;
const minRows = 1;
// const maxRows = 100;
const stepRows = 1;

const colsC = 44;
let cols = colsC;
const minCols = 1;
// const maxCols = 100;
const stepCols = 1;

const repsC = 5;
let reps = repsC;
const minReps = 1;
// const maxReps = 100;
const stepReps = 1;

const pixWidthC = .5;
let pixWidth  = pixWidthC;
const minPixWidth = 0.1;
// const maxPixWidth = 100;
const stepPixWidth = 0.1;

const pixHeightC = .5;
let pixHeight = pixHeightC;
const minPixHeight = 0.1;
// const maxPixHeight= 100;
const stepPixHeight = 0.1;

// Game

function initGame () {
  barsHTML ();
  boardHTML ();

  initInput ();
}

// Setup Input

function initInput () {
  document.addEventListener('keydown', userPressKey);
  userPressButton ();
  userChangeValues ();
}

// Key input
function userPressKey(e) {
  if      (e.key == keyCreateNew) { userCreateNew (); }
  else if (e.key == keyReset    ) { userReset     (); }
}

function userPressButton () {
  document.getElementById(createNew).onclick = function () { userCreateNew (); };
  document.getElementById(reset    ).onclick = function () { userReset     (); };
}

function userCreateNew () {
  pixHTML = Array.from(pixHTMLC);
  boardHTML ();
}

function userChangeValues () {
  let inputRows = document.getElementById(idRows);
  let inputCols = document.getElementById(idCols);
  let inputReps = document.getElementById(idReps);

  let inputWidth  = document.getElementById(idPixWidth);
  let inputHeight = document.getElementById(idPixHeight);

  inputRows.oninput = function () { rows = inputRows.value; userChangeRCR (); };
  inputCols.oninput = function () { cols = inputCols.value; userChangeRCR (); };
  inputReps.oninput = function () { reps = inputReps.value; userChangeRCR (); };

  inputWidth.oninput  = function () { pixWidth  = inputWidth.value ; userChangeWidth  (); };
  inputHeight.oninput = function () { pixHeight = inputHeight.value; userChangeHeight (); };
}

function userReset () {

  pixHTML = Array.from(pixHTMLC);

  rows = rowsC;
  cols = colsC;
  reps = repsC;

  pixWidth  = pixWidthC;
  pixHeight = pixHeightC;

  initGame ();
}

function userChangeRCR () {
  boardHTML ();
}

function userChangeWidth () {
  // performance-issue
  let pixBoard = document.getElementById(idBoard);
  let pixels   = pixBoard.querySelectorAll('td');
  pixels.forEach(p => p.style.width = pixWidth + 'em');
}

function userChangeHeight () {
  // performance-issue
  let pixBoard = document.getElementById(idBoard);
  let pixels   = pixBoard.querySelectorAll('td');
  pixels.forEach(p => p.style.height = pixHeight + 'em');
}

// HTML

function barsHTML () {
  let html = "";
  html+= '<table><tbody>';
  html+= '<tr>';
  html+= '<td><button type="button"' + idHTML(createNew) + titleHTML(keyCreateNew) + '>' + signCreateNew + '</button></td>';
  html+= '<td><button type="button"' + idHTML(reset)     + titleHTML(keyReset    ) + '>' + signReset     + '</button></td>';
  html+= '</tr>';
  html+= '</tbody></table>';

  html+= '<table><tbody>';
  html+= '<tr><td>' + txtRows + '</td><td>' + txtCols + '</td><td>' + txtReps + '</td><td>' + txtPixWidth + '</td><td>' + txtPixHeight + '</td><td></tr>';
  html+= '<tr>';
  html+= '<td><input type="number" id="' + idRows   + '" min="' + minRows   + '" step="' + stepRows   + '" value="' + rows   + '"></td>';
  html+= '<td><input type="number" id="' + idCols   + '" min="' + minCols   + '" step="' + stepCols   + '" value="' + cols   + '"></td>';
  html+= '<td><input type="number" id="' + idReps   + '" min="' + minReps   + '" step="' + stepReps   + '" value="' + reps   + '"></td>';
  html+= '<td><input type="number" id="' + idPixWidth  + '" min="' + minPixWidth  + '" step="' + stepPixWidth  + '" value="' + pixWidth  + '"></td>';
  html+= '<td><input type="number" id="' + idPixHeight + '" min="' + minPixHeight + '" step="' + stepPixHeight + '" value="' + pixHeight + '"></td>';
  html+= '</tr>';
  html+= '</tbody></table>';
  document.getElementById(idTopBar).innerHTML = html;
}

function boardHTML () {
  let pixels = Array.from(pixHTML);
  let cells = [];
  for (let r = 0; r < (rows/reps); r++) {

    let completeRow  = [];

    for (let c = 0; c < (cols/reps); c++) {
      let cellHTML;
      let pixR;
      let pixG;
      let pixB;
      if (pixels.length == 0) {
         pixR = getColor();
         pixG = getColor();
         pixB = getColor();
         pixHTML.push([pixR, pixG, pixB]);
      } else {
        clrs = pixels.shift();
        pixR = clrs[0];
        pixG = clrs[1];
        pixB = clrs[2];
      }
      cellHTML = createCellHTML (pixR, pixG, pixB);

      for (let i = 0; i < reps; i++) {
        completeRow.push(cellHTML);
      }

    }

    for (let i = 0; i < reps; i++) {
      cells = cells.concat(completeRow);
    }
  }

  let html = "";
  html+= '<tbody>';

  for (let r = 0; r < rows; r++) {
    html += '<tr>';
    for (let c = 0; c < cols; c++) {
      html += cells.shift();
    }
    html += '</tr>';
  }

  html+= "</tbody>";
  document.getElementById(idBoard).innerHTML = html;
}

function createCellHTML (r, g, b) {
  let color = 'background-color: rgb(' + r + ',' + g + ',' + b + ');';
  let size  = 'width:' + pixWidth + 'em;' + 'height:' + pixHeight + 'em;';
  return '<td style="' + color + size + '"></td>';
}

function idHTML (i) {
  return ' id="' + i + '" ';
}

function titleHTML (i) {
  return ' title="' + i + '" ';
}

function getColor () {
  return Math.floor(Math.random() * 256);
}

initGame();

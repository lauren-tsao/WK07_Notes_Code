// word to animate in an array of letters
let word = "LOOP".split("");

// all letters in an array
let ALL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// the list of special letters
let letters = [];

// for being able to reset animation
let animationStartMillis = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(32);

  // for each letter of word:
  //   add special letter object to list
  for (let wi = 0; wi < word.length; wi++) {
    // correct letter and
    //   delay for showing correct letter
    letters.push({
      letter: word[wi],
      delay: int(random(1000, 2000)),
    });
  }

  // this is a list of objects,
  //   where which object has a delay and a letter
  print(letters);

  animationStartMillis = millis();
}

function draw() {
  background(220);

  // hold word to display this frame
  let mWord = "";

  // time since reset
  let elapsed = millis() - animationStartMillis;

  // iterate over letter lists
  for (let wi = 0; wi < letters.length; wi++) {
    if (elapsed > letters[wi].delay) {
      mWord += letters[wi].letter;
    } else {
      mWord += random(ALL_LETTERS);
    }
  }

  text(mWord, width / 2, height / 2);
}

function mousePressed() {
  animationStartMillis = millis();
}

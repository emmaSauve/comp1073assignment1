// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.getElementById("noun1"); //make a const and make it equal to the id of the same name
const verb = document.getElementById("verb");
const adjective = document.getElementById("adjective");
const noun2 = document.getElementById("noun2");
const setting = document.getElementById("setting");


// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");


// Constants for final buttons and p tags
const playback = document.getElementById("playback"); //button to playback story
const random = document.getElementById("random"); //button for random story
const story = document.getElementById("story"); 
const studentId = document.getElementById("studentId");
const reset = document.getElementById("reset"); //add reset button

// Variables for pre-defined arrays
var noun1array = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"]; // add all of the nouns/verbs/settings/adjectives and put them in the arrays
var verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];


// Variables for count to grab array elements
var noun1arrayCount = 0;
var verbArrayCount = 0;
var adjectiveArrayCount = 0;
var noun2ArrayCount = 0;
var settingArrayCount = 0;


var displayId = "1261276"; //my student id
/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    var noun1Element = noun1array[noun1arrayCount];
    choosenNoun1.textContent = noun1Element;

    // if-else to change count setting
    if (noun1arrayCount >= noun1array.length - 1){ 
        noun1arrayCount = 0; //reset count to 0 if the count has reached the last elemet of the array
    }
    else {
        noun1arrayCount++; //increment by 1
    }
    studentId.textContent = displayId; //display student id

}

function verb_on_click() {
    var verbElement = verbArray[verbArrayCount];
    choosenVerb.textContent = verbElement;

    // if-else to change count setting
    if (verbArrayCount >= verbArray.length - 1){
        verbArrayCount = 0;
    }
    else {
        verbArrayCount++;
    }
    studentId.textContent = displayId;

}

function adjective_on_click() {
    var adjectiveElement = adjectiveArray[adjectiveArrayCount];
    choosenAdjective.textContent = adjectiveElement;

    // if-else to change count setting
    if (adjectiveArrayCount >= adjectiveArray.length - 1){
        adjectiveArrayCount = 0;
    }
    else {
        adjectiveArrayCount++;
    }
    studentId.textContent = displayId;
}

function noun2_on_click() {
    var noun2Element = noun2Array[noun2ArrayCount];
    choosenNoun2.textContent = noun2Element;

    // if-else to change count setting
    if (noun2ArrayCount >= noun2Array.length - 1){
        noun2ArrayCount = 0;
    }
    else {
        noun2ArrayCount++;
    }
    studentId.textContent = displayId;
}

function setting_on_click() {
    var settingElement = settingArray[settingArrayCount];
    choosenSetting.textContent = settingElement;

    // if-else to change count setting
    if (settingArrayCount >= settingArray.length - 1){
        settingArrayCount = 0;
    }
    else {
        settingArrayCount++;
    }
    studentId.textContent = displayId;
}

// concatenate the user story and display
function playback_on_click() {

    var storyPlayback = choosenNoun1.textContent + " " + choosenVerb.textContent + " " + choosenAdjective.textContent + " " + choosenNoun2.textContent + " " + choosenSetting.textContent;
  
    story.textContent = storyPlayback; //display the story
    studentId.textContent = displayId; //display the student id
    
    
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    function getRandomIndex(arrayLength) { //function to randomize the position in the array
        return Math.floor(Math.random() * arrayLength);
    }

    // grab a random element in the array
    var randomNoun1 = noun1array[getRandomIndex(noun1array.length)];
    var randomVerb = verbArray[getRandomIndex(verbArray.length)];
    var randomAdjective = adjectiveArray[getRandomIndex(adjectiveArray.length)];
    var randomNoun2 = noun2Array[getRandomIndex(noun2Array.length)];
    var randomSetting = settingArray[getRandomIndex(settingArray.length)];

    //concatenate all of the random elemets together to form a sentence
    var randomStory = randomNoun1 + " " + randomVerb + " " + randomAdjective + " " + randomNoun2 + " " + randomSetting;

    story.textContent = randomStory; //display the random elements
    studentId.textContent = displayId; //display the student id

}

// function to clear the text content from the arrays and the student id
function reset_on_click(){
    choosenNoun1.textContent = ""; //chnage the text content to an empty string
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    story.textContent = "";
    studentId.textContent = ""; 
}

/* Event Listeners
-------------------------------------------------- */
//when the user clicks one of the story buttons
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click); // button to display the story after the buttons are clicked
random.addEventListener("click", random_on_click); // button for random
reset.addEventListener("click", reset_on_click); // button to reset the story
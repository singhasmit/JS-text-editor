/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
// updateText();
function updateText(){
  // CODE GOES HERE
  document.getElementById('text-output').innerText=document.getElementById('text-input').value;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem){
  //CODE GOES HERE
  document.getElementById('bold').classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  document.getElementById('italic').classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem){
    //CODE GOES HERE
    document.getElementById('underline').classList.toggle('active');
    document.getElementById('text-output').classList.toggle('underline');
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){
  // CODE GOES HERE
  document.getElementById('left-align').classList.remove('active');
  document.getElementById('right-align').classList.remove('active');
  document.getElementById('center-align').classList.remove('active');

  elem.classList.add('active');

  var text=document.getElementById('text-output');
  text.style.textAlign=alignType;

}
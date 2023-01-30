/** FUNCTIONS
 *  function: add
 *            subtract
 *            multiply
 *            divide
 *            clear the display
 *            equals
 */

const clearButton = document.getElementById("clear");
const display = document.getElementById("display");

clearButton.addEventListener("click", clear);

function clear() {
  display.innerHTML = "0";
}

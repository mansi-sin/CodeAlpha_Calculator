let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}
/*clear*/
function clearDisplay() {
    display.value = "";
}
/*Delete*/
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
/*Result*/
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

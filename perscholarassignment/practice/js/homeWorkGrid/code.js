var colors = ["black", "blue", "red", "green", "maroon", "teal", "gold"];
var currentColor = 0;
var boxes = document.getElementsByClassName("box")
function changeColor() {
    if (currentColor < colors.length) {
        for (var i = 0; i < boxes.length; i++) {
            var changedBox = boxes[i];
            changedBox.style.backgroundColor = colors[currentColor];
        }
        currentColor++
    }
}
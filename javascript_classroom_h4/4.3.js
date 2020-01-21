var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");

var index = 1;

box1.addEventListener("click", getColor);
box2.addEventListener("click", getColor);
box3.addEventListener("click", getColor);

function getColor() {
    if (index < 11) {
        index++;
    }
    else {
        index = 1;
    }

    this.style.backgroundImage = "url('img/color" + index + ".jpg')";
}
var slideholder = document.querySelector("#slideholder");
var index = 1;

slideholder.addEventListener("click", getMeme);

function getMeme() {
    if (index < 9) {
        index++;
    }
    else {
        index = 1;
    }

    slideholder.style.backgroundImage = "url('img/meme" + index + ".jpg')";
}


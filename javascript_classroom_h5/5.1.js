pics = document.getElementById("pics");
createPictureHolders();
createPantherImages();

function createPictureHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createPantherImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i+1);
        pantherImage = document.createElement("img");
        pantherImage.src = "../javascript_classroom_h5/img/blackpanther" + (i+1) + ".jpg";
        pantherImage.id = (i+1);
        pantherImage.addEventListener("click", function() {
            makeFavorite(this.id);
        });
        pictureHolders[i].appendChild(favorite);
        pictureHolders[i].appendChild(pantherImage);
    }
}


function makeFavorite(id) {
    console.log("Make me a favorite! Het gaat om panther " + id);
    notsofavorite = document.getElementsByClassName("favorite");

    for(var i = 0; i< notsofavorite.length; i++) {
        notsofavorite[i].style.backgroundImage = "none";
    }

    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('../javascript_classroom_h5/img/ig_like.png')";
}
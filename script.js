'use strict'

function showMessage(response) {
  if (response === "No") {
    document.getElementById("noButton").style.display = "none";

    const noName = document.getElementById("name");
    const noMessage = document.getElementById("question");
    noName.textContent = "no way";
    noMessage.textContent = "just say yes";
    
    const image = document.getElementsByClassName("image")[0];
    image.src = "img/dead.png";
    image.style.width = "375px";
    image.style.height = "250px";

    document.body.style.backgroundColor = "black";
  }
  if (response === "Yes") {

    document.getElementById("name").remove();
    document.getElementById("noButton").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "yay, i like cats too";
    
    const image = document.getElementsByClassName("image")[0];
    image.src = "img/dance.gif";
    image.style.width = "350px";
    image.style.height = "525px";
    document.body.style.backgroundColor = "#ff7f7f";

    document.getElementById("yesButton").remove();
  }
}


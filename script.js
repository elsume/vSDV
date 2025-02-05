'use strict'

function showMessage(response) {
  if (response === "No") {
    //hide no button
    document.getElementById("noButton").style.display = "none";

    // Update text content, show message, and change image source to "dance.gif"
    const noName = document.getElementById("name");
    const noMessage = document.getElementById("question");
    noName.textContent = "but pookie...";
    noMessage.textContent = "erm...please?";
    noMessage.style.display = "block";
    noMessage.style.fontStyle = "normal";
    
    const image = document.getElementsByClassName("image")[0];
    image.src = "img/dead.png";
    image.style.width = "375px";
    image.style.height = "250px";

    document.body.style.backgroundColor = "black";
    document.getElementById("yesButton").style.display = "block";
  }
  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("noButton").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "yipee! happy valentine's day <3";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    const image = document.getElementsByClassName("image")[0];
    image.src = "img/dance.gif";
    image.style.width = "350px";
    image.style.height = "525px";
    document.body.style.backgroundColor = "#ff7f7f";

  // Remove yes button
    document.getElementById("yesButton").remove();
  }
}


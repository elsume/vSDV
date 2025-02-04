'use strict'

function showMessage(response) {
  if (response === "No") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("noButton").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "erm...please?";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "img/dead.png";
    document.body.style.backgroundColor = "black";

    // Remove yes button
    //document.getElementById("yesButton").remove();
  }
  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("noButton").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "you're gay. see you (virtually) on the 14th pookie <3";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "img/dance.gif";

  // Remove yes button
    document.getElementById("yesButton").remove();
  }
}


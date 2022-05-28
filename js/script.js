$(document).ready(function () {
  $("#myForm").submit(function (event) {
    event.preventDefault();
    // business-logic
    let mySentence = $("#inputOne").val();
    let awaySentence = mySentence.charAt(0);
    let quSentence = mySentence.slice(0, 2);
    let remainingSentence = mySentence.slice(2);
    let aySentence = mySentence.slice(1);

    // userinterface
    let output;
    if (awaySentence === "a" || awaySentence == "e" || awaySentence === "i" || awaySentence === "o" || awaySentence === "u") {
      output = mySentence.concat("away");
    }
    else if (quSentence === "qu") {
      output = remainingSentence.concat(quSentence, "ay")
    }
    else {
      output =aySentence.concat(awaySentence,"ay")
    }
    $("#output").text(output)
  });

});
"use strict"
Office.initialize = function() {

    $('#button2').click(two);
};

function two() {
    console.log("loggedin");
    Office.context.ui.messageParent("loggedin");

}
function search() {
    var searchinput = document.getElementById("searchinput").value;

    window.open("https://www.google.com/search?q=" + searchinput);
}

function feelinglucky() {
    var searchinput = document.getElementById("searchinput").value;

    window.open("http://www." + searchinput + ".com")
}
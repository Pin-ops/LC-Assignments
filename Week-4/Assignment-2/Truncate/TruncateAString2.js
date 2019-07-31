
function shorten (pText, number ,extra) {
    if (pText.length>number) {
        var shorText = pText.slice(0, number) + extra;
        console.log(shorText);
    }
    else{
      console.log(text);
    }

}

var myText = "Peter Piper picked a peck of pickled peppers";

var extr = "..."

shorten(myText, 11, extr);
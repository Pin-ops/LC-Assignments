
function shortening (text, num ,ext) {
    if (text.length>num) {
      
        var shortText = text.slice(0, num) + ext;
        console.log(shortText);
    }
    else{
      console.log(text);
    }

}

var myText = "A-tisket a-tasket A green and yellow basket";

var extr = "..."

shortening(myText, 8, extr);

function shorten (pText,number,extra) {
  
    if (pText.length = number) {
        var shorText = pText.slice(0,1) + extra;
        console.log(shorText);
    }
    else{
      console.log(myText);
    }

}

var myText = "A-tisket a-tasket A green and yellow basket";

var extra = "..."

shorten(myText,1,extra);
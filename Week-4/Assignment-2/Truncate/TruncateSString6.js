
function truncateString(str, num) {
  
    if (str.length > num){
    console.log(str.slice (-1,0)+"...");
  }
  
  else{
    console.log(str);
  }
  }
  
  truncateString("Absolute Longer", -1);
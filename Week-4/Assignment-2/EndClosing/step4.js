function confirmEnding(str, target) {

    var sesame = str.substring(str.length - target.length); 

    return sesame == target;

  } 
  
  confirmEnding("Open sesame", "sesame");
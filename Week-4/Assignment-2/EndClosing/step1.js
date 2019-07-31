function end (str,target){
  
    var start= str.length-(target.length);
    
    if (str.substr(start,str.length) === target){
      
    return true;
  
  } else{
    
    return false;
  }
  
  } end("Bastian", "n");


  //OR 
  //  function confirmEnding(str,target){
    
    //return str.slice(str.length - target.length) ===target;
//}

//console.log(confirmEnding("Bastian", "n"));
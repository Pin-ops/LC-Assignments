function end (str,ending){
  
    var start= str.length-(ending.length);
    
    if (str.substr(start,str.length) === ending){
      
    return true;
  
  } else{
    
    return false;
  }
  
  } 
  end("Walking on water and developing software from a specification are easy if both are frozen", "specification");
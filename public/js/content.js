console.log("hii");
function FormatText()
  {
  var txt =document.getElementById("mytext").innerHTML;
   var matches = txt.match(/#\w+/g);
   if(matches==null)
    return;
    
   for(i=0;i<matches.length;i++)
   {
     txt=txt.replace(matches[i],"<b>"+ matches[i] +"</b>")
   }
   document.getElementById("mytext").innerHTML=txt;
  
  }
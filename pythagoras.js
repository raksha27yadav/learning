function calc(){

  var base=document.getElementById('b').value;
  var perp=document.getElementById('p').value;
  var base=parseInt(base,10)
  var perp=parseInt(perp,10)
  var len=0;
  len=(base*base)+(perp*perp)
  len=Math.sqrt(len)
  document.getElementById('res').innerHTML="length of third side is "+len
}


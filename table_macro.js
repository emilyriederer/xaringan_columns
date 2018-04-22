remark.macros.col_header = function (...titles) {
  
  var num_items = titles.length;
  var width = Math.floor(100/titles.length) - 2*0.5;
  
  var code =
'<center>'+
'<div class="multicolrow"' +
    'style="font-weight:bold; text-align:center; color:#ffffff;">';

  for(let i = 0; i < num_items; i++)
  code = 
    code +  
    '<div class="multicolhead"'+
    'style="float:left; background-color:#4B9CD3; padding: 1% 0.25% 1% 0.25%;'+
    'font-size: 80%;' +
    'margin: 1% 0.25% 1% 0.25%;' + 
    'width: ' + width + '%;">' + 
    titles[i] + 
    '</div>';


 code = code + 
'</div>' +
'</center>';

return code;

};

remark.macros.col_list = function (...bodies) {
  
  var code =
'<center>'+
'<div class="multicolrow" style="text-align:left;">' ;

  for(let i = 0; i<bodies.length; i++)
  code =
    code +
  '<div class="multicolcol" style="float:left; width:' + Math.floor(100/bodies.length) + '%;"> <li>' + 
  bodies[i] + 
  '</li> </div>';

code = code +
'</div>' +
'</center>';

return code;

};

remark.macros.col_row = function (...bodies) {
  
  var code =
'<center>'+
'<div class="multicolrow" style="text-align:left;">' ;

  for(let i = 0; i<bodies.length; i++)
  code =
    code +
  '<div class="multicolcol" style="float:left; width:' + Math.floor(100/bodies.length) + '%;">' + 
  bodies[i] + 
  '</div>';

code = code +
'</div>' +
'</center>';

return code;

};
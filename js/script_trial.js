var set=document.getElementById('set');
var background = document.getElementById('background');
var width = document.getElementById('width');
var height = document.getElementById('height');
var backgroundselected = "";
var widthselected="";
var heightselected="";


background.onclick=function(evt){
  //console.log(evt);
    for(i=0;i<background.length;i++){
     if (evt.path[0][i].selected == true){
        console.log(background[i].value);
        backgroundselected = background[i].value;
     }
   }
}

width.onclick=function(evt){
  //console.log(evt);
    for(i=0;i<width.length;i++){
     if (evt.path[0][i].selected == true){
        console.log(width[i].text);
        widthselected = width[i].text;
     }
   }
}

height.onclick=function(evt){
  //console.log(evt);
    for(i=0;i<height.length;i++){
     if (evt.path[0][i].selected == true){
        console.log(height[i].text);
        heightselected = height[i].text;
     }
   }
}

set.onclick = function(){
    //console.log(backgroundselected);
    //console.log(widthselected);
//console.log(document.body.childElementCount);
    /*for(j=0;j<document.body.children.length;j++){
        console.log(document.body.children[j]);
    if ((document.body.children[j]) == 'div'){
        console.log('div exists');
    }
}*/

//if (document.body.lastChild.innerHTML == ""){
    //console.log(document.body.lastChild.innerHTML);
    //element.document.body.removeChild(element);
//    document.body.replaceChild(newNode, oldNode);
// }

// adding a dynamic div
var element = document.createElement('div');
////Setting the dynamic element's background color, width and height
element.style.background = backgroundselected;
console.log(element.style.background);
element.style.width = widthselected;
console.log(element.style.width);
element.style.height = heightselected;
console.log(element.style.height);

//Appending the div element to the document's body
//document.body.appendChild(element);
document.body.replaceChild(element, element);
}
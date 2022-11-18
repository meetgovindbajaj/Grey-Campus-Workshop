const colors = ['#0099e5','#ff4c4c','#34bf49','#00a98f',
                '#be0027','#cf8d2e','#e4e932','#371777',
                '#0099e5','#ff4c4c','#34bf49','#00a98f',
                '#be0027','#cf8d2e','#e4e932','#371777']
const boxes =  document.getElementsByClassName('box');

var clickedBoxes=[];
const boxelen = boxes.length;
function assignColor(i){ 
    for(var i=0; i<boxelen; i++){   
        boxes[i].style.background=colors[i];
    }
}
function randomizeColor(i){
    for(var i=0; i<boxelen; i++){   
        boxes[i].style.order = parseInt(Math.random() * boxelen);
    } 
 }
function resetClickedArray(){
    clickedBoxes=[];
}
function freezeBox(objOfBox1,objOfBox2){
    objOfBox1.classList.add('freeze');
    objOfBox2.classList.add('freeze');
}
function chcekIfGameFininshed(){
    var frozenBox = document.querySelectorAll('.box.freeze');
    if(frozenBox.length==boxelen){
        alert("Press 'OK' to refresh the page");
        window.location.reload();
    }
}
function checkClickBoxes(){
    if(clickedBoxes.length==2){
        var idOfBox1 = clickedBoxes[0];
        var idOfBox2 = clickedBoxes[1];
        var objOfBox1 = document.getElementById(idOfBox1);
        var objOfBox2 = document.getElementById(idOfBox2);
        if(objOfBox1.style.background==objOfBox2.style.background){
            freezeBox(objOfBox1,objOfBox2);
            chcekIfGameFininshed();
        }
        else{
            hideBoxesAfterSomeTime(objOfBox1,objOfBox2);
            objOfBox1,objOfBox2
        }
        resetClickedArray();
    }
}
 function hideBoxesAfterSomeTime(objOfBox1,objOfBox2){
    setTimeout(function(){
        objOfBox1.classList.add('hideColor');
        objOfBox2.classList.add('hideColor');
    },350)  
}
function clickhandler(){            
    var clickBox = this;
    if(clickBox.classList.contains('freeze')==false){
        clickBox.classList.remove('hideColor');
        clickedBoxes.push(clickBox.id);        
        checkClickBoxes();                         
    }
}
function addId(i){
    boxes[i].id = 'box' + i;
}
function handeleClick(i){
    boxes[i].addEventListener('click',clickhandler);
}
function init(){
    for(var i=0; i<boxelen; i++){                
        addId(i);
        randomizeColor(i);
        handeleClick(i);
        assignColor(i);
    }
}
init()
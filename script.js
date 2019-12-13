function generateDiv() {
    let number = document.getElementById("numberBox").valueAsNumber
    var father = document.getElementById("container");
    
    if(document.getElementById("boxContainer") != undefined){
        father.removeChild(document.getElementById("boxContainer"));
    }
    
    var boxContainer = document.createElement("div");
    boxContainer.id = "boxContainer";
    boxContainer.className = "mainBox";
    father.appendChild(boxContainer);

    for (let i = 0; i < number**2; i++) {
        let block = document.createElement("div");
        
        block.style = "background-color:white;" + sizeBox(boxContainer, number)
        //block.style = generateColor() + sizeBox(boxContainer, number)
        
        block.addEventListener("mouseover", function changeColor(){
            block.style = generateColor() + sizeBox(boxContainer, number)})

        boxContainer.appendChild(block);
    }
}

function sizeBox(box, number){
    return "width: " + box.clientWidth/number +"px; height: "+ 
    box.clientHeight/number +"px;";
}

function generateColor() {
    var red, blue , green;
    red  = Math.floor(Math.random() * 256);  
    blue  = Math.floor(Math.random() * 256);  
    green  = Math.floor(Math.random() * 256);  

    var string = "background-color: rgb(" + red + " , " + green + " , " + blue + " ) ;" ;
    return string
}
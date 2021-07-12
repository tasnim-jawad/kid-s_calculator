function calculats(num1,num2){
    console.log(`sum = ${num1+num2}`);
    console.log(`sub = ${num1-num2}`);
    console.log(`mult = ${num1*num2}`);
    console.log(`div = ${num1/num2}`);

    document.getElementById("myList").innerHTML ='';

    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(`sum = ${num1+num2}`);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(`sub = ${num1-num2}`);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(`mult = ${num1*num2}`);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(`div = ${num1/num2}`);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);
}



function sum(num1,num2){
    console.log(`sum = ${num1+num2}`);

    document.getElementById("myList").innerHTML ='';

    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(`sum = ${num1+num2}`);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);
}
function sub(num1,num2){
    console.log(`sub = ${num1-num2}`);

    document.getElementById("myList").innerHTML ='';

    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(`sub = ${num1-num2}`);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);
}
function mult(num1,num2){
    console.log(`mult = ${num1*num2}`);

    document.getElementById("myList").innerHTML ='';

    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(`mult = ${num1*num2}`);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);
}
function divi(num1,num2){
    console.log(`div = ${num1/num2}`);

    document.getElementById("myList").innerHTML ='';

    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(`div = ${num1/num2}`);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);
}

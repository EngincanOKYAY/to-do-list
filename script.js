const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask(){
    if (inputBox.value ===''){
        alert("You must write something!");
    }

    else{
        let li =document.createElement("li");
        li.innerHTML= inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"; // küçük çarpı yani kapatma işareti oluşturur
        li.appendChild(span);
    }
    inputBox.value="";
}

listcontainer.addEventListener("click", function(e)){
    
}
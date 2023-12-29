let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    item.style.fontSize="20px";
    item.fontWeight="600";
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.classList.add("x");
    delBtn.style.borderRadius="50%";
    delBtn.style.padding="5px";
    delBtn.style.backgroundColor="rgb(9,9,144)";
    delBtn.style.color="white";
    

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
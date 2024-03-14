let btns=document.querySelectorAll("button");

document.getElementById('btn1').addEventListener("click",function(){
displaytext("You clicked Follow button:)");
});

document.getElementById('btn2').addEventListener("click",function(){
    displaytext("You clicked Message button:)");
});

function displaytext(text){
    document.getElementById('displayText').textContent=text;
}

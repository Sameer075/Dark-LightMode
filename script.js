var mode=document.querySelector("#mode");
var flag=0;
mode.addEventListener('click',function(){
    var theme=document.querySelector("#main");
    
    if(flag==0){
        theme.style.backgroundColor="#000";
        document.querySelector("#mode").style.backgroundColor="#fff";
        document.querySelector("h3").innerText="Light";
        document.querySelector("h3").style.color="#000";
        flag=1;
    }
    else if(flag==1){
        theme.style.backgroundColor="#fff";
        flag=0;
        document.querySelector("#mode").style.backgroundColor="#000";
        document.querySelector("h3").innerText="Dark";
        document.querySelector("h3").style.color="#fff";
    }
        
});
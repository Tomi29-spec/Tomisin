var num = document.getElementById("h1")
var setinterval = setInterval(function(){
     if(Number(num.innerHTML)==100){
        num.innerHTML += "";
     }else{
     Number(num.innerHTML++)
     }

const date = new Date();
num.innerHTML = date.toLocaleTimeString()
},1000)


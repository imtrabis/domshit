var a = document.querySelector("button")
var b = document.querySelector("h1")
var c = 0
var d = document.querySelector("body")
var input = document.querySelector("input")
var span = document.querySelector("span")



a.addEventListener("click", function(){
    if(c==0){
    b.innerHTML = "hello-world"
    b.style.color = "red"
    d.style.backgroundColor = "white"
    c=1

}
  else if(c==1){b.style.color = "purple"
       b.innerHTML = "bro tere se nhi hone wala submit"
       c=2
}
  else if(c==2){b.style.color = "green"
       b.innerHTML = "Mat kar bro nhi hone wala tere se"
       c=3
}
   else if(c==3){b.style.color = "blue"
        b.innerHTML = "Behen ke lawde last time bol rha hu mat kar"
        c=4
}
   else if(c==4){b.style.color = "white"
        b.innerHTML = "Maa chuda behen chod me nhi khel rha "
        d.style.backgroundColor = "black"
        c=5
}
    else if(c==5){b.style.color = "red"
        b.innerHTML = "chal fir se karte hain "
        d.style.backgroundColor = "blue"
        c=0
}
})


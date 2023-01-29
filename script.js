var btnList= document.querySelectorAll(".btn")
var count=0;
var counter= document.querySelector(".count").innerHTML;

for (let i = 0; i < btnList.length; i++) {   
    btnList[i].addEventListener("click",function(){
               
        switch (this.classList[2]) {
            case "reset":
                count=0;
                document.querySelector(".count").innerHTML=count;
                document.querySelector(".count").style.color="grey";
                break;
            case "addition":
                count++;
                document.querySelector(".count").innerHTML=count;
                break;
            case "subtraction":
                count--;
                document.querySelector(".count").innerHTML=count;
                break;
        
            default:
                break;
        }
        if (count===0) {
            document.querySelector(".count").style.color="grey";            
        }if (count>0) {
            document.querySelector(".count").style.color="green";            
        }if (count<0) {
            document.querySelector(".count").style.color="red";
        }
        console.log(count)
    })   
}
document.addEventListener("keypress",function(event){
    switch (event.key) {
        case "+":
            count++;
            document.querySelector(".count").innerHTML=count;           
            break;
        case "-":
            count--;
            document.querySelector(".count").innerHTML=count;
            break;
        case "0":
            count=0;
            document.querySelector(".count").innerHTML=count;
            document.querySelector(".count").style.color="grey";

    
        default:
            break;
    }
    if (count===0) {
        document.querySelector(".count").style.color="grey";            
    }if (count>0) {
        document.querySelector(".count").style.color="green";            
    }if (count<0) {
        document.querySelector(".count").style.color="red";
    }

})

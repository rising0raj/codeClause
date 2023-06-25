let [ms , sec , min ,hr]=[0,0,0,0]
let timeRef= document.querySelector(".timer-display")
let int = null

document.getElementById("start-timer").addEventListener("click",()=>{
    if(int !=null){
        clearInterval(int)
    }
    int = setInterval(displayTimer,10);
});

document.getElementById("pause-timer").addEventListener("click",()=>{
    clearInterval(int)
});

document.getElementById("reset-timer").addEventListener("click",()=>{
    clearInterval(int);
    [ms , sec , min ,hr]=[0,0,0,0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer(){
    ms +=10;
    if(ms == 1000)
    {
        ms=0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
            if(min== 60){
                min=0;
                hr++;
            }
        }
    }

    let h =hr <10 ? "0"+ hr :hr;
    let m =min <10 ? "0"+ min :min;
    let s =sec <10 ? "0"+ sec :sec;
    let mss = ms<10? "00"+ms : ms<100 ? "0"+ms:ms;
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${mss}`;

}
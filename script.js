
setInterval(()=>{
    let currentDate=new Date()
let SetCurrentTime=document.querySelector("h1");
SetCurrentTime.innerText=currentDate.toLocaleTimeString();
},1000)
let meridiem=document.querySelector("#meridiem")
function setAlarm(){
        let hrs=h.value
        let min=m.value
        meridiem.innerHTML="Alarm At:"+hrs +":"+min+":"+"00"
        let sound=document.querySelector("#alarmSound")
let checkInterval=setInterval(()=>{
    let hour=h.value;
          let minute=m.value;
          let currentDate=new Date()
            if(hour==currentDate.getHours()){
            if(minute==currentDate.getMinutes()){
                 sound.play()
                // console.log("match")
                clearInterval(checkInterval)

             }
            }
},1000)
}

let set_alarm=document.querySelector("button")
set_alarm.addEventListener("click",()=>{
    setAlarm();
})
// let sound=document.querySelector("#alarmSound")
// let checkInterval=setInterval(()=>{
//     let hour=h.value;
//           let minute=m.value;
//           let currentDate=new Date()
//             if(hour==currentDate.getHours()){
//             if(minute==currentDate.getMinutes()){
//                  sound.play()
//                 // console.log("match")
//                 clearInterval(checkInterval)

//              }
//             }
// },1000)


    

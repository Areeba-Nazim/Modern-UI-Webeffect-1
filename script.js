let frames = document.querySelectorAll(".frame")
let cursor = document.querySelector(".circle")

const lerp = (x, y, a) => x * (1 - a) + y * a;


frames.forEach((frame)=>{
   frame.addEventListener("mousemove" , (dets)=>{

      let dimens = frame.getBoundingClientRect();
      let fstart =  dimens.x ;
      let fend = dimens.width + dimens.x;
   
      let fvalue = gsap.utils.mapRange(fstart , fend , 0 , 1 , dets.clientX);
   
   
      gsap.to(cursor , {
         scale: 8,
         duration : .3,
         ease : Expo
      })
   
      gsap.to(frame.children , {
         color : "#fff",
         duration: .3,
         y: "0"
      })
   
      gsap.to(frame.children, {
         x:lerp(-50 , 50 , fvalue),
         duration: .3
      })
   })
   frame.addEventListener("mouseleave" , ()=>{
      gsap.to(cursor , {
         scale: 1,
         duration : .3,
         ease : Power2
      })
      gsap.to(frame.children , {
         color : "#000",
         duration: .3,
         y :"-5vw"
      })
      gsap.to(frame.children, {
         x:0,
         duration: .3
      })
   })
})

window.addEventListener("mousemove" , (dets)=>{
   gsap.to(cursor , {
      x : dets.clientX ,
      y : dets.clientY ,
      duration : .4 ,
      ease : Expo
   })
})


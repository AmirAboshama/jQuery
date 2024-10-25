/// <reference types="./@types/jquery"/>

 $(function(){
    let widthboxcolor =$(".sidebar").outerWidth(true)
    $(".sidebar").animate({"left":-widthboxcolor},0) 
    $(".iconSlidebar").animate({"left":0},0 )
    // $("#p-singer2").hide(1000)
    // $("#p-singer3").hide(1000)
    // $("#p-singer4").hide(1000)

})
 

/* ////////////// start sliders///////////////////////*/


$("#singer1").on("click",function(){
  $("#p-singer1").slideToggle(1000)
 $("#p-singer2").slideUp(1000)
 $("#p-singer3").slideUp(1000)
 $("#p-singer4").slideUp(1000)
})
$("#singer2").on("click",function(){
  $("#p-singer2").slideToggle(1000)
  $("#p-singer1").slideUp(1000)
  $("#p-singer3").slideUp(1000)
  $("#p-singer4").slideUp(1000)
})
$("#singer3").on("click",function(){
  $("#p-singer3").slideToggle(1000)
  $("#p-singer2").slideUp(1000)
  $("#p-singer1").slideUp(1000)
  $("#p-singer4").slideUp(1000)
})
$("#singer4").on("click",function(){
  $("#p-singer4").slideToggle(1000)
  $("#p-singer2").slideUp(1000)
  $("#p-singer3").slideUp(1000)
  $("#p-singer1").slideUp(1000)
})
/* ////////////// end close slider///////////////////////*/

/* ////////////// start close icon///////////////////////*/

$("aside .close").on("click",function(){
    let widthboxcolor =$(".sidebar").outerWidth(true)

    $(".sidebar").animate({"left":-widthboxcolor},1000)
    if($(".iconSlidebar").css("left")== `0px`){
        $(".iconSlidebar").animate({"left":widthboxcolor},1000)
    }else{
        $(".iconSlidebar").animate({"left":0},1000)
    
    } 
    })

/* ////////////// close close icon///////////////////////*/


/* ////////////// start close sidebar///////////////////////*/

$(".iconSlidebar").on("click",function(){
console.log("hello");
let widthboxcolor =$(".sidebar").outerWidth(true)

if($(".sidebar").css("left")== `0px`){
    $(".sidebar").animate({"left":-widthboxcolor},1000)
}else{
    $(".sidebar").animate({"left":0},1000)

} 
if($(".iconSlidebar").css("left")== `0px`){
    $(".iconSlidebar").animate({"left":widthboxcolor},1000)
}else{
    $(".iconSlidebar").animate({"left":0},1000)

} 
})

/* ////////////// end close sidebar///////////////////////*/
/* ////////////// start counter sidebar///////////////////////*/

// Set the launch date (adjust as needed)
const launchDate = new Date("2025-06-15T00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "LAUNCHED!";
    }
}, 1000);


/* ////////////// end close sidebar///////////////////////*/
var maxCount=100
let countNymber =$("#numer-Count .adad h4")

const textereaInput =$("#text-erea")

 textereaInput.on("keydown",function(e){
 if(maxCount==0&&e.key!=`Backspace`||maxCount==99&&e.key==`Backspace`){
    e.preventDefault();
    return
 }
 if(e.key==`Backspace`){
    maxCount=maxCount+1
    countNymber.html(maxCount+1)
 }else{
    maxCount=maxCount-1
    
    countNymber.html(maxCount)

 }
  

}) 
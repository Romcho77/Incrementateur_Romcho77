let followersTwitter = 12000
let followerYoutube = 5000
let followerFacebook = 7500

let inc1 = 111
let inc2 = 51
let inc3 = 71

document.addEventListener("DOMContentLoaded", ()=>{
  let divs = document.querySelectorAll(".numbers")
  let tabFollowers = [followersTwitter,followerYoutube,followerFacebook]
  let tabIncrementation = [inc1,inc2,inc3]
  divs.forEach((element,i) => {
    let nombreBase = 0
    setInterval(()=>{
      nombreBase += tabIncrementation[i]
      element.innerText = nombreBase
      if(nombreBase >= tabFollowers[i]){
        element.innerText = tabFollowers[i]
      }
    },10)
  });

})




// function animate(elem, start, end, maxDuration) {
//   elem = elem || document.querySelector(`#value`);
    
//   if (start < end) {
//     elem.innerText =  !elem.innerText ? start : start + 1;
//     return setTimeout( () =>
//       animate( elem, start + 1, end, maxDuration ), 
//         Math.floor( (Math.random() * maxDuration) ) );
//   }
// }
// animate(document.querySelector(`#value`), 5, 12000, 0.1);
// animate(document.querySelector(`#value2`), 5, 5000, 200);
// animate(document.querySelector(`#value3`), 5, 7500, 0.01);


/**
* Increment value with random intervals.
* @param {string} id - Id of DOM Element.
* @param {number} start - Start counter value. Applied immediately.
* @param {number} end - End counter value.
* @duration {number} duration - Max duration of one iteration in ms.
*/
// function animateValue(id, start, end, duration) {
//     let current = start;
//     const obj = document.getElementById(id);
//     obj.innerHTML = current; // immediately apply start value
//     const setIncrOut = () => {
//       let time = Math.random() * duration;
//       setTimeout(function () {
//         if (current < end) {
//           current += 1;
//           obj.innerHTML = current;
//           setIncrOut(time);
//         }
//       }, time);
//     }
  
//     setIncrOut();
//   }
  
// animateValue("#value", 100, 1001, 1000);
// animateValue("#value2", 100, 1001, 1000);
// animateValue("#value3", 100, 1001, 1000);
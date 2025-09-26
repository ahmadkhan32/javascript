// console.log(document.body.firstChild);

// a = document.body.firstChild;
// console.log(a.parentNode);
// console.log(a.parentElement);

// document.getElementById('btn').onclick = function() {
//     var buttonValue = this.value; // Get the value of the clicked button
//     document.getElementById('displayArea').innerText = buttonValue; // Display the value in the paragraph
// };



  // DOM Traversal Example
        // DOM Traversal Example
    // console.log(document.body.firstChild);
    // let a = document.body.firstChild;
    // console.log(a.parentNode);
    // console.log(a.parentElement);


  //   document.getElementById("myButton").onclick = function () {
  // var buttonValue = this.value; // Get button value

  // 1. Show alert
//   alert("Button clicked! Value is: " + buttonValue);

//   document.getElementById("displayH1").innerText = "First Website - " + buttonValue;
//   document.getElementById("displayP1").innerText = "Second Website - You clicked: " + buttonValue;
// };


// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// const alert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     alert('Nice, you triggered this alert message!', 'success')
//   })
// }

// let ctitle = document.getElementById("firstcardtitle");
// ctitle.style.color = "red";

// let ctitle = document.getElementById("firstcardtitle");
// ctitle.style.color = "red";

// let ctitle = document.querySelectorAll(".card-title");
// ctitle2[1].style.color = "blue";
// ctitle2[2].style.color = "green";
// ctitle2[3].style.color = "orange";
// console.log(ctitle);

// let a = new Date();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();
// let d = a.getDay();
// console.log(h, m, s, d);

// function loadscript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function() {
//         console.log("Loaded script with SRC: " + src )
//     }
//     document.body.appendChild(script);
// }

// loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');

// function hello () {
//   alert("Hello World");
// }

// function goodmorning (error, src){
//   if (error) {
//     console.log(error);
//     sendEmergencyMessagetoCeo();
//     return;
//   }
//   alert("Good Morning" + src);
// }
// loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', goodmorning);

//Chinto

console.log("Hello World");
setTimeout(function() {
   console.log("Hello World after 2 seconds");
}, 2000);
console.log("My name is " + "John Doe")
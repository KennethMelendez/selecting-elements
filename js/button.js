var changeBg = document.querySelector('#change-bg');
var colors = ['pink','green','blue','purple','red'];
var clicks = 0;

                //must have event&function
changeBg.addEventListener('click',function() {
  changeBg.style.backgroundColor = colors[clicks];
  clicks++;
  if (clicks === colors.length) {
    clicks = 0;
  }

})



//Optional below


// function changeBtnColor() {
//   changeBg.style.backgroundColor = colors[clicks];
//   clicks++;
//   if (clicks === colors.length) {
//     clicks = 0;
//   }
// }
//
// changeBg.addEventListener('click',changeBtnColor);

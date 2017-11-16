//document.querySelector will return a single element that is the first that is matching the criteria within the ()


/*
  //can add to h1
  document.querySelector('#header').textContent += 'hello world';

*/
document.querySelector('#header').textContent = 'hello world';


/*

//will only return ONE element
document.querySelector('.p-styles').textContent = 'bahuh?';


*/


//selects all
// document.querySelectorAll('.p-styles').textContent = 'bahuh?';


//can create variables
// var header = document.querySelector('#header');
// header.textContent = 'hello world';

//document.querySelectorAll will return a array like data structure which contains all elements that match the criteria passed with the ()
var pStyles = document.querySelectorAll('.p-styles');

//loops are awesome also remember PEMDAS
for (var x = 0; x < pStyles.length; x++){
  pStyles[x].textContent = 'I am p-styles ' + (x + 1);
}


//selects all the li tag!!! WOO
//lis contains the array
var lis = document.querySelectorAll('li');

for (var x = 0; x < lis.length; x++){
  lis[x].textContent = x + 1;
}


//querySelector 1
//querySelectorAll brings back a list


// Another way to select a element by its ID is document.getElementById


//kurt still recommends querySelector better (much faster)
document.getElementById('second-header').textContent = 'something';

//var is the array AWESOMES IS THE ARRAY
var awesomes = document.getElementsByClassName('awesome');

for(var x = 0; x < awesomes.length; x++) {
  awesomes[x].textContent = x + 1;
}

//get elements make a look of the array
var h3s = document.getElementsByTagName('h3');

for(var x = 0; x < h3s.length; x++) {
  h3s[x].textContent = 'That is it';
}

//P.S kurt recommends to stick with querySelector and querySelectorAll to avoid mistakes

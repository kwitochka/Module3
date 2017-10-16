
var arr = [];
var submitButton = document.querySelector('#submit');
var text = document.querySelector('#new');
submitButton.addEventListener('click', createArray);

function createArray(){
    var index = document.querySelector('.index');
    var value = document.querySelector('.value');
    var readyIndex = parseInt(index.value);
    arr[readyIndex] = value.value;
    text.innerHTML = arr;
};

//Delete last element 
var popButton = document.querySelector('.pop');
popButton.addEventListener('click', function(){
    arr.pop(); 
    text.innerHTML = arr;
});

//Delete first element
var shiftButton = document.querySelector('.shift');
shiftButton.addEventListener('click', function(){
    arr.shift();
    text.innerHTML = arr;
});

//Add an element to the tail 
var pushButton = document.querySelector('.push');
pushButton.addEventListener('click', function(){
    var value = document.querySelector('.value');
    arr.push(value.value);
    text.innerHTML = arr;
});

//Add first element 
var unshiftButton = document.querySelector('.unshift');
unshiftButton.addEventListener('click', function(){
    var value = document.querySelector('.value');
    arr.unshift(value.value);
    text.innerHTML = arr;
});
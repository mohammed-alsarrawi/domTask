const images = [
    'download.jpg',
    'download.jpg',
    'download.jpg',
    'download.jpg',
    'download.jpg'
];
const listItems1 = document.querySelector('#fruit-list li');

const listItems = document.querySelectorAll('#fruit-list li');

listItems.forEach((li, index) => {
    const img = document.createElement('img');
    img.src = images[index];

    li.appendChild(img); 
});



let num=12;
let arr=[1,2,12];
console.log(re(arr,num))
function re(arr,num){
for(let i=0;i<arr.length;i++){
if(num==arr[i])
    return num;
}
return -1
}
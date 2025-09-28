// how to access element
let element=document.getElementById('myh1');

console.log(element.innerText);
let body=document.body;
 let p1=document.getElementById('p1');
 let btn=document.getElementById('btn');

// how to modify element data
element.innerText="This is updated heading"

// how to add new element

let newP=document.createElement('p');
newP.innerText='This is created by JS';
body.appendChild(newP);

// remove specific element
p1.remove();

// event listener
btn.addEventListener('click',()=>
{
    p1.remove();
})

element.addEventListener('mousemove',()=>
{
    element.style.color='red'
})

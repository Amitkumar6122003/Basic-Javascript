console.log('===========Conditional Statement==============')
if(10==10)
{
    console.log("both are equal");
    
}
else
{
    console.log("both are different");
    
}
console.log('============switch==============');
let statusCode=200;
switch (statusCode) {
    case 200:{
        console.log("ok");
        
    }
    case 201:
        {
            console.log("Created");
            
        }
        
        break;
    case 404:
        {
            console.log("Not found");
            
        }
    default:
        console.log("Invalid Status code");
        
        break;
}


console.log('======================== Looping =============================');


let numbers=[2,3,4,5,6];
console.log("FOR");

for(let i=0;i<=numbers.length; i++)
{
    console.log(numbers[i]);
    
}
console.log("student loop");
let students=[
    {roll:101,name:'aa',age:26},
    {roll:101,name:'aa',age:26},
    {roll:101,name:'aa',age:26},
];
for (let index = 0; index < students.length; index++) {
    const element = students[index];

    console.log(element);
    
    
}
console.log("while");

let i=0;
while(i<students.length)
{
    const s= students[i];
    console.log(s);
    i++;
}



console.log("===================== Function =============================");
function fun() {
    console.log("in fun 1");
    
}
fun();
function fun2(num1, num2)
{
   console.log(num1+num2);
   
}
fun2(10,20);
function fun3(name, age=23)
{
    const msg = name +"your age is "+age;
    console.log(msg);
    
}
fun3("AA",28);
function fun4(num1, num2) 
{
 console.log(num1 + num2);
 return "hi";
}
let res=fun4(22,22);
console.log(res);


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

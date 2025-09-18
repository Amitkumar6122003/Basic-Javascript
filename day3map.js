console.log("================ MAP =====================");

console.log("Iteration");
let numbers=[1,2,3,4,5,6];
numbers.map((num) => console.log(num))

console.log("Transformation");
let dbl = numbers.map((num)=>num*2)
console.log(dbl);

console.log("=======================================");


let studentNames=['aa','bb','cc'];
let capital =studentNames.map((name) => name.toUpperCase());
console.log(capital);

console.log("======================================");

let products=[
    {id:1,name: "pen",price:10},
    {id:2,name: "book",price:100},
    {id:3,name: "mouse",price:500},
];
let capitalProductName= products.map((product)=>product.name.toUpperCase());
console.log(capitalProductName);

let updatedProducts=products.map((product)=>({
...product, name:product.name.toUpperCase(),descountedPrice:product.price*0.9
}))
 console.log(updatedProducts);

 console.log("=====================================");
 
 console.log("FILTER");
 let filterProducts =products.filter((product)=> product.price>50);
 console.log(filterProducts);

 console.log("======================================");
 
 
 
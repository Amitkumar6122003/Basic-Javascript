const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 50000,
    inStock: true,
    rating: 4.6,
  },
  {
    id: 2,
    name: "Mobile",
    category: "Electronics",
    price: 30000,
    inStock: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    price: 2000,
    inStock: false,
    rating: 4.1,
  },
  {
    id: 4,
    name: "Shoes",
    category: "Fashion",
    price: 2500,
    inStock: true,
    rating: 4.2,
  },
  {
    id: 5,
    name: "Watch",
    category: "Fashion",
    price: 7000,
    inStock: false,
    rating: 4.3,
  },
  {
    id: 6,
    name: "Book",
    category: "Stationery",
    price: 500,
    inStock: true,
    rating: 4.8,
  },
  {
    id: 7,
    name: "Pen",
    category: "Stationery",
    price: 100,
    inStock: true,
    rating: 4.0,
  },
  {
    id: 8,
    name: "Tablet",
    category: "Electronics",
    price: 15000,
    inStock: true,
    rating: 4.4,
  },
  {
    id: 9,
    name: "Bag",
    category: "Fashion",
    price: 3000,
    inStock: true,
    rating: 4.5,
  },
  {
    id: 10,
    name: "Printer",
    category: "Electronics",
    price: 12000,
    inStock: false,
    rating: 4.2,
  },
];
const pNames=products.filter((p)=> p.inStock ===true).map((prd)=> prd.name);
console.log(pNames);

console.log("=================================================================");

const names = products.map((prd) => prd.name);
console.log(names);
   
console.log("===========================================");

const productName= products.filter((p)=>p.price>10000);
console.log(productName);

console.log("========================================");

const n =products.filter((prd)=>prd.rating>=4.5).map((prd)=>prd.name);
console.log(n);

console.log("======================================");

const updatedProducts =products.map((prd)=>({name:prd.name,price:prd.price*0.9}));
console.log(updatedProducts);

console.log("===============================================================");

const inStockProductsNames = products.filter((prd)=>prd.inStock === true)
.map((prd)=>prd.category);
console.log(inStockProductsNames);

console.log("========================= Problem 7==================");

const ProductsName = products.filter((prd)=>prd.price<5000)
                              .map((prd)=>prd.name);
console.log(ProductsName);
 
console.log("===============================================");


const productscategory =products.map((prd)=>({category:prd.category}))
                                .filter((prd)=>prd.rating>=4.5);
console.log(productscategory);

//async : inside getData await is used

async function getData()  {
// call api for data  https://dummyjson.com/todos/1 

// await : it will take some time to fetch api response

let rawData =  await fetch ('https://dummyjson.com/todos/1');

//await : it will take some time to phrase rawData ti json

let res = await rawData.json();
console.log(res);

}
getData();
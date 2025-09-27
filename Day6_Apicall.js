// //async : inside getData await is used

// async function getData()  {
// // call api for data  https://dummyjson.com/todos/1 

// // await : it will take some time to fetch api response

// let rawData =  await fetch ('https://dummyjson.com/todos/1');

// //await : it will take some time to phrase rawData t0 json

// let res = await rawData.json();
// console.log(res);

// }
// getData();

console.log("============================= TRY & CATCH =========================================");


async function getData2() {
    
}
try {
    let rawData = await fetch("https://dummyjson.com/tod");
    let res = await rawData.json();
    console.log(res);
} catch (error) {
    console.log("somethong went wrong");
    
}
getData2();

// console.log("============================= THEN & CATCH ============================================");

// function getData2()
// {
//     fetch("https://dummyjson.com/todo")
//     .then((rawData)=>rawData.json())
//     .then((data)=>console.log(data))
//     .catch((e)=>console.log("error"));
// }
// getData2();

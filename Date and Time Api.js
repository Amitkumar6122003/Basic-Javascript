
let date = new Date();
console.log(date);

let yesterday =new Date('2025-09-18');
console.log(yesterday);

let milis=Date.now();
console.log(milis);

let miliDate=new Date(1758374704197)
console.log(miliDate);

console.log((Date.now()-1758374704197)/1000);
console.log(miliDate);


console.log("===================== How To Get Specific Part=========================");

let now=new Date();

console.log("Current time:"+now.toLocaleTimeString());

console.log("year:" +now.getFullYear());
console.log("Month:"+ now.getMonth());
console.log("Date:" +now.getDate());

console.log("hour:"+now.getHours());
console.log("min:"+now.getMinutes());
console.log("sec:"+now.getUTCSeconds());
console.log("milis:" +now.getMilliseconds());

console.log("Day:"+now.getDay());

console.log("*******************************************************");

console.log("============================ How to set Specific Part====================================");
 

let Current = new Date();
Current.toLocaleTimeString();

Current.setFullYear(2027);
console.log("After 2 year:"+Current.getFullYear());

console.log("========================= Date Formating ===========================================");

console.log("Current:"+Current);
console.log("Date String:"+Current.toDateString());
console.log("ISO String:"+Current.toTimeString());
console.log("Locale String:"+Current.toLocaleTimeString());
console.log("Time String:"+Current.toTimeString());


console.log("========================= Custum Formating ================================");

function formatDate(date)
{
    //yyyy-mm-dd HH:MM:SS
    return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+'-'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
}
let formatedDate=formatDate(Current);
console.log(formatedDate);













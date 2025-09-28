let count =0;
inc.addEventListener('click',()=>
{
    count++;
    counter.textContent =count;
});

dec.addEventListener('click',()=>
{
    count--;
    counter.textContent=count;
});
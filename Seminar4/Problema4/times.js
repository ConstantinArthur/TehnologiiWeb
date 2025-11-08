Number.prototype.times = function(repeat){
    for(let i=0;i <this;i++)
    {
        repeat(i);
    }
}

3 .times(() => {
    console.log("Hello");
})
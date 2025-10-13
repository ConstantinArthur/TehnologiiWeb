const Fibonacci = (n) =>
    {
        if(n <0) console.log("Doar numere pozitive");
        if(n == 0) return 0;
        if(n == 1) return 1;

        let a=0, b=1,c;
        for(let i=2;i<=n;i++)
        {
            c=a+b;
            a=b;
            b=c;
        }
        return b;
    } 

    if(process.argv.length < 3)
    {
        console.log("Not enough parameters");
    }
    else{
        console.log(Fibonacci(parseInt(process.argv[2])));
    }
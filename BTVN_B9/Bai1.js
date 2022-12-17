function isPrime(n){
    if(n==2)
        return false;
    if(n < 2 || n%2==0)
        return false;
    for(let i = 3; i < n; i++)
        if(n%i==0)
            return false;
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));   
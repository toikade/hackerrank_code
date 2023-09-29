function findDigits(n=124) {
    // Write your code here
    let divisors=0;
    let stringOfNumbers=n.toString();
    for(let i of stringOfNumbers){
        console.log(Number(i));
        if((Number(i)%n)==0) divisors++;
    }
    return divisors;
}

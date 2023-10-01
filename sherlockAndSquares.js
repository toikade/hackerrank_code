function squares(a=3, b=9) {
    // Write your code here
    let startNum=Math.floor(Math.sqrt(a));
    let squareNumbers=0;
    let square=(x)=>x*x;
    while(square(startNum)<=b){
        if(square(startNum)>=a) squareNumbers++;
        startNum++;
    }
    return squareNumbers;
}

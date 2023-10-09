function nonDivisibleSubset(k=3, s=[1,7,2,4]){
    let nonDuplicate=new Set(s); //remove duplicate values;
    let theArr=[...nonDuplicate]; //convert set to array
    let answerArr=[[...theArr]]
    let theArrLength=theArr.length;
    let answerArrLength=answerArr.length;
    let counter=0;
    let longestSet=-Infinity;
    for(let a=0; a<=answerArrLength-1; a++){ //loop through # of answerArr
        //console.log(a);
        theArrLength=answerArr[a].length;
        let activeNum;
        //console.log('len', theArrLength);
        for(let i=counter; i<=theArrLength-1; i++){
            for(let j=i; j<=theArrLength-1; j++){
                if(answerArr[a][i]==answerArr[a][j]) continue;
                if((answerArr[a][i]+answerArr[a][j])%k==0){
                    console.log(answerArr[a][i], answerArr[a][j]);
                    if(!answerArr[a+1]) answerArr.push([]);
                    activeNum=answerArr[a+1].includes(answerArr[a][i])?answerArr[a][i]:answerArr[a][j];
                    if(!answerArr[a+1].includes(activeNum)){
                        answerArr[a+1].push(activeNum);
                    }
                }
            }
            counter++;
        }
        if(!answerArr[a+1]) break;
        for(let k of answerArr[a+1]){
            answerArr[a].splice((answerArr[a].indexOf(k)),1);
        }
        counter=0;
        answerArrLength++;
    }
    //console.log(answerArr);
    for(let arr of answerArr){
        longestSet=arr.length>longestSet?arr.length:longestSet;
    }
    return longestSet;
}

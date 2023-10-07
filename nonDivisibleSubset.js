function nonDivisibleSubset(k=3, s=[1,7,2,4]){
    let nonDuplicate=new Set(s); //remove duplicate values;
    theArr=[...nonDuplicate];
    theArrLength=theArr.length;
    let counter=0;
    for(let i=counter; i<=theArrLength-1; i++){
        for(j=i; j<=theArrLength-1; j++){
            if(theArr[i]==theArr[j]) continue;
            //if((theArr[i]+theArr[j])%k==0) continue;
            console.log(theArr[i],'+',theArr[j],'/',k,'=',(theArr[i]+theArr[j])%k);
            //console.log('j', j)
        }
        counter++;
        //console.log('i', i)
    }
}


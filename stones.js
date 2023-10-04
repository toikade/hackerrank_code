function stones(n=3, a=2, b=3){
    //let prefix;
    let spaces=n-1;
    let elems=[a,b];
    let exponent=Math.pow(2, (n-1));
    let checkArr=[];
    let answer=new Set();
    let finalArr=[];
    //let reduceArr=(total, num)=>total+num;
    let setCheckArr=(exp)=>{
        checkArr=[];
        for(let i=0; i<spaces; i++){
            checkArr.push(exp/2);
            exp/=2;
        }
    }
    let resetCheckArr=(idx)=>{
        checkArr[idx]=checkArrCopy[idx];
    }
    setCheckArr(exponent);
    let checkArrCopy=[...checkArr];
    //console.log('copy', checkArrCopy);
    for(let g=1; g<=exponent; g++){
        //prefix=g<=exponent/2?a:b;
        //let tempArr=[];
        let activeNum;
        let sum=0;
        for(let j=0; j<spaces; j++){
            activeNum=checkArr[j]>0?a:b;
            //console.log('active', activeNum);
            sum+=activeNum;
            //tempArr.push(activeNum);
            
            checkArr[j]--;
            if(checkArrCopy[j]==Math.abs(checkArr[j])){
                resetCheckArr(j);
                continue;
            }
            //console.log('checkArr', checkArr);
        }
        //console.log(tempArr);
        //console.log('SUM', sum);
        answer.add(sum);
        //console.log('copy', checkArrCopy);
       
    }
    finalArr=[...answer];
    return finalArr;
}

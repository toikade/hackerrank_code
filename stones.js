function stones(n=3, a=2, b=3){
    //let prefix;
    let spaces=n-1;
    let elems=[a,b];
    let exponent=Math.pow(2, (n-1));
    let checkArr=new Array(spaces).fill(0);
    let answer=new Set();
    let finalArr=[];
    let checkArrCursor=checkArr.length;
    //let reduceArr=(total, num)=>total+num;
    
   
    let checkArrCopy=[...checkArr];
    //console.log('copy', checkArrCopy);
    for(let g=1; g<=exponent; g++){
        //prefix=g<=exponent/2?a:b;
        let tempArr=[];
        let activeNum;
        let sum=0;
        for(let j=0; j<spaces; j++){
            //activeNum=checkArr[j]>0?a:b;
            //console.log('active', activeNum);
            sum+=elems[checkArr[j]];
            tempArr.push(elems[checkArr[j]]);
            //console.log('elems', elems[checkArr[j]]);
        }
            //console.log('tempArr',tempArr);
            
            checkArr[--checkArrCursor]++;
            answer.add(sum);
            if(checkArrCursor==-1) break;
    }
    return [...answer].sort((a,b)=>a-b);
}

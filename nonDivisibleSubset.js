function nonDivisibleSubset(k=3, s=[1,7,2,4]){
    let nonDuplicate=new Set(s); //remove duplicate values;
    let theArr=[...nonDuplicate]; //convert set to array
    let answerArr=[];
    let theArrLength=theArr.length;
    let answerArrLength=answerArr.length;
    let counter=0;
    let longestSet=-Infinity;
    let a=0;
    let lookupArr=[]
       
       // theArrLength=answerArr[a].length;
      let activeNum;
      loopAnswer();  
        function loopAnswer(){
            //FOR EVERY ELEMENT IN theArr
            for(let i=counter; i<=theArrLength-1; i++){
                //stop looping at the end of theArr
               if(a==theArrLength-1) break;
                //create an empty array for each item in theArr
                answerArr.push([]);
                //push the first element of theArr into the empty array above
                answerArr[a].push(theArr[i]);
                //FOR EVERY ELEMENT IN theArr
                for(let j=i; j<=theArrLength-1; j++){
                    //continue if the both numbers are same (not needed)
                     if(theArr[i]==theArr[j]) continue;
                     //if modulo operation returns 0
                     if((theArr[i]+theArr[j])%k==0) {
                         //push the elements to lookupArr
                        lookupArr.push([theArr[i],theArr[j]]);
                        console.log('lookupArr',lookupArr);
                     }
                    //if modulo operations returns non zero
                    if((theArr[i]+theArr[j])%k!==0){
                        //select a consitional value and store in activeNum
                       activeNum=answerArr[a].includes(theArr[i])?theArr[j]:theArr[j]; 
                        //if activeNum not in answerArr[a]
                       if(!answerArr[a].includes(activeNum)){
                           //push activeNum to answerArr[a]
                           answerArr[a].push(activeNum);
                       } 
                    }
                }
                
                
                counter++;
                
                a++;
               // if(action==='divide') theArrLength=answerArr[a].length;
            }
            console.log('answerArr',answerArr);
        }
        
        //use a set to filter out duplicate values
    let tempArr=new Set();
        //loopAnswer();
    for(let i=0; i<=answerArr.length-1; i++){
        
        for(let j=0; j<=lookupArr.length-1; j++){
           if((answerArr[i].includes(lookupArr[j][0]))&& (answerArr[i].includes(lookupArr[j][1]))){
               //answerArr[i].splice(answerArr[i].indexOf(lookupArr[j][0]),1);
               //tempArr.add(lookupArr[j][0]).add(lookupArr[j][1]);
              // tempArr.add(lookupArr[j][0]);
               console.log(i, 'tmp', lookupArr[j]);
           } 
            //console.log(i,j);
        }
        console.log('tmp', tempArr);
        
    }
    
    for(let arr of answerArr){
        longestSet=arr.length>longestSet?arr.length:longestSet;
    }
   
    
   // console.log(theArr.length-tempArr.size);
}

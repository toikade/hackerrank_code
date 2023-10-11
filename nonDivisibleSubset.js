function nonDivisibleSubset(k=3, s=[1,7,2,4]){
    let nonDuplicate=new Set(s); //remove duplicate values;
    let theArr=[...nonDuplicate]; //convert set to array
    let answerArr=[];
    let theArrLength=theArr.length;
    let answerArrLength=answerArr.length;
    let counter=0;
    let longestSet=-Infinity;
    let a=0;
    let action='notDivide';
    
       // theArrLength=answerArr[a].length;
        let activeNum;
      loopAnswer();  
        function loopAnswer(){
            for(let i=counter; i<=theArrLength-1; i++){
                
                let tempArr=[];
                if(a==theArrLength-1) break;
                if(action==='notDivide'){
                answerArr.push([]);
                 answerArr[a].push(theArr[i]);
                }
                for(let j=i; j<=theArrLength-1; j++){
                    
                   // if(theArr[i]==theArr[j]) console.log('log', i,j);
                   // if((theArr[i]+theArr[j])%k==0) console.log('div', i,j,'=',theArr[i],theArr[j]);
                    if(action==='notDivide'){
                        //not important
                        if(theArr[i]==theArr[j]) console.log('USEless', i,j);
                        //can't be in same arr
                    if((theArr[i]+theArr[j])%k==0) console.log('cantb', i,j,'=',theArr[i],theArr[j]);
                        //IF modulo is zero, seperate them
                        if((theArr[i]+theArr[j])%k!==0){
                            //console.log(theArr[i], theArr[j]);
                            console.log('TOT', counter,j, theArrLength, theArr[i],theArr[j]);
                            activeNum=answerArr[a].includes(theArr[i])?theArr[j]:theArr[j];
                            if(!answerArr[a].includes(activeNum)){
                                answerArr[a].push(activeNum);
                                //console.log('num',activeNum)
                            }
                        }
                    }
                    if(action==='divide'){
                       if(answerArr[a][i]==answerArr[a][j]) console.log('log', i,j);
                       if((answerArr[a][i]+answerArr[a][j])%k!==0) console.log('div', i,j,'=',theArr[i],theArr[j]);
                        if((answerArr[a][i]+answerArr[a][j])%k==0){
                            
                            tempArr.push(answerArr[a][i]);
                            tempArr.push(answerArr[a][j]);
                            console.log('tmp',a, tempArr);
                                               
                            
                        }
                    }
                }
                if(action==='divide'){
                    for(let k of tempArr){
                       answerArr[a].splice(answerArr[a].indexOf(k),1);
                        console.log(a,answerArr[a]);
                    }
                }
                counter++;
                
                a++;
                if(action==='divide') theArrLength=answerArr[a].length;
            }
            console.log(answerArr);
    }
        
        counter=a=0;
        theArrLength=answerArr[a].length;
        action='divide';
        loopAnswer();
    
    for(let arr of answerArr){
        longestSet=arr.length>longestSet?arr.length:longestSet;
    }
   
    
    console.log(longestSet);
}

function nonDivisibleSubset(k=3, s=[1,7,2,4]){
    let nonDuplicate=new Set(s); //remove duplicate values;
    let theArr=[...nonDuplicate]; //convert set to array
    let answerArr=[[...theArr]]
    let theArrLength=theArr.length;
    let answerArrLength=answerArr.length;
    let counter=0;
    for(let a=0; a<=answerArrLength; a++){ //loop through # of answerArr
       // console.log('count', counter);
        
        console.log('A',a);
            console.log('befLEN', answerArr.length);
        for(let i=counter; i<=theArrLength-1; i++){  //loop through theArr
            for(j=i; j<=theArrLength-1; j++){ //loop through theArr items
                if(theArr[i]==theArr[j]) continue;
                if((theArr[i]+theArr[j])%k==0){
                    console.log(theArr[i], theArr[j]);
                    if(!answerArr[a+1]) {
                        answerArr.push([]);
                        //console.log(answerArr.indexOf([]));
                       // answerArrLength++;
                        /*if(a==1){
                            //console.log(answerArr);
                            break;
                        }*/
                    }
                    if(!answerArr[a+1].includes(theArr[j])){
                        answerArr[a+1].push(theArr[j]);
                    answerArr[a].splice((answerArr[a].indexOf(j)),1);
                    }
                    console.log(answerArr);
                    console.log('aftLEN', answerArr.length);
                }
                //if((theArr[i]+theArr[j])%k==0) continue;
                //console.log(theArr[i],'+',theArr[j],'/',k,'=',(theArr[i]+theArr[j])%k);
                //console.log('j', j)
            }
            counter++;
            //console.log('theArr', theArr);
            /*if(a==1){
              //console.log(answerArr);
              break;
            }*/
        }
        counter=0;
        if(a==1){
           //console.log(answerArr);
           break;
        }
        //theArr=answerArr[a+1];
    }
    console.log(answerArr);
}



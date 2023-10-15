function nonDivisibleSubset(k=3, s=[1,7,2,4]){
    let nonDuplicate=new Set(s); //remove duplicate values;
    let theArr=[...nonDuplicate]; //convert set to array
    let theArrLength=theArr.length;
    let counter=0;
    let remainderArr=[];//stores an Array of modulo remainders
    let countObj={};//stores count of remainders
    let pairArr=[];//stores pairs of remainders whose numbers cant be in the same set
    let numberToDelete;//number to be removes from remainderArr
    
    //FOR EVERY ITEM r OF theArr
    for(let r of theArr){ 
        let rem=r%k; // modulo remainder
        remainderArr.push(rem);
        countObj[rem]>=1?countObj[rem]++:countObj[rem]=1;//store the count of each remainder in countObj
    }
    
   // console.log('remArr', remainderArr);
   //console.log(countObj);
      
      
      loopAnswer();  
        function loopAnswer(){
            //FOR EVERY ELEMENT IN theArr
            for(let i=counter; i<=theArrLength-1; i++){
               
                //FOR EVERY ELEMENT IN theArr
                for(let j=i; j<=theArrLength-1; j++){
                    //continue if the both numbers are same (not needed)
                     if(theArr[i]==theArr[j]) continue;
                    //if the sum of 2 remainders in remainderArr==k then they cant be in same array
                    if((remainderArr[i]+remainderArr[j])==k){
                        //console.log(remainderArr[i],remainderArr[j]);
                        //console.log(theArr[i], theArr[j]);
                        if(!pairArr.length){ //if pairArr is still empty
                           pairArr.push([remainderArr[i],remainderArr[j]]); 
                        }
                        //FOR EVERY ITEM IN pairArr
                        for(let pair=0; pair<=pairArr.length-1; pair++){ 
                            //if on last item in loop and (last item does not include remainderArr[i] and [j])=> found no match till now
                            if((pair==pairArr.length-1)&&((!pairArr[pair].includes(remainderArr[i]))&&(!pairArr[pair].includes(remainderArr[j])))){
                                //push the current remainderArr items into pairArr
                                pairArr.push([remainderArr[i],remainderArr[j]]);
                                //else if pairArr item is a match
                            }else if((pairArr[pair].includes(remainderArr[i]))&&(pairArr[pair].includes(remainderArr[j]))){
                                break;
                            }else{
                                continue;
                            }
                        }
                       // console.log(pairArr);
                    }//if
                    
                }
                
                counter++;
              
            }
            //FOR EVERY pair IN pairArr
            for(let pair of pairArr){
                //if counts of 2 numbers are == return the second : count of pair[0] is smaller return pair[1] else pair[0]
                numberToDelete=countObj[pair[0]]==countObj[pair[1]]?pair[1]:countObj[pair[0]]<countObj[pair[1]]?pair[0]:pair[1];
               // console.log(numberToDelete);
                //update remainderArr removing the value of numberToDelete
                remainderArr=remainderArr.filter(value=>value!==numberToDelete);
               // console.log(remainderArr);
            }
            
        }
        
        return (k==0||k==1)?1:remainderArr.length;
}

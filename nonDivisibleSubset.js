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
    
   console.log('remArr', remainderArr);
   console.log(countObj);
            
            let objArr=Object.keys(countObj);
            let objLength=Object.keys(countObj).length;
            for(let i=counter; i<=objLength-1; i++){
                for(let j=i; j<=objLength-1; j++){
                    
                    if(+objArr[i]+(+objArr[j])==k){
                        console.log(objArr[i], objArr[j]);
                        pairArr.push([+objArr[i],+objArr[j]]);
                        console.log(pairArr);
                    }
                }
            }
            
            //FOR EVERY pair IN pairArr
            for(let pair of pairArr){
                //if counts of 2 numbers are == return the second : count of pair[0] is smaller return pair[1] else pair[0]
                numberToDelete=countObj[pair[0]]==countObj[pair[1]]?pair[1]:countObj[pair[0]]<countObj[pair[1]]?pair[0]:pair[1];
                console.log(numberToDelete);
                //update remainderArr removing the value of numberToDelete
                remainderArr=remainderArr.filter(value=>value!==numberToDelete);
               // console.log(remainderArr);
            }
        
        return (k==0||k==1)?1:remainderArr.length;
}

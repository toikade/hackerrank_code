function cutTheSticks(arr=[1,2,3,4,3,3,2,1]) {
    // Write your code here
    let smallestItem=Infinity;
    let workingArr=arr;
    let answerArr=[];
    function smallestArrItem(){
        smallestItem=Infinity;
        //console.log(workingArr);
        for(let i of workingArr){
            if(i<smallestItem) smallestItem=i;
            //console.log(smallestItem);
        }
    };
    
    function removeItems(){
        for(let i=0; i<=workingArr.length; i++){
             //console.log(workingArr);
            //console.log('inside',i, workingArr[i]);
            if(workingArr[i]==smallestItem){
                workingArr.splice(i,1);
                i--;
            }
           
            //console.log(answerArr);
        }
    };


    while(workingArr.length>0){
        //console.log(workingArr);
        //console.log(workingArr.length);
        smallestArrItem();
        answerArr.push(workingArr.length);
       // console.log(answerArr);
        removeItems();
        workingArr=workingArr.map(x=>x-smallestItem);
        //console.log('workingarr', workingArr);
    }
    return answerArr;
}

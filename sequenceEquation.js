function permutationEquation(p) {
    // Write your code here
    let copyArray=p.map(x=>x);
    let sortedArray=copyArray.sort((a,b)=>a-b);
    let outputArray=[];
    for(let i of sortedArray){
       
        let firstValuePosition=p.indexOf(i)+1;
       
        let secondValuePosition=p.indexOf(firstValuePosition)+1;
        
        outputArray.push(secondValuePosition);
    }
    return outputArray;
}

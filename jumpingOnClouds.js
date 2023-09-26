function jumpingOnClouds(c=[1, 1, 1, 0, 1, 1, 0, 0, 0, 0], k=3) {
   let remainder=0;
    let toComplete=0;
    let energy=100;
   let i=k;
    let reduceEnergy=()=>c[i]==1?energy-=3:energy--;
    do{
        if(i+k>c.length-1){
            reduceEnergy();
            
            remainder=c.length-1-i;
            
            toComplete=k-remainder;
            
            i=0+toComplete-1;
            
            //break;
        }else{
          
        reduceEnergy();
        
        i+=k;  
        }
        
        
    }while(i!==0);
   if(i==0) reduceEnergy();
    return energy;
}

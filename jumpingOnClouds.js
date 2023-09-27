function jumpingOnClouds(c=[1, 1, 1, 0, 1, 1, 0, 0, 0, 0], k=3) {
    let remainder=0;
     let toComplete=0;
     let energy=100;
    let i=0;
     let reduceEnergy=()=>c[i]==1?energy-=3:energy--;
     do{
        i=(i+k)%c.length;
         //console.log(i);
         //console.log('C',c[i]);
         reduceEnergy();
         //console.log('E',energy);
     }while(i!==0);
   // if(i==0) reduceEnergy();
     return energy;
 }
 
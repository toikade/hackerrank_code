function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    let yeardiff=y1-y2;
    let monthdiff=m1-m2;
    let daydiff=d1-d2;
    if(y1!==y2){
        return yeardiff>0?10000:0;
    }else if(m1!==m2){
        return monthdiff>0?500*monthdiff:0;
    }else if(d1!==d2){
        return daydiff>0?15*daydiff:0;
    }else{
        return 0;
    }
}

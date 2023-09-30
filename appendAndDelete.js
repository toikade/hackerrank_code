function appendAndDelete(s='hackerhappy', t='hackerrank', k=9) {
    // Write your code here
    let matchedCharacters=0;
    let str1Moves=0;
    let str2Moves=0;
    let totalMoves=0;
   
    for(let i=0; i<t.length; i++){
        if(t[i]==s[i]){
            matchedCharacters++;
        }else{
            break;
        }
    }
    //console.log(matchedCharacters);
    str1Moves=s.length-matchedCharacters;
    str2Moves=t.length-matchedCharacters;
    //console.log('possiblemoves', possibleAppendMoves);
    totalMoves=str1Moves+str2Moves;
    let strEnd=totalMoves%2==0?'even':'odd';
    let kPolarity=k%2==0?'even':'odd';
   if(s.length==t.length){
       return ((matchedCharacters==0)&&(k<s.length+t.length))?'No':(k==0)?'Yes':k>=(s.length+t.length)?'Yes': k<totalMoves?'No':(k%2==0)?'Yes':'No';
   }else if(t.length>s.length){
       return k<str2Moves?'No':k==str2Moves?'Yes':k>=(s.length+t.length)?'Yes':strEnd=='even'&& kPolarity=='even'?'Yes':strEnd=='even'&& kPolarity=='odd'?'No':strEnd=='odd'&& kPolarity=='even'?'No':'Yes';
   }else{
       
       return k<totalMoves?'No':k==totalMoves?'Yes':k>(s.length+t.length)?'Yes':strEnd=='even'&& kPolarity=='even'?'Yes':strEnd=='even'&& kPolarity=='odd'?'No':strEnd=='odd'&& kPolarity=='even'?'No':'Yes';
   }
}

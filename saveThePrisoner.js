function saveThePrisoner(n, m, s) {
    // Write your code here
  let givenSweets=(n-s)+1;
  let notGivenSweets=m-givenSweets;
  if(n-s>=m) return s+(m-1);
  if(n-s<m){
      if(s+(m-1)>=n){
          if((notGivenSweets/n)<=1){
              if(notGivenSweets/n==0){
                  return n
              }else{
                  return notGivenSweets;
              }
          }else{
              return notGivenSweets%n!==0?notGivenSweets%n:n;
          }
      }else if(m<n){
          return s;
      }else{
          return givenSweets;
      }
  }
    
}

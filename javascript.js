/*exported move*/
/*eslent-env browser*/
/*eslent no-console:0*/
  function move(a,i,d)
  { 
      var length=a.length;
      var j;
    
    if((i>0)&(d>0)){
         var temp=a[i];
    while(j<d){
    a[j]=a[j+1];
    j++;
}
  
    a[d]=temp;
    }
      else
          {
               temp=a[length+i];
              j=length;
              while(j>(length+d)){
                  a[j-1]=a[j-2];
              j--;
              }
              a[length+d]=temp;
              
          }
              
              
          
      return a;
}
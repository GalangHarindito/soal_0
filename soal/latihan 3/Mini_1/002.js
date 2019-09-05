/* 
=================
StandBackTriangel
=================

Standback Triangel adalah program untuk mengegenerate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya 

[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga. 

[Example]
jika width = 3 maka : 

123 <-- width 
  o
 oo
o o
 oo
  o

[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()


*/

function standBackTriangel(width) {
    // your code here 
    var a = ''
    var x =0
    var y =0
    for(var i=1;i<width+1;i++){
        for(j=width;j>0;j--){
          a += j
        }     
        
         if(i<width) a += '\n'
    }
    // for (var i=width ; i>0 ; i--) {
    //   for (var j=0 ; j<i ; j++) {
    //    a += 'o'
    //   }
    //   if (i<width) a+='\n'
    //    if(i===width) a+= '\n'
    // }
   console.log(a) 
  }
     

 
 standBackTriangel( 3 )
//  standBackTriangel( 5 )
 
 /*
 input:5
  
     o 
    oo 
   o o 
  o  o 
 o   o 
  o  o 
   o o 
    oo 
     o 
 
 input:3
 
   o 
  oo 
 o o 
  oo 
   o 
 
 
 */
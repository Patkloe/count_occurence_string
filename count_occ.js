function count_occ(voir){
var hash = {};
var index;
var test = voir.split(" ");
  for(var i = 0; i < test.length; i++){
     index = test[i];
      alert(index);
     hash[index] = (hash[index]||0) + 1;
     alert("premier :" + " " + hash[index]);
     if(hash[index] > 1){
       console.log(index);
     }
  } 
}
var val = "The quick brown fox jumps over The lazy dog";
//var  val = "essai";
count_occ(val);

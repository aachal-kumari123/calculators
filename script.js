let Result=document.getElementById('result');

function insert(value){
    Result.value +=value;
}

   function  clear(){
    Result.value =' ';
}
function  delet(){
    Result.value =Result.value .slice(0,-1);
}

function calculate(){
    try{
        Result.value=eval(Result.value);
    }
    catch(error){
        Result.value="error" ;
    }
}
function comprobarinputs(){

 const inputs = document.querySelectorAll('input');
 let Sonnumeros=true;

 //recorre inputs
   inputs.forEach(input=>{
       //verifica si son numeros
       if(isNaN(input.value) || input.value.trim() === " "){
             Sonnumeros= false;
       }

       })
}
    

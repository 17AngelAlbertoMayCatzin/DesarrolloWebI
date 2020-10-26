var isbnV;
var idJava;
var expR1;
var expR2;
var expN;
//Función para validar datos
function formDatos(){
    expR1 = new RegExp('97[89]-\\d{1,5}-\\d{1,7}-\\d{1,6}-\\d{1}$');
    expR2 = new RegExp('^\\S|\D|\[a-zA-Z]+$');
    //Optenemos y guardamos el valor del input en la variable isbn
     isbnV= document.getElementById("isbn").value;
     validarIsbn();
     idJava= document.getElementById("idenJava").value;
     validarIdJ();
    //-----------------------------------------------------------------
    function validarIsbn(){
        if (expR1.test(isbnV)==true){
            alert('ISBN CORRECTO')

        } else{
            alert('Ingrese un ISBN valido')
        }
    
    }
    function validarIdJ(){
        if (expR2.test(idJava)==true){
            alert('Identificador correcto')

        } else{
            alert('Ingrese un Identificador valido')
        }
    
    }
}

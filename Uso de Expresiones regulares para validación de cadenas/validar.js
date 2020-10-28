var isbnV;  //Variable que almacena el isbn ingresado por usuario
var idJava; //Variable que almacena el identificador ingresado por usuario
var expR1;  //Variable que almacena la expresión regular para validar el isbn
var expR2;  //Variable que almacena la expresión regular para validar el identificador
var valor1; //Variable para validar
var valor2; //Variable para validar
var palabrasReservadas; //Variable para almacenar las palabras reservadas de Java
var contieneEle;        //Variable para validar
//Función para procesar el formulario
function validarDatos(){
    //Asignamos las palabras reservadas de Java
    palabrasReservadas = ["for", "abstract" ,"continue", "new","switch","assert", "default", "goto", "package","synchronized",
    "boolean","do", "if", "private", "this", "break","double","implements", "protected", "throw", "byte","else","import","public",
    "throws","case","enum","instanceof","return","transient", "catch","extends",  
    "int","short","try","char","final","interface","static","void","class","finally","long","strictfp","volatile","const","float",
    "native","super","while"]
    //Agregamos a la vairiable la expresión regular del isbn
    expR1 = new RegExp('(?=.{17}$)97[89][-\\s]+\\d{1,5}[-\\s]+\\d{1,7}[-\\s]+\\d{1,6}[-\\s]+\\d{1}$'); 
    //Agregamos a la vairiable la expresión regular del identificador
    expR2 = new RegExp('^[_$]*[A-Za-z]+[_]*[A-Za-z]+[0-9]*$', 'i');
    //Optenemos y guardamos el valor del input en la variable isbn
     isbnV= document.getElementById("isbn").value;
     //Optenemos y guardamos el valor del input en la variable idJava
     idJava= document.getElementById("idenJava").value;

    //-------Validamos si el nombre cumple alguna de las dos condiciones (expresiones regulares)-------//
    //-------test(isbnV) Comprueba si la expresión regular (expR1) casa con el texto (isbnV) pasado por parámetro.
        if (expR1.test(isbnV)==true  ){
            alert('ISBN CORRECTO') //Mandamos una alerta cuando el usuario ingrese un isbn valido
            valor1=true;           //Asignamos true a la variable valor1, para su posterior validación
            document.getElementById("errorIb").innerHTML = "";  //Limpiamos el contenido de la etiqueta errorIb
        } else{
            alert('ISBN inválido') //Mandamos una alerta cuando el usuario ingrese un isbn inválido
            document.getElementById("isbn").value = ""; //Asignamos nulo al input isbn
            //A la etiqueta errorIb se le asigna un contenido, mostrando el error y un ejemplo.
            document.getElementById("errorIb").innerHTML='El dato introducido no es válido.'+'<br/> Introduzca uno válido.'+ 
            '<br/> Ejemplos de datos válidos: 978-92-95055-02-5, 978 92 95055 02 5 '
        }
    //-------test(idJava) Comprueba si la expresión regular (expR2) casa con el texto (idJava) pasado por parámetro.
        if (expR2.test(idJava)==true){
            alert('Identificador correcto') //Mandamos una alerta cuando el usuario ingrese un identificador válido
            ver= palabrasReservadas.includes( idJava ) //Buscamos el elemento (idJava) en el array con includes, devolvera true si esta.
            //Validamos si se encontro el elemento
            if(ver==true){
                alert('Ingreso una palabra reservada de Java')  //Mandamos una alerta cuando el usuario ingrese una palabra reservada de Java
                document.getElementById("idenJava").value = ""; //Asignamos nulo al input idenJava
                //A la etiqueta errorIj se le asigna un contenido, mostrando el error y un ejemplo.
                document.getElementById("errorIj").innerHTML='El dato introducido es un identificador de java.'+'<br/> Introduzca un valor válido.'+ 
                '<br/> Ejemplo: myVariable, Persona, validarNumero'
            } else{
                valor2=true;                                        //Asignamos true a la variable valor2, para su posterior validación
                document.getElementById("errorIj").innerHTML=''     //Limpiamos el contenido de la etiqueta errorIb
            }
        } else{
            alert('Identificador inválido') //Mandamos una alerta cuando el usuario ingrese un identificaor invalido
            document.getElementById("idenJava").value = ""; //Asignamos nulo al input idenJava
            //A la etiqueta errorIj se le asigna un contenido, mostrando el error y un ejemplo.
            document.getElementById("errorIj").innerHTML='El dato introducido no es válido.'+'<br/> Introduzca uno válido.'+ 
            '<br/> Ejemplos de datos válidos: myVariable, Persona, validar_Numero'
        }
        //Validamos los dos valores (valor1 y valor2), si ambas se cumplen, se muestran los datos personales
        if (valor1==true && valor2==true){
             //Usamos la propiedad innerHTML, con lo cual asignamos contenido a la etiqueta con id mostrarDatos
            document.getElementById("mostrarDatos").innerHTML='Los datos introducidos son válidos'+ '<br/> Desarrollo:'+ '<br/> Nombre: Angel Alberto May Catzin'+
            '<br/> Número de control: 17390350'+ '<br/> Correo Electrónico: l17390350@chetumal.tecnm.mx' ;
        } else{
            document.getElementById("mostrarDatos").innerHTML='¡Uuuups... Los datos personales no se pueden mostrar!'+ '<br/>Debido a que los datos introducidos no son válidos';
        }
}
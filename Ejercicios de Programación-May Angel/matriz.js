function crearTabla(){
var valorSelect = document.getElementById("matriz").value;
var columna=new Array(valorSelect);
var filas=new Array(valorSelect);
var tbl = document.getElementById("tabla");
var tblBody = document.createElement("tbody");
    for (var i = 0; i < columna; i++) {
       var fila = document.createElement("tr");
       fila.setAttribute('style','background-color: aqua;')
       for (var j = 0; j < filas; j++) {
          var celda = document.createElement("td");
          celda.setAttribute('style','background-color: red;')
          if(i==j){
              textoCelda = document.createTextNode(1);
              fila.appendChild(textoCelda);
              
          } else{
              textoCelda1 = document.createTextNode(0);
              fila.appendChild(textoCelda1);
              
          }
       }
       
        tblBody.appendChild(fila);
    }
    tbl.appendChild(tblBody);
    tbl.setAttribute("border", "6" );
    
}
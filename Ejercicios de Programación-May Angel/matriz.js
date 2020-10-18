function crearTabla(){
//Obtener el valor del select seleccionado
var valorSelect = document.getElementById("matriz").value;

//Creamos la matriz bidimencional
var A=new Array(valorSelect); 
for (var i=0;i<=valorSelect;i++) { 
  A[i] = new Array(valorSelect);  
}  
//Alimentamos la matriz
for(i=0;i<=valorSelect;i++){  
    for(j=0;j<=valorSelect;j++){   
      if (i==j){
        A[i][j]=1; 
      }else{
        A[i][j]=0; 
      }
    }  
  } 
//Creamos la tabla
function crearTabla(tablaData) {
    var tbl = document.getElementById("tabla");
      var cuerpo = document.createElement('tbody');
      tablaData.forEach(function(rowData) {
        var fila = document.createElement('tr');
        rowData.forEach(function(cellData) {
          var cell = document.createElement('td');
          cell.setAttribute('style','text-align :center;');
          cell.setAttribute('style','background-color: aqua;')
          cell.appendChild(document.createTextNode(cellData));
          fila.appendChild(cell);
        });
        cuerpo.appendChild(fila);
      });
      tbl.appendChild(cuerpo);
      document.body.appendChild(tbl);
    }
    crearTabla(A);


    
}
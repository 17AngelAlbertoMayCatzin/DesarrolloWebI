function crearTriangulo(){
 //var valor = document.getElementById("pascal").value; //Numero de niveles
 var valor = 10;
 //alert(n)
//creamos la matriz bidimensional A(n,n)  
var A=new Array(valor); 
for (var i=1;i<=valor;i++) {  
  A[i] = new Array(valor);  
}  
//alimentamos la matriz  
for(i=1;i<=valor;i++){  
  for(j=1;j<=i;j++){  
    A[i][j]=combina(i-1,j-1);  
  }  
}  
//función que calcula el número combinatorio p sobre q  
function combina(p,q){  
  return  Math.round(fact(p)/(fact(q)*fact(p-q)));   
}  
//función que calcula el factorial  
function fact(h){  
  var f=1;  
  if (h!==0){  
    for (k=1;k<=h;k++){  
      f*=k;  
    }  
  }  
  return f;  
}  
//creamos la tabla en HTML de forma dinámica con appendChild
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
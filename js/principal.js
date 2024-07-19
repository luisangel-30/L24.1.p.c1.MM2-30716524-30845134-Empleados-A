/*EMPLEADOS-A
En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
determinar cuál es alguno de los nombres del personal que gana menos (si no se repite, sólo
reportar 1, si se repite, reportar cualquiera) y también el monto promedio pagado sólo los
administrativos.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
$50, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
gana $150:
Uno de los que gana menos: Mary
Monto promedio pagado a administrativos: $175*/


import CL_empleados from "./CL_empleados.js";
import CL_empresa from "./CL_empresa.js";

let emp1 = new CL_empleados("Juan",1, 100);
let emp2 = new CL_empleados("Ana",1, 50);
let emp3 = new CL_empleados("Lin",2, 200);
let emp4 = new CL_empleados("Mary",1, 50);
let emp5 = new CL_empleados("Carlos",2, 150);

let empresa = new CL_empresa();

empresa.procesar(emp1);
empresa.procesar(emp2);
empresa.procesar(emp3);
empresa.procesar(emp4);
empresa.procesar(emp5);

let salida = document.getElementById("salida");

salida.innerHTML=`
Uno de los que gana menos: ${empresa.nombremenor()}
<br>Monto promedio pagado a administrativos: $${empresa.motpagadm()}

`

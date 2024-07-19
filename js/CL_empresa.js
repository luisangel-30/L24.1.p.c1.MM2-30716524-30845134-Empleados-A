export default class CL_empresa{
    constructor(){
        this.cotadm=0;
        this.acumsueladm=0.0;
        this.menor=99999;
        this.nombmenor=0;
    }
    procesar(emp){
        if(emp.tipo==2)
            this.cotadm++;
        if(emp.tipo==2)
            this.acumsueladm+=emp.sueldo;
            
        
        if(emp.sueldo<this.menor){
            this.menor=emp.sueldo;
            this.nombmenor=emp.nombre;
        }
    }
    nombremenor(){
        return this.nombmenor;
    }
    motpagadm(){ 
        return this.acumsueladm/this.cotadm;
    }
}
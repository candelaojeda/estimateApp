class Egreso extends Dato{  //a extends lo uso para traer todo lo que contiene la clase padre "dato"
    static contadorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}
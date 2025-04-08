class Coche{

    // Objetos
    // constructor + ( propiedades )
    constructor(marca, modelo){

        // Inicio de las propiedades
        // this + .propiedad = propiedad
        this.marca = marca;
        this.modelo = modelo
    }

    // Métodos
    // método() { propiedades }
    acelerar() {

        return `El coche ${this.marca} ${this.modelo} está acelerando`;

    };
    frenar() {
        return `El coche ${this.marca} ${this.modelo} está frenando`;
    }
}
// Creación del nuevo objeto en base a las propiedades establecidas en su clase
const coche1 = new Coche( 'Ford', 'Cabrio' );

console.log(coche1);

console.log(coche1.acelerar());
console.log(coche1.frenar());
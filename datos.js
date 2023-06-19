
let autos = ["mazda", "renault", "ferrari", "mazda", "jeep",
"audi", "ferrari"];

function getAutos() {
    console.log(autos);
    return autos;
}

function getAnimales() {
    let animales = [
        { animal: 'perro', tipo: 'mascota', nombre: 'elvis' },
        { animal: 'tigre', tipo: 'salvaje', nombre: 'hendrix' },
        { animal: 'tiburon', tipo: 'salvaje', nombre: 'ray charles' },
        { animal: 'gato', tipo: 'mascota', nombre: 'lady gaga' }
    ];
    console.log(animales);
    return animales;
}

module.exports = { getAutos, getAnimales };
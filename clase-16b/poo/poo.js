let fiat = {
    marca: 'fiat',
    color: 'azul',
    año: '2005',
    km: 200000,
}

let volkswagen = {
    marca: 'volkswagen',
    color: 'gris',
    año: '2008',
    km: 100000,
}

//la clase es un molde
class Auto {
    constructor(marca, color, año, km){
        this.marca = marca;
        this.color = color;
        this.año = año;
        this.km = km;
    }

    arrancar(){
       console.log('el auto arrancó')
    }
}

let gol = new Auto('volkswagen', 'azul', '1992', 100000)
console.log(gol.arrancar())


class Character {
    constructor(id, name, status, species, type, gender, origin, location, image, episode, url, created){
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
        this.type = type;
        this.gender = gender;
        this.origin = origin;
        this.location = location;
        this.image = image;
        this.episode = episode;
        this.url = url;
        this.created = created;
    }
}

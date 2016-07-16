export class Pokemon {
	constructor (
		public name: string,
		public type: number,
		public strength: number,
		public image: string,
		public x: number,
		public y: number){
}

clone(){
	return new Pokemon(this.name,
	this.type,
	this.strength,
	this.image,
	this.x, this.y);	
}
}

export const Pokemons : Pokemon[] = [
	
	new Pokemon("Bulbasaur", 1, 1, require("./images/001_bulbasaur-1.png"), 0,0),
	new Pokemon("Ivysaur",   1, 1, require("./images/002_ivysaur-1.png"), 0,0),
	new Pokemon("Venusaur", 1, 1, require("./images/003_venusaur-1.png"), 0,0),
	
	new Pokemon("Charmander", 2, 1, require("./images/004_charmander-1.png"), 0,0),
	new Pokemon("Charmeleon", 2, 1, require("./images/005_charmeleon-1.png"), 0,0),
	new Pokemon("Charizard", 2, 1, require("./images/006_charizard-1.png"), 0,0)
	
];
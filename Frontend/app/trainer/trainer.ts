import {Pokemon} from '../pokemons/pokemon';

export interface IFence {
	left: number;
	right: number;
	top: number;
	bottom: number;
}

export interface ITrainer {
	x: number;
	y: number;
	move(within: IFence, pokemons:Pokemon[]);
}

export class Trainer implements ITrainer {
	x: number;
	y: number;
	
	move(within: IFence, pokemons:Pokemon[]){
		
		var nextPokemon = _.min(pokemons, p => Math.sqrt(Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)));
		var dx = 0;
		var dy = 0;
		if(nextPokemon){
			
			dx = nextPokemon.x > this.x 
				? 1 
				: nextPokemon.x < this.x 
					? -1 
					: 0;
					
			dy = nextPokemon.y > this.y 
				? 1 
				: nextPokemon.y < this.y 
					? -1 
					: 0;
			
		}
		
		this.x += dx;
        this.x = Math.max(within.left + 1, Math.min(this.x, within.right - 1));
		
		this.y += dy;
		this.y = Math.max(within.top + 1, Math.min(this.y, within.bottom - 1));
	}
}
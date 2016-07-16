/// <reference path="../../typings/custom.d.ts" />
import { Component, Input } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {Pokemon} from '../pokemons/pokemon';
import {ITrainer} from '../trainer/trainer';

@Component({
    selector: 'poke-area',
    template: require("./poke-area.html"),
    styles: [require("./poke-area.css")]
})
export class PokeArea {
    @Input() catchedPokemons : Pokemon[] = [];
    @Input() pokemons : Pokemon[] = [];
    @Input() trainer : ITrainer;
    @Input() trainerCatched: boolean = false;
    @Input() width : number = 40;
    @Input() height : number = 40;
    
    stylePokemon(pokemon: Pokemon){
        return {
            left: (100 * pokemon.x / this.width) + "%",
            top: (100 * pokemon.y / this.height) + "%"
        };
    }
    
    styleTrainer(){
        return {
            left: (100 * this.trainer.x / this.width) + "%",
            top: (100 * this.trainer.y / this.height) + "%"
        };
    }
}
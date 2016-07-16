/// <reference path="../../typings/custom.d.ts" />
import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {PokeArea} from '../poke-area/poke-area';
import {Pokemon, Pokemons, IFence} from '../pokemons/pokemon';
import {Observable} from 'rxjs/Rx';
import {ITrainer, Trainer} from '../trainer/trainer';

@Component({
    selector: 'app-main',
    template: require("./main.html"),
    styles: [require("./main.css")],
    directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, PokeArea]
})
export class AppMain {
   pokemons : Pokemon[];
   catchedPokemons : Pokemon[] = [];
   trainer: ITrainer;
   fence: IFence = { left: -1, top: -1, right: 40, bottom: 40 };
   trainerCatched = false;
   private timer: any;
   private subscriber: any;
   
   
   constructor() {
       var locations = _.range(0,40);
        this.pokemons = Pokemons.map(p =>{
               var clone = p.clone();
               clone.x = locations[_.random(locations.length)];
               clone.y = locations[_.random(locations.length)];
               return clone;         
        }).concat(Pokemons.map(p =>{
               var clone = p.clone();
               clone.x = locations[_.random(locations.length)];
               clone.y = locations[_.random(locations.length)];
               return clone;         
        })).concat(Pokemons.map(p =>{
               var clone = p.clone();
               clone.x = locations[_.random(locations.length)];
               clone.y = locations[_.random(locations.length)];
               return clone;         
        }));
        
        this.trainer = new Trainer();
        this.trainer.x = locations[_.random(locations.length)];
        this.trainer.y = locations[_.random(locations.length)];
   }
   
   ngOnInit(){
    this.timer = Observable.timer(0,1000);   
  }
   
   togglePlay(){
       if(this.subscriber){
           this.subscriber.unsubscribe();
           this.subscriber = null;
       }
       else{
            this.subscriber = this.timer.subscribe(t=> this.move());
       }
   }
   
   move(){
       this.trainerCatched = false;
       this.movePokemons();
       this.moveTrainer();
       this.moveTrainer();
       this.moveTrainer();
   }
   private moveTrainer(){
      this.trainer.move(this.fence, this.pokemons);
      this.checkForCollisions();
   }
   
   private movePokemons(){
       for(var i = 0; i < this.pokemons.length; i++){
            var p = this.pokemons[i];
            p.move(this.fence);
      }
      this.checkForCollisions();
   }
   
   private checkForCollisions(){
       var pokemonsWithinTrainersRange = this.pokemons.filter(p => this.distanceToTrainer(p) < 3);
       if(pokemonsWithinTrainersRange.length > 0){
           this.trainerCatched = true;
       }
       
       this.catchedPokemons = this.catchedPokemons.concat(pokemonsWithinTrainersRange);
       this.pokemons = this.pokemons.filter(p => this.distanceToTrainer(p) >= 3)
   }
   
   private distanceToTrainer(pokemon: Pokemon){
       return Math.sqrt(Math.pow(pokemon.x - this.trainer.x, 2) + Math.pow(pokemon.y - this.trainer.y, 2));
   } 
}
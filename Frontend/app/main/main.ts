/// <reference path="../../typings/custom.d.ts" />
import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {PokeArea, IPokeAreaTrainer} from '../poke-area/poke-area';
import {Pokemon, Pokemons} from '../pokemons/pokemon';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'app-main',
    template: require("./main.html"),
    styles: [require("./main.css")],
    directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, PokeArea]
})
export class AppMain {
   pokemons : Pokemon[];
   trainer: IPokeAreaTrainer;
   private timer: any;
   private subscriber: any;
   
   constructor() {
       var locations = _.range(0,40);
        this.pokemons = Pokemons.map(p =>{
               var clone = p.clone();
               clone.x = locations[_.random(locations.length)];
               clone.y = locations[_.random(locations.length)];
               return clone;         
        });
        
        this.trainer = {
          x : locations[_.random(locations.length)],
          y : locations[_.random(locations.length)]
        };
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
      
      for(var i = 0; i < this.pokemons.length; i++){
            var p = this.pokemons[i];
            p.x = p.x + _.random(-1,1);
            p.y = p.y + _.random(-1,1);
            
            p.x = Math.max(0, Math.min(p.x, 39));
            p.y = Math.max(0, Math.min(p.y, 39));
      }
       
   }
}
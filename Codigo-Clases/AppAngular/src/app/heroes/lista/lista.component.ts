import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent{

  constructor() { 
    console.log('Soy un Constructor de clase');
  }

  public heroes: string[] = ['Hulk', 'La Viuda Negra', 'Spiderman', 'Ironman', 'Capitan America'];

  public heroeBorrado: string = '';

  public borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }






}

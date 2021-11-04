import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import { juegos } from '../../../models/juegos';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  //atributos de la clase
  games: Juego[] = juegos;
  proveedor: boolean = true;
  game: Juego = null;

  constructor() { }

  ngOnInit(): void {
  }

  pasar(g: Juego){
    this.game = g;
  }
}

import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import { juegos } from '../../models/juegos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  games: Juego[] = juegos;

  constructor() { }

  ngOnInit(): void {
  }

}

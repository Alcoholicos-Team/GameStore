import { Component, OnInit, Input } from '@angular/core';
import { Juego } from '../../../models/juego';
import { NotificationsService} from 'angular2-notifications';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-juego',
  templateUrl: './eliminar-juego.component.html',
  styleUrls: ['./eliminar-juego.component.css']
})
export class EliminarJuegoComponent implements OnInit {

  //atributos de la clase
  @Input() juego: Juego;
  public options = {
    position: ['top', 'right'],
    timeOut: 3000,
    animate: 'fade',
    showProgressBar: false,
    maxStack: 1,
    pauseOnHover: true
  }

  constructor(private simpleService: NotificationsService) { }

  ngOnInit(): void {
  }

  //metodo para mostrar mensaje de exito al borrar el juego
  success(){
    this.simpleService.success('Juego Eliminado', 'El juego se ha eliminado de manera exitosa', this.options);
  }

  //metodo que se encarga de tirara la alerta
  question(){
    Swal.fire({
      title: '¿Esta seguro de Eliminar el Juego?',
      text: "Elije una opción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#adb5bd',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.success();
      }
    })
  }
}

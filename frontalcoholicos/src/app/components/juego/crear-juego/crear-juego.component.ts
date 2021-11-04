import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Juego } from '../../../models/juego';
import { NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.component.html',
  styleUrls: ['./crear-juego.component.css']
})
export class CrearJuegoComponent implements OnInit {

  //atributos de la clase
  private checkFormCreate: FormGroup;
  private submitted:boolean = false;
  private options = {
    position: ['top', 'right'],
    timeOut: 3000,
    animate: 'fade',
    showProgressBar: false,
    maxStack: 1,
    pauseOnHover: true
  };

  constructor(private fb:FormBuilder, private simpleService: NotificationsService) {
    this.checkFormCreate = fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.maxLength(100)]],
      precio: [0.00, [Validators.required, Validators.pattern('^[0-9]{1,3}([0-9]{2})?$')]]
    });
   }

  ngOnInit(): void {
    this.checkFormCreate = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.maxLength(100)]],
      precio: [0.00, [Validators.required, Validators.pattern('^[0-9]{1,3}(\.[0-9]{2})?$')]]
    });
  }

  get game(){ return this.checkFormCreate.controls; }

  //metodo para mostrar mensaje de exito al borrar el juego
  success(){
    this.simpleService.success('Juego Nuevo', 'El juego se ha creado correctamente', this.options);
  }

  error(){
    this.simpleService.error('¡Error!', 'El juego no se puede agregar', this.options);
  }

  //metodo para crear el nuevo juego
  create(data: any){
    this.submitted = true;
    if(this.checkFormCreate.invalid){
      this.error();
      return;
    }else{
      let j = new Juego(data.nombre, data.descripcion, data.precio);
      this.cambiar();
      this.success();
    }
  }

  //metodo para volver todo a la normalidad en el form
  cambiar(){
    if(this.submitted){
      this.submitted = false;
      this.checkFormCreate.reset();
    }
  }
}

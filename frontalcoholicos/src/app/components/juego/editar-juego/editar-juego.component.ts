import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Juego } from '../../../models/juego';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-editar-juego',
  templateUrl: './editar-juego.component.html',
  styleUrls: ['./editar-juego.component.css']
})
export class EditarJuegoComponent implements OnInit {
  //atributos de la clase
  @Input() juego: Juego;
  checkFormEditar: FormGroup;
  submitted: boolean = false;
  options = {
    position: ['top', 'right'],
    timeOut: 3000,
    animate: 'fade',
    showProgressBar: false,
    maxStack: 1,
    pauseOnHover: true
  };

  constructor(private fb:FormBuilder, private simpleService:NotificationsService) {
    this.checkFormEditar = fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.maxLength(100)]],
      precio: [0.00, [Validators.required, Validators.pattern('^[0-9]{1,3}([0-9]{2})?$')]]
    });
    
    /*-------------hey que arreglarlo----------
    console.log(this.juego)
    this.checkFormEditar = fb.group({
      nombre: [this.juego.nombre, [Validators.required]],
      descripcion: [this.juego.descripcion],
      precio: [this.juego.precio, [Validators.required, Validators.pattern('^[0-9]+$')]]
    });*/
   }

  ngOnInit(): void {
    this.checkFormEditar = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.maxLength(100)]],
      precio: [0.00, [Validators.required, Validators.pattern('^[0-9]{1,3}([0-9]{2})?$')]]
    });
  }

  get game(){ return this.checkFormEditar.controls; }

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
    if(this.checkFormEditar.invalid){
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
      this.ngOnInit();
    }
  }
}

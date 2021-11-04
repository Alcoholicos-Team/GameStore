import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  checkForm: FormGroup
  submitted: boolean = false;

  constructor(private formb: FormBuilder, private router: Router){
    this.checkForm = formb.group({
      user: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void { 
    this.checkForm = this.formb.group({
      user: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  get user(){ return this.checkForm.controls; }

  //Metodo para inisiar secion y validar los datos
  onSubmit(data: any){
    this.submitted = true;
    if(this.checkForm.invalid){
      Swal.fire({
        title: 'Mal echo',
        text: "¡El usuario no se ha podido registrar!",
        icon: 'error'
      });
      return;
    }else{
      this.cambiar();
      Swal.fire({
        title: 'Bien echo',
        text: "¡El usuario ha sido registrado!",
        icon: 'success'
      });
    }
  }

  //metodo para ir al componente crear cuenta
  crearCuenta(){
    this.router.navigate(["crear-cuenta"])
  }

  cambiar(){
    if(this.submitted){
      this.submitted = false;
      this.checkForm.reset();
    }
  }
}

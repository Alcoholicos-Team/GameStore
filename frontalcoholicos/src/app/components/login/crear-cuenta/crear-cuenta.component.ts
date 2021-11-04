import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from '../../../models/user'

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  checkForm: FormGroup;
  submitted:boolean = false; 

  constructor(private fb: FormBuilder) {
    this.checkForm = fb.group({
      email: ["", Validators.pattern('^([a-z]+@[a-z]+[\.][a-z]+)?$')],
      user: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
   }

  ngOnInit(): void {
  }

  get user(){ return this.checkForm.controls; }

  //Metodo para inisiar secion y validar los datos
  login(data: any){
    this.submitted = true;
    if(this.checkForm.invalid){
      Swal.fire({
        title: '¡Error!',
        text: "Por favor, creee un usuario valido",
        icon: 'error'
      });
      return;
    }else{
      let user = new User(data.email, data.user, data.password);
      this.cambiar();
      Swal.fire({
        title: 'Exelente',
        text: "¡El usuario ha sido creado con exito!",
        icon: 'success'
      });
    }
  }

  cambiar(){
    if(this.submitted){
      this.submitted = false;
      this.checkForm.reset();
    }
  }
}

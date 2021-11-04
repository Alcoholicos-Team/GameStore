import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './components/errors/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearJuegoComponent } from './components/juego/crear-juego/crear-juego.component';
import { EditarJuegoComponent } from './components/juego/editar-juego/editar-juego.component';
import { EliminarJuegoComponent } from './components/juego/eliminar-juego/eliminar-juego.component';
import { GestionarJuegoComponent } from './components/juego/gestionar-juego/gestionar-juego.component';
import { ListaJuegosComponent } from './components/juego/lista-juegos/lista-juegos.component';
import { CrearCuentaComponent } from './components/login/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './components/login/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path: 'gestionar-juegos', component: GestionarJuegoComponent, children: [
    {path: 'lista-juegos', component: ListaJuegosComponent},
    {path: 'nuevo-juego', component: CrearJuegoComponent},
    {path: 'editar-juego', component: EditarJuegoComponent},
    {path: 'eliminar-juego', component: EliminarJuegoComponent}
  ]},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

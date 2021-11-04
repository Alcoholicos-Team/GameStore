//modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes
import { AppComponent } from './app.component';
import { BrraDeNavegacionComponent } from './components/brra-de-navegacion/brra-de-navegacion.component';
import { IniciarSesionComponent } from './components/login/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './components/login/crear-cuenta/crear-cuenta.component';
import { ListaJuegosComponent } from './components/juego/lista-juegos/lista-juegos.component';
import { GestionarJuegoComponent } from './components/juego/gestionar-juego/gestionar-juego.component';
import { EliminarJuegoComponent } from './components/juego/eliminar-juego/eliminar-juego.component';
import { CrearJuegoComponent } from './components/juego/crear-juego/crear-juego.component';
import { EditarJuegoComponent } from './components/juego/editar-juego/editar-juego.component';
import { Error404Component } from './components/errors/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BrraDeNavegacionComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    ListaJuegosComponent,
    GestionarJuegoComponent,
    EliminarJuegoComponent,
    CrearJuegoComponent,
    EditarJuegoComponent,
    Error404Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

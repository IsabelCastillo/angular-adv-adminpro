import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // nos ofrece el ngIf, ngFor, ese tipo de directivas
import {RouterModule, Routes} from '@angular/router'; // Este es indispensable

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';



// Rutas de la aplicación

const routes: Routes = [

  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: '**', component:NopagefoundComponent},
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), // para importar el modulo y especificar las rutas PRINCIPALES
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // nos ofrece el ngIf, ngFor, ese tipo de directivas
import {RouterModule, Routes} from '@angular/router'; // Este es indispensable
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

// Rutas de la aplicación

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {path: 'dashboard', component:DashboardComponent},
      {path: 'progress', component:ProgressComponent},
      {path: 'grafica1', component:Grafica1Component},
      {path: '', redirectTo:'/dashboard', pathMatch:'full'}, // esto ayudara a que si estoy en la ruta con el slash (/) vacío, va redireccionar automaticamente al dashboard 
    ]

  },
 
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  
  
  {path: '**', component:NopagefoundComponent},
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // para importar el modulo y especificar las rutas PRINCIPALES
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

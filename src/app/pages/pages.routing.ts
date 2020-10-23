import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';


const routes: Routes = [
   
    {
        path:'dashboard',
        component:PagesComponent,
        children:[
          {path: '', component:DashboardComponent},
          {path: 'progress', component:ProgressComponent},
          {path: 'grafica1', component:Grafica1Component},
          //{path: '', redirectTo:'/dashboard', pathMatch:'full'}, // esto ayudara a que si estoy en la ruta con el slash (/) vacío, va redireccionar automaticamente al dashboard 
        ]
    
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

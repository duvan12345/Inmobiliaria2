import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'ventaInmobiliaria',
    loadChildren: () => import('./views/venta-inmobiliaria/venta-inmobiliaria.module').then((m) => m.VentaInmobiliariaModule)
      // import('./views/incident/incident.module').then((m) => m.VentaApartamentoComponent)
   
  },

  {
    path: 'ArriendoInmobiliaria',
    loadChildren: () => import('./views/arriendo-inmobiliaria/arriendo-inmobiliaria.module').then((m) => m.ArriendoInmobiliariaModule)
      // import('./views/incident/incident.module').then((m) => m.VentaApartamentoComponent)
   
  },

  {
    path: 'propietarios',
    loadChildren: () => import('./views/propietarios/propietarios.module').then((m) => m.PropietariosModule)
      // import('./views/incident/incident.module').then((m) => m.VentaApartamentoComponent)
   
  },

  {
    path: 'AgregarInmobiliaria',
    loadChildren: () => import('./views/agregar-inmobiliaria/agregar-inmobiliaria.module').then((m) => m.AgregarInmobiliariaModule)
      // import('./views/incident/incident.module').then((m) => m.VentaApartamentoComponent)
   
  }




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

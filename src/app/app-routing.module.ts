import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [

  {
    // path: '',
    // redirectTo: 'ventaInmobiliaria',
    // pathMatch: 'full'

      path: '',
    redirectTo: '/ventaInmobiliaria',
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
   
  },

  {
    path: 'LoginPage',
    component: LoginComponent,
    data: {
      title: 'LoginPage'
    }
  },

  // { path: '**', component: PageNotFoundComponent } // Ruta comodin

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

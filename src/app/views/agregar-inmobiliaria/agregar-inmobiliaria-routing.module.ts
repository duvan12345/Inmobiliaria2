import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarInmobiliariaComponent } from './agregar-inmobiliaria.component';

const routes: Routes = [
  {
    path: '',
    component: AgregarInmobiliariaComponent,
    data: {
      title: 'AgregarInmobiliaria',
    },
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarInmobiliariaRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaInmobiliariaComponent } from './venta-inmobiliaria.component';

const routes: Routes = [
{
  path: '',
  component: VentaInmobiliariaComponent,
  data: {
    title: 'VentaInmobiliaria',
  },
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaInmobiliariaRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArriendoInmobiliariaComponent } from './arriendo-inmobiliaria.component';

const routes: Routes = [

  {
    path: '',
    component: ArriendoInmobiliariaComponent,
    data: {
      title: 'ArriendoInmobiliaria',
    },
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArriendoInmobiliariaRoutingModule { }

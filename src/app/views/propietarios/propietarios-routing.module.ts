import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietariosComponent } from './propietarios.component';

const routes: Routes = [
  {
    path: '',
    component: PropietariosComponent,
    data: {
      title: 'propietarios',
    },
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietariosRoutingModule { }

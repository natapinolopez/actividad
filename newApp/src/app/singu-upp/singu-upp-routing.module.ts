import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinguUppPage } from './singu-upp.page';

const routes: Routes = [
  {
    path: '',
    component: SinguUppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinguUppPageRoutingModule {}

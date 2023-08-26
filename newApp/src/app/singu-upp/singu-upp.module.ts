import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinguUppPageRoutingModule } from './singu-upp-routing.module';

import { SinguUppPage } from './singu-upp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinguUppPageRoutingModule
  ],
  declarations: [SinguUppPage]
})
export class SinguUppPageModule {}

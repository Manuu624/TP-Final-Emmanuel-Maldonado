import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

//componentes
import { InicioComponent } from './inicio/inicio.component';

//material
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatIconModule
  ]
})
export class PagesModule { }

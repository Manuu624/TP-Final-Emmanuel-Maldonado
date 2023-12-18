import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/principal/pages/inicio/inicio.component';

const routes: Routes = [
{
  path:'', component:InicioComponent,
},
{
  path:"",loadChildren:()=>import('./modules/principal/pages/pages.module').then(m=>m.PagesModule)
},
{
  path:"",loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

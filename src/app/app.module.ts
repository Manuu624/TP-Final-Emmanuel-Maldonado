import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

//firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { TableComponent } from './modules/admin/table/table.component';
import { InicioComponent } from './modules/principal/pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    InicioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebaseConfig), //inicializa firebase
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/main/home.component';
import { PaginaCandidaturaComponent } from './components/pagina-candidatura/main/pagina-candidatura.component';
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './components/nav-bar/main/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ChiSiamoComponent } from './components/chi-siamo/main/chi-siamo.component';
import { LoginComponent } from './components/login/main/login.component';
import { INostriValoriComponent } from './components/i-nostri-valori/main/i-nostri-valori.component';
=======
import { DoveSiamoComponent } from './components/dove-siamo/main/dove-siamo.component';
>>>>>>> origin/matteo_ufficiale

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaCandidaturaComponent,
    NavBarComponent,
<<<<<<< HEAD
    ChiSiamoComponent,
    LoginComponent,
    INostriValoriComponent
=======
    DoveSiamoComponent
>>>>>>> origin/matteo_ufficiale
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

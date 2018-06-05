import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { environment } from './../environments/environment';
import { AuthService } from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    AuthService,
    { provide: 'API_ROOT_URL', useValue: environment.api.baseUrl },
    { provide: 'HOSTNAME', useValue: environment.hostname },
    { provide: 'Name', useValue: environment.envName },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

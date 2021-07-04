import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componennts/header/header.component';
import { LoginScreenComponent } from './componennts/login-screen/login-screen.component';
import { QueueListScreenComponent } from './componennts/queue-list-screen/queue-list-screen.component';
import { QueueDetailScreenComponent } from './componennts/queue-detail-screen/queue-detail-screen.component';
import { SignupScreenComponent } from './componennts/signup-screen/signup-screen.component';
import { Interceptor } from './shared/interseptor'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginScreenComponent,
    QueueListScreenComponent,
    QueueDetailScreenComponent,
    SignupScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

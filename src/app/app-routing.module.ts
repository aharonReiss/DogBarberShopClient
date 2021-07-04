import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './componennts/login-screen/login-screen.component';
import { QueueListScreenComponent } from './componennts/queue-list-screen/queue-list-screen.component';
import { SignupScreenComponent } from './componennts/signup-screen/signup-screen.component';
import { CheckAuthGuard } from './guards/check-auth.guard';

const routes: Routes = [
  { path : '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginScreenComponent },
  { path: 'signup-page', component: SignupScreenComponent},
  { path: 'queues-list', component: QueueListScreenComponent,canActivate:[CheckAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

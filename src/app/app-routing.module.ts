import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//Module
import {PagesRoutingModule} from './pages/pages.routing';
import {AuthRoutingModule} from './auth/auth.routing';

//Component
import {NopagefoundComponent} from './nopagefound/nopagefound.component';

const routes: Routes = [    
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

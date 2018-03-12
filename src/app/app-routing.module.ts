import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ListenComponent } from './listen/listen.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'about', component: AboutComponent },
  { path: '30x30', loadChildren: 'app/thirty-by-thirty/thirty-by-thirty.module#ThirtyByThirtyModule'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
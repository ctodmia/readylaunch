import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgMaterialModule } from './ng-material/ng-material.module'
import { ThirtyByThirtyModule } from './thirty-by-thirty/thirty-by-thirty.module';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ListenComponent } from './listen/listen.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ListenComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialModule,
    ThirtyByThirtyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

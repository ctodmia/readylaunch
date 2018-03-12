import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirtyByThirtyRoutingModule } from './thirty-by-thirty-routing.module';
import { CollectionViewComponent } from './collection-view/collection-view.component';
import { NgMaterialModule } from '../ng-material/ng-material.module'

@NgModule({
  imports: [
    CommonModule,
    ThirtyByThirtyRoutingModule,
    NgMaterialModule
  ],
  exports: [
  ],
  declarations: [CollectionViewComponent]
})
export class ThirtyByThirtyModule { }

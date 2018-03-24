import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirtyByThirtyRoutingModule } from './thirty-by-thirty-routing.module';
import { CollectionViewComponent } from './collection-view/collection-view.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { SeasonViewComponent } from './season-view/season-view.component';
import { SeasonService } from '../services/season.service';
import { DayViewComponent } from './day-view/day-view.component';


@NgModule({
  imports: [
    CommonModule,
    ThirtyByThirtyRoutingModule,
    NgMaterialModule
  ],
  exports: [
  ],
  providers: [SeasonService],
  declarations: [CollectionViewComponent, SeasonViewComponent, DayViewComponent]
})
export class ThirtyByThirtyModule { }

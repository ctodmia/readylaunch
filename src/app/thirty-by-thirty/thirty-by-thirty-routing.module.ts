import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionViewComponent} from './collection-view/collection-view.component';
import { SeasonViewComponent } from './season-view/season-view.component';
import { DayViewComponent } from './day-view/day-view.component';

const routes: Routes = [
  {path: '', component: CollectionViewComponent},
  {path: 'season/:id', component: SeasonViewComponent},
  {path: 'season/:id/day/:id', component: DayViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirtyByThirtyRoutingModule { }

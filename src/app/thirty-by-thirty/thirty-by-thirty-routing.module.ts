import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionViewComponent} from './collection-view/collection-view.component'

const routes: Routes = [
  {path: '', component: CollectionViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirtyByThirtyRoutingModule { }

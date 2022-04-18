import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BstOneComponent} from './component/bst-one/bst-one.component';
import {BstTwoComponent} from './component/bst-two/bst-two.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'one', component: BstOneComponent},
  {path: 'two', component: BstTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

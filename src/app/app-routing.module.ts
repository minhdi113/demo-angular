import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {DshfgsfComponent} from './component/dshfgsf/dshfgsf.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'product',
    loadChildren: () => import('../app/component/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'dsfdsfsd',
    component: DshfgsfComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

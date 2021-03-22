import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductsComponent} from './products/list-products/list-products.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'products', component: ListProductsComponent},
  {path: '', component: ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductType } from '../models/product-type';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-one',
    pathMatch: 'full'
  },
  {
    path: 'product-one',
    component: HomeComponent,
    data: { productType: ProductType.One },
  },
  {
    path: 'product-two',
    component: HomeComponent,
    data: { productType: ProductType.Two },
  },
  {
    path: 'product-three',
    component: HomeComponent,
    data: { productType: ProductType.Three },
  },
  {
    path: '**',
    redirectTo: 'product-one',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

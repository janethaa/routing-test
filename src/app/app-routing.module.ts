import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateUserResolver } from './resolver/validate-user.resolver';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: ':username',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      { path: 'product-one', loadChildren: () => import('./shop/one/one.module').then(m => m.OneModule) },
      { path: 'product-two', loadChildren: () => import('./shop/two/two.module').then(m => m.TwoModule) },
      { path: 'product-three', loadChildren: () => import('./shop/three/three.module').then(m => m.ThreeModule) },
    ],
    resolve: ValidateUserResolver
  },
  { path: 'buy', loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

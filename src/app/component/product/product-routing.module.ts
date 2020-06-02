import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {Injectable, NgModule} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductService} from '../../shared/service/product.service';
import {ProductModel} from '../../model/product.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<ProductModel> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel>
    | Promise<ProductModel> | ProductModel {
    const id = route.params.id ? route.params.id : null;
    return this.productService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: ProductCreateComponent
  },
  {
    path: 'update/:id',
    component: ProductCreateComponent,
    resolve: {
      product: ProductResolver
    }
  },
  // {
  //   path: 'detail/:id',
  //   component: ProductCreateComponent,
  //   resolve: {
  //     product: ProductResolver
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

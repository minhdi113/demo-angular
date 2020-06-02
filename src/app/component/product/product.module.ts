import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCreateComponent} from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductRoutingModule} from './product-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductDeleteComponent } from './product-detele/product-delete.component';



@NgModule({
  declarations: [ProductCreateComponent, ProductListComponent, ProductDeleteComponent],
  exports: [ProductCreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }

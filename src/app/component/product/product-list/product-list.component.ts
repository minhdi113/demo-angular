import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/service/product.service';
import {ProductModel} from '../../../model/product.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagement} from '../../../shared/service/event.management';
import {ProductDeleteComponent} from '../product-detele/product-delete.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(private productService: ProductService,
              private eventManagement: EventManagement,
              public modal: NgbModal) { }

  ngOnInit(): void {
    this.loadProducts();

    this.eventManagement.subscribe('UPDATE_PRODUCT', () => this.loadProducts());
  }

  loadProducts() {
    this.productService.fetch().subscribe(products => {
      this.products = products;
    }, error => console.log(error));
  }
  goToDelete(product: ProductModel) {
    const modalRef = this.modal.open(ProductDeleteComponent);
    modalRef.componentInstance.product = product;
  }
}

import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../../../shared/service/product.service';
import {ProductModel} from '../../../model/product.model';
import {EventManagement} from '../../../shared/service/event.management';

@Component({
  selector: 'app-product-detele',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: ProductModel;
  constructor(public modal: NgbActiveModal,
              private productService: ProductService,
              private eventManagement: EventManagement) { }

  ngOnInit(): void {
  }

  delete() {
    this.productService.delete(this.product.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_PRODUCT');
        this.modal.close();
      }, error => console.log(error)
    );
  }
}

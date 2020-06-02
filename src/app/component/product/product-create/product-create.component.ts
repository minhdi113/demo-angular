import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../shared/service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup;
  isUpdate: any = false;
  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      desc: [''],
    });

    this.route.data.subscribe(({product}) => {
      this.isUpdate = product && product.id !== undefined;
      if (this.isUpdate) {
        this.form.patchValue({
          id: product.id,
          code: product.code,
          name: product.name,
          price: product.price,
          desc: product.desc,
        });
      }
    });
  }

  doSubmit() {
    const product = this.form.value;
    if (this.isUpdate) {
      this.productService.update(product).subscribe(
        () => this.router.navigateByUrl('/product'),
        error => console.log(error));
    } else {
      this.productService.create(product).subscribe(
        () => this.router.navigateByUrl('/product'),
        error => console.log(error));
    }
  }
}

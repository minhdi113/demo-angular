import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ENDPOINT_URL} from '../constants/app.constants';
import {Observable} from 'rxjs';
import {ProductModel} from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${ENDPOINT_URL}/product`);
  }

  findOne(id: any): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${ENDPOINT_URL}/product/${id}`);
  }

  create(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(`${ENDPOINT_URL}/product`, product);
  }

  update(product: ProductModel) {
    return this.http.put(`${ENDPOINT_URL}/product`, product);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/product/${id}`);
  }
}

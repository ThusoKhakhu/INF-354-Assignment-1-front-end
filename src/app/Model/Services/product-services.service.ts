import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http: HttpClient) { }

getApi = 'https://localhost:7299/api/Product/getProducts'
deleteApi = 'https://localhost:7299/api/Product/DeleteProduct/'
addApi = 'https://localhost:7299/api/Product'
updateApi = 'https://localhost:7299/api/UpdateProduct'
getByIdApi = 'https://localhost:7299/api/Product/getProduct/'
//Getting a list of products
getProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(`${this.getApi}`);
}


//Getting a product by it's id
getProduct(id: number): Observable<any>{
  return this.http.get<any>(`${this.getByIdApi}${id}`)
}


//Delete product
deleteProduct(id: number): Observable<void>{
  return this.http.delete<void>(`${this.deleteApi}${id}`);
}

//Adding a product
addProduct(product: any): Observable<any>{
  return this.http.post<any>(`${this.addApi}`, product)
}


updateProduct(id: number, product: any): Observable<any> {
  return this.http.put(`https://localhost:7299/api/Product/UpdateProduct/${id}`, product);
}



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importando matSnackBar
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = "http://localhost:8080/produtos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(proId: string): Observable<Product>{
    const url = `${this.baseUrl}/${proId}`
    return this.http.get<Product>(url)
  }
 
  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.proId}`
    return this.http.put<Product>(url, product)
  }
  
  delete(proId: number): Observable<Product>{    
    const url = `${this.baseUrl}/${proId}`
    return this.http.delete<Product>(url)
  }
getProductById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/products/${id}`);
}

deleteProduct(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/products/${id}`);
}
  

}  

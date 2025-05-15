import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/Product';
import { ProductServicesService } from '../../../Model/Services/product-services.service';
import {MatCardModule} from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { NgFor, NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,MatCardModule,NgFor,NgForOf, MatButtonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {

constructor(private service: ProductServicesService, private router: Router){}

products: Product[] = []

ngOnInit(): void {
  this.getProducts();
}


//Method to fetch products
// getProducts(){
//   this.service.getProducts().subscribe((data: Product[]) =>
//   {
//     this.products = data;
//     console.log(this.products);
//   }
// }
// Method to fetch products
getProducts() {
  this.service.getProducts().subscribe({
    next: (data: Product[]) => {
      this.products = data;
      //console.log(this.products);
    },
    error: (error) => {
      console.error('Error fetching products:', error);
    }
  });
}


//Method to delete
deleteProduct(id: number){
this.service.deleteProduct(id).subscribe({
  next: () => {
    console.log('Product deleted successfully');
    this.getProducts(); //Rrefresh produyct listing
  },error: (error) => {
    console.error('Error deleting product:', error);
  }
});
}

onUpdate(id: number): void{
  console.log('Reirecting to the edit page');
  this.router.navigate(['/UpdateProduct', id]) //Redirects to the edit page with the product's id.
}

}

import { Component } from '@angular/core';
import { ProductServicesService } from '../../../../Model/Services/product-services.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Product } from '../../../../Model/Product';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButton} from '@angular/material/button';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-add-product',
  imports: [NgIf,FormsModule,MatButton,RouterModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

constructor(private service: ProductServicesService, private router: Router){}

newProduct: Product = {
  id: 0,
  productName: '',
  price: 0,
  description: ''
}



  addProduct(newProduct: any) {
    this.service.addProduct(newProduct).subscribe({
      next: (response) => {
        console.log('Product added successfully', response);
        //this.navigateToProducts()
        this.router.navigateByUrl('/products', { replaceUrl: true });

       //this.router.navigateByUrl('/products'); //Redirects back to the product listing page
        
      },
      error: (error) => {
        console.error('Error adding product:', error);
        console.error('Error status:', error.status);  // HTTP status code
        console.error('Error message:', error.message);
      }
    });
  }


  navigateToProducts() {
    console.log('Navigating to products page.');
    this.router.navigate(['/products']);
  }

  onCancel(){
    this.router.navigate(['/products']); //Redirects back to the product listing page
  }

}

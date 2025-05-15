import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../../Model/Product';
import { ProductServicesService } from '../../../Model/Services/product-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { NgModel } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


export class UpdateModel {
  productName!: string;
  description!: string;
  price!: number;
}



@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [MatFormField,FormsModule, MatLabel,MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {

constructor(private service: ProductServicesService, private router: Router, private route: ActivatedRoute){}

id!: number;
productData = {
  id: 0,
  productName: '',
  description: '',
  price: 0
};

ngOnInit(): void {

// Get the product ID from the route parameters and convert it to a number
const productId = this.route.snapshot.paramMap.get('id');
  
if (productId) {
  this.id = Number(productId);  // Convert the string to a number
  if (!isNaN(this.id)) {  // Check if the conversion was successful
    this.getProductById(this.id); // Fetch the product details by ID
  } else {
    console.error('Invalid product ID');
  }
}

 
}


updateProduct() {
  this.service.updateProduct(this.id, this.productData).subscribe(
    (response) => {
      console.log('Product updated successfully:', response);
      this.router.navigate(['/products']); // Navigate back to product list
    },
    (error) => {
      console.error('Error updating product:', error);
    }
  );
}


 // Fetch product details by ID
 getProductById(id: number): void {
  this.service.getProduct(id).subscribe({
    next: (product) => {
      this.productData = product;  // Populate the form with the product details
    },
    error: (error) => {
      console.error('Error fetching product:', error);
    }
  });
}




onCancel(){
  this.router.navigate(['/products'])
}

 
}

import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './Products/ProductListing/product-list/product-list.component';
import { AddProductComponent } from './Products/ProductListing/AddProduct/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { UpdateProductComponent } from './Products/UpdateProduct/update-product/update-product.component';


export const routes: Routes = [
    {path: 'products', component: ProductListComponent},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'UpdateProduct/:id', component: UpdateProductComponent},
    { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

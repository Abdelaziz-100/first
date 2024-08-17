import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCategoryMenuComponent } from "./components/product-category-menu/product-category-menu.component";
import { SearchComponent } from "./components/search/search.component";
import { CartStatusComponent } from "./components/cart-status/cart-status.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',],
  providers: [ProductService],
  imports: [ReactiveFormsModule, CheckoutComponent, RouterModule, RouterOutlet, ProductListComponent, HttpClientModule, CommonModule, ProductCategoryMenuComponent, SearchComponent, CartStatusComponent]
})
export class AppComponent {
  title = 'angular-ecommerce';
}

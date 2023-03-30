import { Component } from '@angular/core';
import { Product } from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'inventory-app';
  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/runningshoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/bluejacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/niceblackhat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
    ];
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked:', product);
  }
}

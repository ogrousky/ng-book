import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-display',
  template: `
      <div class="price-display">\${{price}}</div>`,
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input() price: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}

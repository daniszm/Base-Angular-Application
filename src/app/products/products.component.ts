import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName: string = "A Book";
  products= ['One', 'Two']

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.products.push(this.productName);
  }

  removeProduct(productName: string){
    this.products = this.products.filter(p => p !== productName)
  }

}

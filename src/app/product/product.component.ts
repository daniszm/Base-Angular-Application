import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productName;
  @Output() productClicked = new EventEmitter();
  
  constructor() { }

  ngOnInit() {

  }

  onClicked() {
    this.productClicked.emit();
  }

}

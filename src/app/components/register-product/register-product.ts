import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';
import { ProductInterface } from '../../interfaces/ProductInterface';

@Component({
  selector: 'app-register-product',
  standalone: false,
  templateUrl: './register-product.html',
  styleUrls: ['./register-product.css'],
})
export class RegisterProduct implements OnInit {

  @Input()
  categories: CategoryInterface[] = {} as CategoryInterface[];

  @Input()
  product?: ProductInterface;

  @Input()
  isUpdate?: boolean;

  @Output()
  saveEmitter = new EventEmitter();

  @Output()
  updateEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }

  update() {
    this.updateEmitter.emit();
  }
  
  constructor() { }
  ngOnInit(): void {

  }
}

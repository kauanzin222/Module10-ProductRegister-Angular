import { Component, Input } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';

@Component({
  selector: 'app-register-category',
  standalone: false,
  templateUrl: './register-category.html',
  styleUrl: './register-category.css',
})
export class RegisterCategory {
  @Input()
  category?: CategoryInterface;

  @Input()
  isUpdate?: boolean;
}

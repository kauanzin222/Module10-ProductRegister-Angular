import { Component } from '@angular/core';
import { CategoryService } from '../../services/category-service';
import { CategoryInterface } from '../../interfaces/CategoryInterface';

@Component({
  selector: 'app-table-categories',
  standalone: false,
  templateUrl: './table-categories.html',
  styleUrl: './table-categories.css',
})
export class TableCategories {
  isUpdate: boolean = false;

  // Cria a lista para utilizar na tabela e objeto vazio
  categories: CategoryInterface[] = [];
  category: CategoryInterface = {} as CategoryInterface;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    //this.categories = this.categoryService.getCategories();
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      /* data é o que vou receber do backend */
      next: data => { this.categories = data }
    });
  }

  saveCategory() {

  }

  updateCategory(selectedCategory: CategoryInterface) {
  }

  confirmUpdate() {
  }

  removeCategory(selectedCategory: CategoryInterface) {
  }



}

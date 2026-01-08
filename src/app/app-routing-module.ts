import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TableProducts } from './components/table-products/table-products';
import { TableCategories } from './components/table-categories/table-categories';

const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'product', component: TableProducts},
  { path: 'category', component: TableCategories}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

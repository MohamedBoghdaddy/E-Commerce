// client/src/app/app-routing.module.ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "cart", component: ShoppingCartComponent },
  // Add more routes as necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

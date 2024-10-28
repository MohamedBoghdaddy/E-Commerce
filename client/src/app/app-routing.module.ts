import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "../Components/product-list/product-list.component";
import { ShoppingCartComponent } from "../Components/shopping-cart/shopping-cart.component";
import { HomeComponent } from "../Components/home/home.component";
import { LoginComponent } from "../Components/Login&Registration/Login/login.component";
import { SignupComponent } from "../Components/Login&Registration/Signup/signup.component";
import { authGuard } from "./guards/auth.guard";

export const appRoutes: Routes = [
  { path: "cart", component: ShoppingCartComponent },
  { path: "home", component: HomeComponent, canActivate: [authGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }, // Use lowercase for the path name
  { path: "productList", component: ProductListComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Use appRoutes here
  exports: [RouterModule],
})
export class AppRoutingModule {}

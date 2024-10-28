import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module"; // Angular Material Module
import { HomeComponent } from "../Components/home/home.component";
import { LoginComponent } from "../Components/Login&Registration/Login/login.component";
import { SignupComponent } from "../Components/Login&Registration/Signup/signup.component";
import { ProductCarouselComponent } from "../Components/product-carousel/product-carousel.components";
import { ProductListComponent } from "../Components/product-list/product-list.component";
import { ShoppingCartComponent } from "../Components/shopping-cart/shopping-cart.component";
import { OrderHistoryComponent } from "../Components/order-history/order-history.component";
import { PaymentGatewayComponent } from "../Components/payment-gateway/payment-gateway.component";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { ButtonModule } from "primeng/button"; // Ensure ButtonModule is imported

@NgModule({
  declarations: [
    HomeComponent,
    ProductCarouselComponent,
    ProductListComponent,
    ShoppingCartComponent,
    OrderHistoryComponent,
    PaymentGatewayComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CardModule,
    CheckboxModule,
    ButtonModule, // Add ButtonModule here
  ],
  providers: [],
  bootstrap: [HomeComponent], // Ensure that you are bootstrapping a non-standalone component
})
export class AppModule {}

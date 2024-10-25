// client/src/app/app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module"; // Import Angular Material Module

import { AppComponent } from "./app.component";
import { ProductCarouselComponent } from "./components/product-carousel/product-carousel.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { OrderHistoryComponent } from "./components/order-history/order-history.component";
import { PaymentGatewayComponent } from "./components/payment-gateway/payment-gateway.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductCarouselComponent,
    ProductListComponent,
    ShoppingCartComponent,
    OrderHistoryComponent,
    PaymentGatewayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

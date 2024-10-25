// client/src/app/components/shopping-cart/shopping-cart.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"],
})
export class ShoppingCartComponent implements OnInit {
  cartItems = [
    { name: "Product 1", price: 100, quantity: 1 },
    { name: "Product 2", price: 150, quantity: 2 },
  ];

  constructor() {}

  ngOnInit(): void {}

  getTotalCost(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }
}

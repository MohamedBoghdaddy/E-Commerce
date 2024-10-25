// client/src/app/components/product-carousel/product-carousel.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-carousel",
  templateUrl: "./product-carousel.component.html",
  styleUrls: ["./product-carousel.component.css"],
})
export class ProductCarouselComponent implements OnInit {
  products = [
    { name: "Product 1", image: "assets/product1.jpg" },
    { name: "Product 2", image: "assets/product2.jpg" },
    { name: "Product 3", image: "assets/product3.jpg" },
  ];

  constructor() {}

  ngOnInit(): void {}
}

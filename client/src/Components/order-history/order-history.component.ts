// client/src/app/components/order-history/order-history.component.ts
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.css"],
})
export class OrderHistoryComponent implements OnInit {
  orders = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchOrderHistory();
  }

  fetchOrderHistory() {
    this.http.get("/api/orders").subscribe((data: any) => {
      this.orders = data;
    });
  }
}

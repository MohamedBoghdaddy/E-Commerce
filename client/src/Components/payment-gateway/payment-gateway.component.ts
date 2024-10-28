import { Component } from "@angular/core";

@Component({
  selector: "app-payment-gateway",
  templateUrl: "./payment-gateway.component.html",
  styleUrls: ["./payment-gateway.component.css"],
})
export class PaymentGatewayComponent {
  cardNumber: string = "";
  cardHolderName: string = "";
  expiryDate: string = "";
  cvv: string = "";

  constructor() {}

  onSubmit(): void {
    if (this.validatePaymentDetails()) {
      // Implement payment processing logic here (e.g., using Razorpay API)
      console.log("Payment details:", {
        cardNumber: this.cardNumber,
        cardHolderName: this.cardHolderName,
        expiryDate: this.expiryDate,
        cvv: this.cvv,
      });
      alert("Payment processed successfully!");
    } else {
      alert("Invalid payment details. Please try again.");
    }
  }

  validatePaymentDetails(): boolean {
    // A simple validation function for demonstration purposes
    return (
      this.cardNumber.length === 16 &&
      this.cardHolderName.length > 0 &&
      this.expiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/) !== null &&
      this.cvv.length === 3
    );
  }
}

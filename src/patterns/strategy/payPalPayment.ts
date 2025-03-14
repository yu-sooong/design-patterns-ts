import {PaymentStrategy} from "./interface/paymentStrategy";

export class PayPalPayment implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid $${amount} using PayPal.`;
    }
}

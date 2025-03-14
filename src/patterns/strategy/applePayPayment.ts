import { PaymentStrategy } from "./interface/paymentStrategy";

export class ApplePayPayment implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid $${amount} using Apple Pay.`;
    }
}

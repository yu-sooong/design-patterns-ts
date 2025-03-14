import { PaymentStrategy } from "./interface/paymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid $${amount} using Credit Card.`;
    }
}

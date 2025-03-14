import { PaymentStrategy } from "./interface/paymentStrategy";

export class CashPayment implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid $${amount} using Cash.`;
    }
}

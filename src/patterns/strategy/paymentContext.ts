import { PaymentStrategy } from "./interface/paymentStrategy";
import { CashPayment } from "./cashPayment";


export class PaymentContext {
    private strategy: PaymentStrategy

    constructor(strategy?: PaymentStrategy) {
        this.strategy = strategy || new CashPayment();
    }

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    executePayment(amount: number): string {
        return this.strategy.pay(amount)
    }
}
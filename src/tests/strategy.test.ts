import {CreditCardPayment} from "../patterns/strategy/creditCardPayment";
import {PayPalPayment} from "../patterns/strategy/payPalPayment";
import {ApplePayPayment} from "../patterns/strategy/applePayPayment";
import {PaymentContext} from "../patterns/strategy/paymentContext";


describe("Strategy Pattern - Payment System with Default Cash Payment", () => {
    test("should use default CashPayment when no strategy is set", () => {
        const payment = new PaymentContext();
        expect(payment.executePayment(50)).toBe("Paid $50 using Cash.");
    });
    test("should use CreditCardPayment strategy", () => {
        const payment = new PaymentContext(new CreditCardPayment());
        expect(payment.executePayment(100)).toBe("Paid $100 using Credit Card.");
    });
    test("should switch to PayPalPayment strategy", () => {
        const payment = new PaymentContext();
        payment.setStrategy(new PayPalPayment());
        expect(payment.executePayment(200)).toBe("Paid $200 using PayPal.");
    });
    test("should switch to ApplePayPayment strategy", () => {
        const payment = new PaymentContext();
        payment.setStrategy(new ApplePayPayment());
        expect(payment.executePayment(300)).toBe("Paid $300 using Apple Pay.");
    });
});
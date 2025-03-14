import {Singleton} from "../patterns/singleton/singleton";

describe("Singleton", () => {
    test("should return the same singleton", () => {
        const instance1 = Singleton.getInstance();
        const instance2 = Singleton.getInstance();
        const instance3 = Singleton.getInstance();
        expect(instance1).toBe(instance2);
        expect(instance2).toBe(instance3);
    })
})
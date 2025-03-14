import {AdventurerType} from "../patterns/simple-factory/enum/type";
import {trainingAdventurer} from "../patterns/simple-factory/trainingCamp";

describe("Simple Factory Pattern", () => {
    test("should return Archer", () => {
        const adventurer = trainingAdventurer(AdventurerType.Archer);
        expect(adventurer.getType()).toBe("Archer !!!");
    })
    test("should return Warrior", () => {
        const adventurer = trainingAdventurer(AdventurerType.Warrior);
        expect(adventurer.getType()).toBe("Warrior !!!");
    })
})
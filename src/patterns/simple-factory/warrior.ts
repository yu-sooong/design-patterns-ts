import { Adventurer } from "./interface/adventurer";

export class Warrior implements Adventurer {
    getType(): string {
        return "Warrior !!!";
    }
}
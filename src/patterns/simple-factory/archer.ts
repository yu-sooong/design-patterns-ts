import { Adventurer } from "./interface/adventurer";

export class Archer implements Adventurer {
    getType(): string {
        return "Archer !!!";
    }
}
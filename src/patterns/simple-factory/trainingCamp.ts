import { AdventurerType } from "./enum/type";
import { Adventurer } from "./interface/adventurer";
import { Archer } from "./archer";
import { Warrior } from "./warrior";

function trainingAdventurer(type: AdventurerType): Adventurer {
    switch (type) {
        case AdventurerType.Archer:
            return new Archer();
        case AdventurerType.Warrior:
            return new Warrior();
        default:
            throw new Error("Invalid type");
    }
}


export { trainingAdventurer };
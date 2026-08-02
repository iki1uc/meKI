// visualizer.js — zeigt alle 756 Achsen

import { meKI } from "./meKI.js";

export function visualize756(rooms){

    const result = [];

    for(let tick = 0; tick < 84; tick++){        // 84 = LCM(9,11,4)
        for(let turns = 0; turns < 9; turns++){
            for(let slide = 0; slide < 3; slide++){
                const axiomMode = ["IN","OUT","IO"][slide];

                const calc = meKI(
                    rooms.GA,
                    tick,
                    turns,
                    axiomMode,
                    slide
                );

                result.push(calc);
            }
        }
    }

    console.log("756-AXIOM-SET:", result);
    return result;
}

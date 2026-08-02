// visualizer.js — 2268-Achsen Zauberwürfel

import { meKI } from "./meKI.js";

export function visualize2268(rooms){

    const out = [];

    for(let room of [rooms.GA, rooms.meKI, rooms.MIE]){
        for(let tick = 0; tick < 84; tick++){
            for(let turns = 0; turns < 9; turns++){
                for(let slide = 0; slide < 3; slide++){
                    for(let axiom of ["IN","OUT","IO"]){

                        out.push(
                            meKI(room, tick, turns, axiom, slide)
                        );
                    }
                }
            }
        }
    }

    console.log("2268-AXIOM-WÜRFEL:", out);
    return out;
}

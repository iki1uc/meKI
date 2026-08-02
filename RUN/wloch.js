export function stabiliseRoom(room){
    return {
        ist: room.ist,
        soll: (room.ist % 3) + 1
    };
}


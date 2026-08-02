let combo = [];

export function addCombo(action){
    combo.push(action);
}

export function executeCombo(){
    const result = [...combo];
    combo = [];
    return result;
}


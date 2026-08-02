export function applyColorRules(combo, score, turns){
    combo.forEach(c => {
        if(c.color === "yellow") turns--;
        if(c.color === "green") score += 6;
        if(c.color === "red") score = Math.floor(score * 0.5);
    });
    return score;
}


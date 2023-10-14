

function randomPicks(arr, numPicks) {
    let indices = Array.from({ length: arr.length }, (_, i) => i);
    let picks = [];
    for (let i = 0; i < numPicks && indices.length > 0; i++) {
        let randomIndex = Math.floor(Math.random() * indices.length);
        picks.push(indices[randomIndex]);
        indices.splice(randomIndex, 1);
    }
    return picks;
}

export default randomPicks;
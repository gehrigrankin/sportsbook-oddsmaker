function removeDuplicateGames(games) {
    const gameSignatures = new Set();
    const nonDuplicates = [];
    const duplicates = [];

    games.forEach(game => {
        if (!game?.homeTeam?.abbrev || !game?.awayTeam?.abbrev || !game?.gameDate) {
            return;
        }

        // Assuming each game object has 'homeTeam', 'awayTeam', and 'gameDate' properties
        // Create a unique signature for each game
        const signature = `${game.homeTeam.abbrev}-${game.awayTeam.abbrev}-${game.gameDate}`;
        let nonDuplicateIndex;

        // console.log(signature)

        // If the signature has been seen before, it's a duplicate
        if (gameSignatures.has(signature)) {
            // find game in nonDuplicates array by signature
            let mostDetailedGame = nonDuplicates.find((x, i) => {
                nonDuplicateIndex = i;

                return x.signature === signature
            })

            // compare `game` to the game in the nonDuplicate array
            mostDetailedGame = compareDetails(mostDetailedGame, game)

            // replace the game with the most detailed one
            nonDuplicates[nonDuplicateIndex] = mostDetailedGame;

            duplicates.push(game);
        } else {
            game.signature = signature;
            nonDuplicates.push(game)

            // Otherwise, add the signature to the set
            gameSignatures.add(signature);
        }
    });

    console.log(`removed ${games.length - nonDuplicates.length} entries! length went from ${games.length} to ${nonDuplicates.length}.`)

    return nonDuplicates;
}

function compareDetails(a, b) {
    // console.log('Object.keys(a).length')
    // console.log(Object.keys(a))
    return Object.keys(a).length > Object.keys(b).length ? a : b;
}

module.exports = { removeDuplicateGames }
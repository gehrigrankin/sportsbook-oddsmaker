const {removeDuplicateGames} = require('./removeDuplicateGames')

export const updateSeasonGames = (season, games) => {
    const gamesThisSeason = games.filter((game) => game?.season === season)

    Promise.all(gamesThisSeason)
        .then(results => {
            createJSON(removeDuplicateGames(results), `nhl-${season}-all-season-games.json`)
        })
        .catch(err => {
            console.error(err)
        })
}
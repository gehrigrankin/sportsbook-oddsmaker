const gameIdsJson = require("../gameIds.json")
const gamesJson = require("../games.json")
const nhl2024Json = require("../nhl-2023-2024-all-season-games.json")

const { fetchGameById } = require("./api/nhl/fetchGameById")
const { getGameIdsThroughDate } = require("./api/nhl/getGameIdsByDateRange")
const { createJSON } = require("./helpers/createJson")
const { findDuplicateGames } = require('./helpers/removeDuplicateGames')

// Main function to run the program
async function main() {
    // console.log(nhl2024Json[0])
    // console.log(nhl2024Json[1])

    getRecordBetweenTeams(nhl2024Json, 'WSH', 'NYR');
}

const getRecordBetweenTeams = async (games, teamA, teamB) => {
    const result = games.filter(game => (game.homeTeam.abbrev === teamA || game.homeTeam.abbrev === teamB) && 
        (game.awayTeam.abbrev === teamA || game.awayTeam.abbrev === teamB))

    console.log(result)
    console.log(result[result.length - 1]?.boxscore?.seasonSeriesWins)
    console.log(result.length)
}

async function foo() {
    // gameIdsJson.slice(0,5).map(id => console.log(id.gameId))

    const games = gameIdsJson.slice(9000, 10000).map(async id => await fetchGameById(id.gameId))


    Promise.all(games).then(results => {
        createJSON(results, "games.json")
    }).catch(error => {
        // Handle any errors that occurred during any of the fetches
        console.error("An error occurred:", error);
    });

    // console.log(games)
}

function logGamesSimple() {
    const x = []
    gamesJson.map((game) => {
        if (game.boxscore) {
            x.push(game)
            // console.log(game.boxscore)
            console.log({
                linescore: game.boxscore.linescore,
                gameInfo: game.boxscore.gameInfo,
                seasonSeriesWins: game.boxscore.seasonSeriesWins,
                teamGameStats: game.boxscore.teamGameStats,
                // ...game.boxscore.linescore.totals,

            })
        }
        else {
            // console.log('*********')
            // console.log(game)
        }
    })
    console.log(x.length)
}



main().catch(console.error);

const { fetchScheduleByDay } = require('./fetchSchedulebyDay')

async function getGameIdsThroughDate(endDate) {
    console.log('foo')
    let currentDate = new Date();
    endDate = new Date(endDate);
    console.log(currentDate)
    console.log(endDate)

    const scheduleArr = [];
    const gameIds = [];

    while (currentDate >= endDate) {
        console.log(currentDate)
        // Format the date as a string (optional, for display purposes)
        const dateString = currentDate.toISOString().split('T')[0];

        const schedule = await fetchScheduleByDay(dateString);
        scheduleArr.push(schedule)

        schedule.gameWeek.map(day => {
            day.games.map(game => gameIds.push({ gameId: game.id }))
        })

        // console.log('===================')
        // console.log(currentDate)

        // Decrement the current date by one day
        currentDate.setDate(currentDate.getDate() - 1);

        // Set to midnight to avoid potential issues with daylight saving time changes
        currentDate.setHours(0, 0, 0, 0);
    }

    return gameIds;
}

module.exports = { getGameIdsThroughDate }

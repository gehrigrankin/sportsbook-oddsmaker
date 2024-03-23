const axios = require('axios');

async function fetchGameById(gameId) {
    try {
        const response = await axios.get(`https://api-web.nhle.com/v1/gamecenter/${gameId}/boxscore`);
        console.log(response.data.id)

        return response.data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching NHL data:', error);
        return null; // Return null in case of error
    }
}

module.exports = {fetchGameById}
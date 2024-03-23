const axios = require('axios');

// day example: 2023-09-23
async function fetchScheduleByDay(day) {
    try {
        const response = await axios.get('https://api-web.nhle.com/v1/schedule/' + day);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching NHL data:', error);
        return null; // Return null in case of error
    }
}

module.exports = {fetchScheduleByDay}

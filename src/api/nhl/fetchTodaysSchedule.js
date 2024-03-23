const axios = require('axios');

export async function fetchTodaysSchedule() {
    const url = 'https://api-web.nhle.com/v1/schedule/now';
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching today\'s NHL schedule:', error);
    }
}

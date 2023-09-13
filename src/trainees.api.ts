import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://api.jsonbin.io/v3/b/6500386b8d92e126ae6ad671',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Master-Key': '$2b$10$z8oTEFGbl2/HxpklWKjk0eVlAT1ZfT.wVZbh2ngRMCBHUTkAfV/2q',
    }
})

export async function getTrainees() {
    try {
        const response = await axiosClient.get('');
        console.log("res " + response.data.record);
        return response.data.record;
    } catch (error) {
        console.error('Error fetching trainees:', error);
        throw error;
    }
}
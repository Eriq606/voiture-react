import axios from 'axios';

export default async function send_raw_post(url, raw, token) {
    try {
        if(token != null) {
            console.log("token ",token);
        }

        const headers = {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
        };

        const response = await axios.post(url, raw, { headers });

        return response.data;
      } catch (error) {
        console.error(error);
      }
}

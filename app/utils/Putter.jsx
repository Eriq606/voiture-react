import axios from 'axios';

export default async function put(url, raw, token) {
    try {
        if(token != null) {
            console.log("token ",token);
        }

        const headers = {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
        };

        const response = await axios.put(url, raw, { headers });

        return response.data;
      } catch (error) {
        console.error(error);
      }
}

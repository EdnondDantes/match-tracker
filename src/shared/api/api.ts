
import axios from 'axios';

const API_BASE_URL = 'https://app.ftoyd.com/fronttemp-service';

export const fetchMatches = async () => {
  const response = await axios.get(`${API_BASE_URL}/fronttemp`);
  return response.data.data.matches;
};
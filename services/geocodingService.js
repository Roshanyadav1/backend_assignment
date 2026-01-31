const axios = require('axios');
require('dotenv').config();

const getAddressFromCoords = async (lat, lon) => {
  const response = await axios.get(process.env.GEO_REVERSE_API_KEY, {
    params: { lat, lon, format: 'jsonv2' },
    headers: { 'User-Agent': 'Backend-Assignment-App' }
  });
  return response.data.display_name || 'Address not found';
};

module.exports = { getAddressFromCoords };